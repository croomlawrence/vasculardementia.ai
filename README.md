This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## House Grok CRM (Leads)

Lead capture writes a full A–Z row to the shared House Grok Google Sheet, tab **Leads**:

```text
https://docs.google.com/spreadsheets/d/12SmO6oWmVeTY4wB2Ti1YIoOyWKt3TUXDrF8izPuIaPk
```

Endpoints:

| Route | Used by |
|---|---|
| `POST /api/guide-lead` | Free-guide form (`EmailCapture`) — contract `{name,email,phone,path}` plus optional UTMs / `source_site` / `segment_hypothesis` |
| `POST /api/lead` | Existing `LeadForm` (memory screen, CRO, trials, affiliate) |
| `POST /api/submit-lead` | Clinical-trial consent form |

Empty or invalid email returns **non-2xx** `{ok:false,error:"email_required"}`. The handlers do **not** return `{ok:true}` unless the House Grok Leads append succeeds.

### Vercel env vars (project `vasculardementia-ai` / www.vascumind.com)

Hermes/Croom must set these on Vercel (Production + Preview):

```text
GOOGLE_SHEETS_ID=12SmO6oWmVeTY4wB2Ti1YIoOyWKt3TUXDrF8izPuIaPk
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service-account email>
GOOGLE_PRIVATE_KEY=<PEM with escaped \n newlines>
```

Then share the House Grok Sheet with that service-account email as **Editor**.

**Production writes cannot succeed until the Sheet is shared.** A deploy without that share will correctly return `{ok:false,error:"crm_write_failed"}` (or `crm_not_configured` if the env vars are missing). Do not treat a local `{ok:true}` from a mocked test as a row in the live Sheet.

### Manual verify after env + share

```bash
# must be 400 / ok:false
curl -sS -X POST https://www.vascumind.com/api/guide-lead \
  -H 'content-type: application/json' \
  -d '{}'

# only after the service account is shared — use a labeled probe email, then delete the row
curl -sS -X POST https://www.vascumind.com/api/guide-lead \
  -H 'content-type: application/json' \
  -d '{"name":"Hermes probe","email":"hermes-probe@vascumind.com","phone":"","path":"/api/guide-lead"}'
```

`source_site` is one of `vascumind` | `vasculardementia` | `baselinecognitivetest` (default `vascumind` unless the request host is vasculardementia).

```bash
npm test
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
