# VascuMind Native CRM — Hermes + Google + Obsidian

## Decision

VascuMind does **not** require HubSpot at this stage. The operating CRM is:

- **Google Sheets**: canonical structured customer/lead/deal database
- **Google Drive**: source-of-truth folder for packets, exports, docs, and attachments
- **Obsidian**: distilled relationship intelligence and follow-up context
- **Hermes**: operator layer for reminders, summaries, outreach drafting, QA, and pipeline review
- **Stripe**: payment links and payment records

HubSpot can be added later only when pipeline volume, email sequencing, SMS, or team-scale sales operations justify the complexity.

## Website data path

```text
VascuMind form
  → /api/guide-lead  (free guide)
  → /api/lead        (LeadForm)
  → /api/submit-lead (trial consent)
  → House Grok CRM Sheet, tab Leads (required)
  → optional legacy VascuMind CRM / Apps Script
  → Hermes daily/weekly review
```

House Grok spreadsheet:

```text
https://docs.google.com/spreadsheets/d/12SmO6oWmVeTY4wB2Ti1YIoOyWKt3TUXDrF8izPuIaPk
```

`POST /api/guide-lead` is the baselinecognitivetest-compatible contract: `{name,email,phone,path}` plus optional `utm_*`, `entry_page`, `source_site`, and `segment_hypothesis`. Email is required. Empty body returns `{ok:false,error:"email_required"}`.

## Environment variables

Required on Vercel for House Grok Leads writes. Share the Sheet as Editor with the service-account email or appends will fail.

```text
GOOGLE_SHEETS_ID=12SmO6oWmVeTY4wB2Ti1YIoOyWKt3TUXDrF8izPuIaPk
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service-account email>
GOOGLE_PRIVATE_KEY=<PEM with escaped \n newlines>
```

Optional legacy VascuMind CRM / notify (not a substitute for House Grok):

```text
GOOGLE_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GOOGLE_LEADS_WEBHOOK_SECRET=<random shared secret>
VASCUMIND_LEAD_NOTIFY_EMAIL=<Croom notification email>
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GOOGLE_OAUTH_REFRESH_TOKEN=
GOOGLE_SHEETS_CRM_ID=1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg
```

`GOOGLE_LEADS_WEBHOOK_SECRET` should match `SHARED_SECRET` in the Google Apps Script file. Do not commit real values.

## Google Sheet

Created CRM sheet:

```text
VascuMind CRM
https://docs.google.com/spreadsheets/d/1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg/edit
```

Spreadsheet ID:

```text
1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg
```

## Google Sheet tabs

The CRM sheet contains these tabs:

| Tab | Purpose |
|---|---|
| `Registrations` | Every website registration, regardless of segment |
| `Memory Screen Customers` | Consumer/caregiver cognitive screening leads |
| `CRO Pipeline` | CRO/sponsor/trial-network licensing leads |
| `Affiliate Interest` | Future affiliate/marketplace partner leads |
| `Follow-Ups` | Next actions and reminders |
| `Email Log` | Future outbound/inbound email event log |
| `Events` | Durable funnel event ledger for Hachinski, CTA, checkout, form, and affiliate signals |

## Core registration fields

| Field | Purpose |
|---|---|
| `registrationId` | Stable ID for Stripe/customer/Obsidian linking |
| `receivedAt` | ISO timestamp |
| `leadType` | `memory-screen`, `cro-licensing`, `affiliate-interest` |
| `segment` | `consumer`, `cro`, `affiliate` |
| `name`, `email`, `phone` | Contact identity |
| `organization`, `role` | Business identity |
| `trialUseCase`, `participantVolume`, `sites`, `timeline` | CRO qualification fields |
| `path` | Source URL path |
| `status` | Default `new`; later `contacted`, `qualified`, `customer`, `closed` |

## Hermes use cases replacing HubSpot

| HubSpot-like use case | Native implementation |
|---|---|
| Lead capture | `/api/lead` → Google Sheet |
| Contact database | Google Sheets tabs |
| Deal pipeline | `CRO Pipeline` tab |
| Email notification | Apps Script `MailApp.sendEmail` to Croom/operator |
| Customer acknowledgement email | Optional Apps Script auto-reply, disabled by default until copy/privacy review |
| Follow-up queue | `Follow-Ups` tab + Hermes cron digest |
| Email drafting | Hermes drafts from row context |
| Relationship memory | Obsidian person/org notes |
| Weekly pipeline report | Hermes cron job reads/exported sheet data |
| Customer source of truth | Google Sheet + Drive folder links |

## Privacy and compliance notes

- Do not collect detailed medical records or emergency symptoms in the website form.
- Keep the website form educational and commercial-intake oriented.
- If deeper health intake is needed, move it into a controlled MCI Screen workflow with appropriate privacy review.
- Do not store API keys, OAuth tokens, or secrets in Obsidian, Google Docs, or public repos.
