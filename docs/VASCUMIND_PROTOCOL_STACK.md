# VascuMind Protocol Stack Activation

## Decision

VascuMind should be framed as **The VascuMind Protocol**, not a marketplace of random supplements.

```text
Hachinski educational screen
→ Acurist-sourced MCI Screen benchmarking
→ Vascular Cognitive Risk Profile
→ clinician discussion / clinical-trial matching / compliant wellness stack
```

## Activated Website Assets

| Asset | Route | Purpose |
|---|---|---|
| Protocol overview | `/protocol` | Defines the stepwise consumer and CRO journey |
| Clinical trial matching | `/clinical-trial-matching` | Explicit opt-in lead capture for trial/CRO follow-up |
| HSA/FSA status | `/hsa-fsa` | Truemed-style partner path without implying live eligibility |
| Caregiver triage guardrails | `/caregiver-triage` | Emergency-routing rules for future chatbot/local model |
| Compliance rules | `/compliance` | Public claim/disclaimer guardrails |
| CRO partner deck | `/cro-partner-deck` | Web pitch deck for CRO/sponsor conversation |

## Two User Journeys

### Journey A — DTC caregiver

1. Caregiver reads VascuMind Protocol.
2. Caregiver uses Hachinski educational tool to organize subjective vascular-pattern concerns.
3. Caregiver requests/purchases the Acurist-sourced MCI Screen to benchmark cognition.
4. Caregiver reviews clinician-discussion summary.
5. Caregiver considers a compliant wellness stack only after screening and with clinician input.

### Journey B — B2B CRO

1. User opts into clinical-trial matching.
2. VascuMind local/on-prem scoring ranks the lead high/medium/low for follow-up priority.
3. Hermes alerts Croom on high-value leads.
4. VascuMind shares only consented data with CROs/sponsors, with identifiers handled according to privacy/legal review.
5. CRO licensing or lead-access motion proceeds.

## Compliance Rules

- Never use legacy non-Acurist source names for the MCI Screen.
- MCI Screen is sourced from Acurist.AI.
- Required disclaimer: "This test is a cognitive screening, benchmarking and tracking tool, not a diagnostic medical device. Results should be discussed with a qualified healthcare provider."
- Supplements may use structure/function language only.
- Do not imply supplements diagnose, treat, prevent, cure, or mitigate vascular dementia, Alzheimer’s disease, MCI, stroke, or any disease.
- Counsel must review website copy, labels, checkout, email, HSA/FSA language, privacy, and CRO data-sharing workflows before scaled launch.

## Financial Operations

HSA/FSA support is now a planning track, not a claim. VascuMind should evaluate third-party administrators such as Truemed for Letter of Medical Necessity and HSA/FSA qualification workflows.

## Local LLM / On-Prem Engine

Activated as a deterministic local scoring script first:

```bash
npm run score:lead -- '{"leadType":"clinical-trial-match","message":"vascular cognitive trial, 250 participants, Q3", "trialDataConsent":"on"}'
```

The current engine outputs:

- `high`
- `medium`
- `low`
- `emergency_redirect`

It does **not** provide medical advice. It only prioritizes operational follow-up.

## Next Upgrade

Once local model runtime is chosen, the scoring script can become the guardrail wrapper around a local LLM. The wrapper must enforce emergency routing and no-medical-advice language before/after model output.
