# VascuMind payment-link sprint checklist

Use this while Stripe is activating the payment link.

## Current recommendation
Use Stripe Payment Links first. Do not build custom Checkout/API until the $99 baseline funnel has real demand.

## Product
- Name: VascuMind Cognitive Baseline / MCI Screen
- Price: $99.00 USD
- Type: One-time payment
- Description: A structured cognitive screening baseline for educational use and clinician discussion. Not a diagnosis or substitute for medical care.

## Payment Link settings
- Collect name and email.
- Optional: collect phone.
- If custom acknowledgement is available, use: I understand this is educational screening/benchmarking information and not a medical diagnosis or substitute for medical care.
- Payment methods: card, Apple Pay, Google Pay, Link; Cash App Pay optional.

## Confirmation / redirect
Preferred redirect:
`https://www.vascumind.com/memory-screen/thank-you?session_id={CHECKOUT_SESSION_ID}`

Fallback if Stripe Payment Links does not support that variable in the UI:
`https://www.vascumind.com/memory-screen/thank-you?checkout_status=paid`

## Vercel env
Set Production env var:
`NEXT_PUBLIC_STRIPE_MEMORY_SCREEN_URL=<live buy.stripe.com payment link>`

Redeploy after setting env var.

## Verification after link is active
1. Visit `/memory-screen`.
2. Click `Create My $99 Cognitive Baseline`.
3. Confirm it opens the live Stripe Payment Link.
4. Do not complete a live card charge unless intentionally testing.
5. Visit `/memory-screen/thank-you?checkout_status=paid` and confirm intake renders.
6. Submit a test intake with non-PHI dummy details.
7. Confirm `/api/lead` returns 200 and CRM/fallback status is acceptable.
8. Run `npm run qa:vascumind` against live site.
