# VascuMind Business OS Mission and SMART Objectives

## Mission

Build VascuMind into a vascular cognitive screening and trial-readiness funnel that monetizes through:

1. Cognitive test sales
2. CRO licensing fees
3. Fully disclosed affiliate supplement revenue

The operating model is agent-driven: agents should monitor the site, detect issues, summarize funnel performance, propose experiments, and reduce Croom's manual operating burden.

## SMART Objectives

| Objective | Metric | Target | Timing |
|---|---:|---:|---|
| Cognitive test revenue path | `/memory-screen` live with checkout/follow-up routing | 100% implemented | Weekend sprint |
| CRO licensing path | `/cro-licensing` live with inquiry form and pricing architecture | 100% implemented | Weekend sprint |
| Affiliate revenue path | Product pages use tracked outbound links plus disclosure | 100% implemented | Weekend sprint |
| Compliance guardrails | No legacy `acurist.ca`, no supplement disease-treatment headings, legal/disclosure pages live | 0 regressions | Every deploy |
| Agent QA loop | `npm run qa:vascumind` runs and reports pass/fail | Daily-ready script | Weekend sprint |
| Funnel digest loop | Event taxonomy and digest script exist | Daily-ready script | Weekend sprint |

## Pricing Anchor

MoCA CRO benchmark supplied by Croom: approximately $35,000 license plus $35 per test despite being less accurate. VascuMind should price at parity or premium when supported by Acurist/MCI Screen evidence and trial-fit positioning.

## Build Order

1. `/memory-screen` revenue page
2. Stripe/native Google CRM plumbing
3. `/cro-licensing` page
4. Analytics event tracking
5. Affiliate disclosure and tracked supplement links
6. Agent QA and funnel digest loops
