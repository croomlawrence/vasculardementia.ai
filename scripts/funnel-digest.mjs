#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const spreadsheetId = process.env.GOOGLE_SHEETS_CRM_ID || '1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg';
const tokenPath = process.env.GOOGLE_TOKEN_PATH || join(homedir(), '.hermes', 'google_token.json');

function readRange(range) {
  if (!existsSync(tokenPath)) {
    return { error: `Google token not found at ${tokenPath}` };
  }
  const code = `
import json
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
creds = Credentials.from_authorized_user_file(${JSON.stringify(tokenPath)})
service = build('sheets', 'v4', credentials=creds)
values = service.spreadsheets().values().get(spreadsheetId=${JSON.stringify(spreadsheetId)}, range=${JSON.stringify(range)}).execute().get('values', [])
print(json.dumps(values))
`;
  try {
    const stdout = execFileSync('python3', ['-c', code], { encoding: 'utf8', timeout: 30000 });
    return { values: JSON.parse(stdout) };
  } catch (error) {
    return { error: error.stderr?.toString() || error.message };
  }
}

function rows(range) {
  const result = readRange(range);
  if (result.error) return { rows: [], error: result.error };
  const values = result.values || [];
  if (values.length <= 1) return { rows: [] };
  const [headers, ...records] = values;
  return {
    rows: records
      .filter((row) => row.some((cell) => String(cell || '').trim()))
      .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || '']))),
  };
}

function isRecent(iso, days = 7) {
  if (!iso) return false;
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return false;
  return time >= Date.now() - days * 24 * 60 * 60 * 1000;
}

const registrations = rows('Registrations!A1:Z500');
const followUps = rows("'Follow-Ups'!A1:Z500");
const experiments = rows('Experiments!A1:Z200');
const events = rows('Events!A1:K1000');

const errors = [registrations, followUps, experiments, events].map((r) => r.error).filter(Boolean);

const registrationRows = registrations.rows || [];
const followUpRows = followUps.rows || [];
const experimentRows = experiments.rows || [];
const eventRows = events.rows || [];

const recentRegistrations = registrationRows.filter((row) => isRecent(row.receivedAt, 7));
const openFollowUps = followUpRows.filter((row) => String(row.status || '').toLowerCase() !== 'closed');
const activeExperiments = experimentRows.filter((row) => ['active', 'candidate', 'planned', 'running', 'shipped'].includes(String(row.status || '').toLowerCase()));
const recentEvents = eventRows.filter((row) => isRecent(row.receivedAt || row.occurredAt, 7));

const eventCounts = recentEvents.reduce((acc, row) => {
  const name = row.eventName || 'unknown';
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});

const segmentCounts = recentRegistrations.reduce((acc, row) => {
  const segment = row.segment || 'unknown';
  acc[segment] = (acc[segment] || 0) + 1;
  return acc;
}, {});

let oneAction = 'Review active experiment VEXP-001 and baseline Hachinski → MCI Screen CTA signal.';
if (errors.length) oneAction = 'Fix Google Sheets CRM read access before trusting funnel metrics.';
else if (!eventRows.length) oneAction = 'Generate or verify live Events rows from Hachinski, CTA, and form interactions.';
else if (openFollowUps.length) oneAction = `Clear the oldest open follow-up: ${openFollowUps[0].registrationId || openFollowUps[0].name || 'unnamed row'}.`;
else if (!activeExperiments.length) oneAction = 'Create one active experiment tied to the highest-signal revenue stream.';
else oneAction = 'Review the running Hachinski → MCI Screen baseline experiment and confirm core Events are flowing.';
const digest = {
  generatedAt: new Date().toISOString(),
  source: `Google Sheets CRM ${spreadsheetId}`,
  status: errors.length ? 'blocked' : 'ok',
  errors,
  last7Days: {
    registrations: recentRegistrations.length,
    registrationsBySegment: segmentCounts,
    events: recentEvents.length,
    eventCounts,
  },
  openFollowUps: openFollowUps.slice(0, 10).map((row) => ({
    registrationId: row.registrationId,
    dueDate: row.followUpDate || row.dueDate,
    priority: row.priority,
    name: row.name,
    email: row.email,
    organization: row.organization,
    nextStep: row.nextStep,
  })),
  activeExperiments: activeExperiments.slice(0, 10).map((row) => ({
    experimentId: row.experimentId,
    status: row.status,
    revenueStream: row.revenueStream,
    hypothesis: row.hypothesis,
    primaryMetric: row.primaryMetric,
    decision: row.decision,
  })),
  oneRecommendedActionToday: oneAction,
};

console.log(JSON.stringify(digest, null, 2));
process.exit(errors.length ? 1 : 0);
