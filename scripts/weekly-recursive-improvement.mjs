#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';

const spreadsheetId = process.env.GOOGLE_SHEETS_CRM_ID || '1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg';
const tokenPath = process.env.GOOGLE_TOKEN_PATH || join(homedir(), '.hermes', 'google_token.json');
const outPath = process.env.VASCUMIND_WEEKLY_REPORT_PATH || join(homedir(), 'Documents/Obsidian Vault/04 - Projects/VascularDementia.ai/Recursive Improvement/Weekly VascuMind Recursive Improvement Report.md');

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

function isRecent(iso, days = 14) {
  if (!iso) return false;
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return false;
  return time >= Date.now() - days * 24 * 60 * 60 * 1000;
}

const registrations = rows('Registrations!A1:Z1000');
const followUps = rows("'Follow-Ups'!A1:Z1000");
const experiments = rows('Experiments!A1:Z300');
const events = rows('Events!A1:K2000');
const errors = [registrations, followUps, experiments, events].map((r) => r.error).filter(Boolean);

const registrationRows = registrations.rows || [];
const followUpRows = followUps.rows || [];
const experimentRows = experiments.rows || [];
const eventRows = events.rows || [];
const recentRegistrations = registrationRows.filter((row) => isRecent(row.receivedAt, 14));
const recentEvents = eventRows.filter((row) => isRecent(row.receivedAt || row.occurredAt, 14));
const openFollowUps = followUpRows.filter((row) => String(row.status || '').toLowerCase() !== 'closed');
const activeExperiments = experimentRows.filter((row) => ['active', 'candidate', 'planned', 'running', 'shipped'].includes(String(row.status || '').toLowerCase()));

const eventCounts = recentEvents.reduce((acc, row) => {
  const name = row.eventName || 'unknown';
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});

const hachinskiCompletions = (eventCounts.quiz_completed || 0) + (eventCounts.hachinski_completed || 0);
const ctaClicks = (eventCounts.cta_memory_screen_click || 0) + (eventCounts.checkout_started || 0);
const croLeads = recentRegistrations.filter((row) => row.segment === 'cro').length;
const consumerLeads = recentRegistrations.filter((row) => row.segment === 'consumer').length;

let bottleneck = 'Insufficient event baseline to choose a conversion bottleneck confidently.';
let experiment = 'Verify Events capture from Hachinski completion, result CTA click, /memory-screen CTA click, and lead submission before changing copy.';
let metric = 'At least one live row in Events for each core funnel event type.';
if (errors.length) {
  bottleneck = 'CRM read access is blocked.';
  experiment = 'Repair Google Sheets OAuth/token access and rerun digest.';
  metric = 'Daily digest reads Registrations, Follow-Ups, Events, and Experiments without error.';
} else if (hachinskiCompletions > 0 && ctaClicks === 0) {
  bottleneck = 'Users are completing the Hachinski check without clear movement to the paid MCI Screen benchmark.';
  experiment = 'Improve result-page CTA copy and trust microcopy for /memory-screen while preserving non-diagnostic language.';
  metric = 'MCI Screen CTA click-through from completed Hachinski sessions.';
} else if (croLeads > consumerLeads && croLeads > 0) {
  bottleneck = 'CRO demand is the strongest visible revenue signal.';
  experiment = 'Tighten CRO follow-up packet and response workflow for the newest qualified CRO lead.';
  metric = 'Qualified CRO conversations booked.';
} else if (openFollowUps.length > 0) {
  bottleneck = 'Open follow-ups are the most immediate revenue/learning constraint.';
  experiment = `Clear or draft the oldest open follow-up (${openFollowUps[0].registrationId || openFollowUps[0].name || 'unnamed row'}).`;
  metric = 'Open follow-ups closed or moved to next dated action.';
}

const lines = [
  '# Weekly VascuMind Recursive Improvement Report',
  '',
  `Generated: ${new Date().toISOString()}`,
  `Source: Google Sheets CRM ${spreadsheetId}`,
  `Status: ${errors.length ? 'BLOCKED' : 'READY'}`,
  '',
  '## 1. Changed signals',
  '',
  `- Registrations in last 14 days: ${recentRegistrations.length}`,
  `- Consumer registrations: ${consumerLeads}`,
  `- CRO registrations: ${croLeads}`,
  `- Events in last 14 days: ${recentEvents.length}`,
  `- Hachinski/quiz completions: ${hachinskiCompletions}`,
  `- MCI Screen/checkout CTA signals: ${ctaClicks}`,
  `- Open follow-ups: ${openFollowUps.length}`,
  `- Active/candidate experiments: ${activeExperiments.length}`,
  '',
  '## 2. Current bottleneck',
  '',
  bottleneck,
  '',
  '## 3. Highest-leverage experiment',
  '',
  experiment,
  '',
  '## 4. Acceptance criteria / metric',
  '',
  metric,
  '',
  '## 5. Compliance guardrail',
  '',
  '- Keep screening educational, benchmarking/tracking oriented, and non-diagnostic.',
  '- Do not imply supplements diagnose, treat, cure, prevent, reverse, or slow vascular dementia/MCI/stroke.',
  '- Do not share identifiable trial/CRO leads without explicit consent and privacy review.',
  '',
  '## 6. Implementation checklist',
  '',
  '- [ ] Confirm baseline data or blocker.',
  '- [ ] Ship one bounded page/copy/workflow change only.',
  '- [ ] Run `npm run lint`, `npm run build`, and `npm run qa:vascumind`.',
  '- [ ] Record result/decision in `Experiments`.',
  '- [ ] Return to the same loop next week.',
  '',
  errors.length ? `## Blockers\n\n${errors.map((e) => `- ${e}`).join('\n')}\n` : '',
].filter(Boolean);

const report = lines.join('\n');
let savedPath = outPath;
try {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, report);
} catch (error) {
  // Obsidian/iCloud FileProvider occasionally throws EDEADLK / system error -11.
  // Keep the loop durable by writing to a local Hermes cache instead of failing.
  savedPath = join(homedir(), '.hermes/cache/vascumind/Weekly VascuMind Recursive Improvement Report.md');
  mkdirSync(dirname(savedPath), { recursive: true });
  writeFileSync(savedPath, report);
  console.error(`Primary Obsidian write failed; saved fallback report to ${savedPath}.`, error.message);
}
console.log(report);
console.log(`\nSaved report: ${savedPath}`);
process.exit(errors.length ? 1 : 0);
