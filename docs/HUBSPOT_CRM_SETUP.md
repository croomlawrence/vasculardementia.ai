# VascuMind HubSpot CRM Setup

## Purpose

Route VascuMind consumer/caregiver and CRO licensing leads into HubSpot so the business can operate as a measurable funnel.

## Required private app token

Create a HubSpot private app token with contact write access, then add this Vercel environment variable:

```text
HUBSPOT_PRIVATE_APP_TOKEN=pat-na1-...
```

Never expose this token in browser code or chat. It is server-side only and used by `/api/lead`.

## Recommended lists

- VascuMind — Memory Screen Leads
- VascuMind — CRO Licensing Leads
- VascuMind — Affiliate / Marketplace Interest

## Recommended lifecycle / pipeline labels

| Segment | HubSpot stage/status | Source path |
|---|---|---|
| Consumer/caregiver memory screen | New lead | `/memory-screen` |
| CRO licensing inquiry | Open lead / sales qualified review | `/cro-licensing` |
| Trial sponsor/CRO packet request | Open lead / high priority | `/cro-licensing/packet` |
| Marketplace interest | Nurture | Product pages |

## Recommended custom properties

Create these custom contact or deal properties when ready:

| Property | Type | Purpose |
|---|---|---|
| `vascumind_lead_type` | dropdown | `memory-screen`, `cro-licensing`, `affiliate-interest` |
| `trial_use_case` | single-line text | Indication / protocol context |
| `projected_participant_volume` | single-line text or number | Trial size estimate |
| `trial_sites` | single-line text | Countries/sites |
| `trial_timeline` | single-line text | Deployment urgency |
| `vascumind_source_path` | single-line text | Page that generated lead |

## Current implementation

`/api/lead` currently creates/updates basic contact fields safely:

- email
- first name
- last name
- company
- job title
- lifecycle stage
- lead status

The API also logs richer lead context server-side until custom HubSpot properties are created.

## Next implementation step

After the custom properties exist, update `/api/lead/route.ts` to send them directly into HubSpot. Until then, the current implementation avoids failing because of missing HubSpot property definitions.
