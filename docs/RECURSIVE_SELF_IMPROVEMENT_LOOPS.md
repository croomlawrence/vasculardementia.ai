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
| QA watchdog | Daily 8:00 AM | Script | Live routes, banned claims, redirect health | Silent if pass; alert if failure |
| CRM operator loop | Daily 8:30 AM | Script | Google Sheets CRM registrations/follow-ups | Telegram operating digest |
| Recursive improvement loop | Mondays 10:00 AM | Hermes agent | CRM snapshot + live site | Next experiment, acceptance criteria, implementation checklist |

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

## Guardrails

- Do not collect detailed medical history in public website forms.
- Keep cognitive screening language educational and non-diagnostic.
- Keep supplement language DSHEA/FTC compliant.
- Do not let automated loops send customer-facing email until copy/privacy is reviewed.
- Do not let cron jobs create more cron jobs.
- Ship one focused experiment at a time with measurable acceptance criteria.

## Next loop upgrades

1. Add Stripe checkout/completion signal once Stripe Payment Link is live.
2. Add Vercel Analytics/PostHog event export for page/CTA conversion rates.
3. Add Obsidian notes generated from high-value CRM rows.
4. Add a weekly CRO outreach packet generator.
5. Add an experiment ledger with hypothesis, change, date shipped, and measured result.
