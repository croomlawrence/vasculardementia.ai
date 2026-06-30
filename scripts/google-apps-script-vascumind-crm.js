/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * VascuMind Native CRM — Google Apps Script Web App
 *
 * Setup:
 * 1. Create a Google Sheet named "VascuMind CRM".
 * 2. Extensions → Apps Script.
 * 3. Paste this file.
 * 4. Set SHARED_SECRET to the same value as Vercel GOOGLE_LEADS_WEBHOOK_SECRET.
 * 5. Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL into Vercel as GOOGLE_LEADS_WEBHOOK_URL.
 */

const SHARED_SECRET = 'replace-with-random-shared-secret';
const AUTO_REPLY_CUSTOMERS = false; // Set true only after legal/privacy review of customer-facing email copy.
const FROM_BRAND = 'VascuMind';

const REGISTRATION_HEADERS = [
  'registrationId', 'receivedAt', 'leadType', 'segment', 'status', 'source', 'path',
  'name', 'email', 'phone', 'organization', 'role', 'trialUseCase',
  'participantVolume', 'sites', 'timeline', 'message', 'consent'
];

function doPost(e) {
  try {
    const secret = (e && e.parameter && e.parameter.secret) || '';
    if (SHARED_SECRET !== 'replace-with-random-shared-secret' && secret !== SHARED_SECRET) {
      return json_({ ok: false, error: 'Unauthorized' }, 401);
    }

    const payload = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    setupCrmSheets_(ss);

    appendRegistration_(ss.getSheetByName('Registrations'), payload);

    if (payload.segment === 'consumer') appendRegistration_(ss.getSheetByName('Memory Screen Customers'), payload);
    if (payload.segment === 'cro') appendRegistration_(ss.getSheetByName('CRO Pipeline'), payload);
    if (payload.segment === 'affiliate') appendRegistration_(ss.getSheetByName('Affiliate Interest'), payload);

    appendFollowUp_(ss.getSheetByName('Follow-Ups'), payload);
    sendNotification_(payload);
    sendCustomerAutoReply_(ss.getSheetByName('Email Log'), payload);

    return json_({ ok: true, registrationId: payload.registrationId });
  } catch (error) {
    return json_({ ok: false, error: String(error) }, 500);
  }
}

function setupCrmSheets_(ss) {
  ['Registrations', 'Memory Screen Customers', 'CRO Pipeline', 'Affiliate Interest'].forEach(name => {
    const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    ensureHeaders_(sheet, REGISTRATION_HEADERS);
  });

  ensureHeaders_(ss.getSheetByName('Follow-Ups') || ss.insertSheet('Follow-Ups'), [
    'registrationId', 'createdAt', 'followUpDate', 'owner', 'status', 'priority',
    'name', 'email', 'organization', 'nextStep', 'notes'
  ]);

  ensureHeaders_(ss.getSheetByName('Email Log') || ss.insertSheet('Email Log'), [
    'timestamp', 'registrationId', 'direction', 'to', 'from', 'subject', 'status', 'notes'
  ]);
}

function ensureHeaders_(sheet, headers) {
  const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  if (current.join('') !== headers.join('')) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function appendRegistration_(sheet, payload) {
  sheet.appendRow(REGISTRATION_HEADERS.map(key => payload[key] || ''));
}

function appendFollowUp_(sheet, payload) {
  const createdAt = new Date().toISOString();
  const followUpDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const nextStep = payload.segment === 'cro'
    ? 'Review CRO licensing fit and draft outreach.'
    : 'Confirm screening next step and payment/intake status.';

  sheet.appendRow([
    payload.registrationId || '', createdAt, followUpDate, 'Croom/Hermes', 'open',
    payload.segment === 'cro' ? 'high' : 'normal', payload.name || '', payload.email || '',
    payload.organization || '', nextStep, payload.message || ''
  ]);
}

function sendNotification_(payload) {
  if (!payload.notifyEmail) return;
  const subject = `[VascuMind] New ${payload.segment || 'lead'} registration: ${payload.name || payload.email}`;
  const body = [
    `Registration ID: ${payload.registrationId}`,
    `Received: ${payload.receivedAt}`,
    `Lead type: ${payload.leadType}`,
    `Segment: ${payload.segment}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || ''}`,
    `Role: ${payload.role || ''}`,
    `Path: ${payload.path || ''}`,
    `Message: ${payload.message || ''}`,
    '',
    'Next step: Review the VascuMind CRM Sheet and assign follow-up.'
  ].join('\n');
  MailApp.sendEmail(payload.notifyEmail, subject, body);
}

function sendCustomerAutoReply_(emailLogSheet, payload) {
  if (!AUTO_REPLY_CUSTOMERS || !payload.email) return;

  const subject = payload.segment === 'cro'
    ? 'VascuMind CRO licensing request received'
    : 'VascuMind memory screen next step received';

  const body = payload.segment === 'cro'
    ? [
        `Hi ${payload.name || ''},`,
        '',
        'Thank you for requesting VascuMind CRO licensing information. We received your inquiry and will review the trial indication, projected volume, and timeline before follow-up.',
        '',
        'VascuMind is an educational and trial-readiness resource. Any clinical validation, data, privacy, or deployment requirements should be reviewed directly before implementation.',
        '',
        `Registration ID: ${payload.registrationId}`,
        '',
        FROM_BRAND
      ].join('\n')
    : [
        `Hi ${payload.name || ''},`,
        '',
        'Thank you for your VascuMind memory screen request. We received your registration and will follow up with the next appropriate screening step.',
        '',
        'VascuMind is educational only and does not provide medical advice, diagnosis, treatment, or emergency care. If symptoms are sudden or severe, call emergency services immediately.',
        '',
        `Registration ID: ${payload.registrationId}`,
        '',
        FROM_BRAND
      ].join('\n');

  MailApp.sendEmail(payload.email, subject, body);
  emailLogSheet.appendRow([
    new Date().toISOString(), payload.registrationId || '', 'outbound', payload.email,
    FROM_BRAND, subject, 'sent', 'Automated acknowledgement'
  ]);
}

function json_(obj, status) {
  return ContentService
    .createTextOutput(JSON.stringify({ ...obj, status: status || 200 }))
    .setMimeType(ContentService.MimeType.JSON);
}
