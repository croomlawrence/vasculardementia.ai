# VascuMind Recursive Self-Improvement Loops

## Objective

Turn VascuMind from a static website into a compounding operating system that observes real signals, decides what to improve, ships focused experiments, and measures outcomes.

## Loop architecture

```text
Observe → Analyze → Prioritize → Ship → Measure → Store learning → Repeat
```

## Active loops

| Loop | Cadence | Owner | Input | Output |
|---|---:|---|---|---|
| QA watchdog | Daily | `npm run qa:vascumind` | Live routes, banned claims, redirect health | Silent if pass; alert if failure |
| CRM operator loop | Daily | `npm run digest:funnel` | Google Sheets CRM registrations, events, follow-ups, experiments | Operating digest + one action |
| Recursive improvement loop | Weekly | `npm run improve:weekly` | CRM snapshot + event ledger + active experiments | Next experiment, acceptance criteria, implementation checklist |

## Local commands

```bash
npm run setup:loops       # create/repair Events, Experiments, and Loop Runs tabs
npm run digest:funnel     # daily operating digest from Google Sheets CRM
npm run improve:weekly    # weekly recursive improvement report; saves to Obsidian
npm run qa:vascumind      # public route/compliance watchdog
```

## Metrics by revenue stream

| Revenue stream | Primary signal | Secondary signal | Improvement target |
|---|---|---|---|
| Cognitive test sales | `/memory-screen` registrations and Stripe checkout starts | memory-screen follow-up completion | Increase paid screen conversion |
| CRO licensing | `/cro-licensing` registrations | qualified trial volume, sponsor/CRO fit | Increase qualified licensing conversations |
| Affiliate supplements | tracked outbound product clicks | email capture before/after click | Increase compliant affiliate revenue without harming trust |

## Current CRM source of truth

```text
Google Sheet: VascuMind CRM
https://docs.google.com/spreadsheets/d/1fmw8ZoTeNFh2onLEbEfq3hXudVQDmXH72IilQXvY_yg/edit
```

Tabs:

- `Registrations`
- `Memory Screen Customers`
- `CRO Pipeline`
- `Affiliate Interest`
- `Follow-Ups`
- `Email Log`
- `Events`
- `Experiments`
- `Loop Runs`

## Guardrails

- Do not collect detailed medical history in public website forms.
- Keep cognitive screening language educational and non-diagnostic.
- Keep supplement language DSHEA/FTC compliant.
- Do not let automated loops send customer-facing email until copy/privacy is reviewed.
- Do not let cron jobs create more cron jobs.
- Ship one focused experiment at a time with measurable acceptance criteria.

## Next loop upgrades

1. Add Stripe checkout/completion signal once Stripe Payment Link is live.
2. Add richer Vercel Analytics/PostHog pageview export if needed; durable first-party funnel events now land in the `Events` tab when Google Sheets env vars are configured.
3. Add Obsidian notes generated from high-value CRM rows.
4. Add a weekly CRO outreach packet generator.
5. Record every shipped learning in `Experiments` with hypothesis, change, date shipped, result, and decision.
