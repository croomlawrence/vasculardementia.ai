#!/usr/bin/env node
const base = process.env.VASCUMIND_BASE_URL || 'https://www.vascumind.com';
const routes = ['/', '/protocol', '/memory-screen', '/memory-screen/thank-you', '/clinical-trial-matching', '/cro-licensing', '/cro-licensing/packet', '/cro-partner-deck', '/caregiver-triage', '/hsa-fsa', '/compliance', '/hachinski', '/marketplace', '/marketplace/omega-3', '/marketplace/beetroot', '/marketplace/b-complex', '/marketplace/vitamin-d3-k2', '/marketplace/percepta', '/research/clinical-evidence', '/research/vascular-dementia-clinical-trials', '/affiliate-disclosure', '/privacy', '/terms'];
const banned = ['acurist.ca', 'Embic', 'for Vascular Dementia?', 'clinically studied brain formula', 'slow brain atrophy', 'treats vascular dementia', 'prevents dementia', 'cures dementia', 'text-gray', 'text-slate', 'text-teal'];
let failures = [];
for (const route of routes) {
  const url = `${base}${route}`;
  const res = await fetch(url, { headers: { 'user-agent': 'VascuMind-QA-Agent/1.0' } });
  const text = await res.text();
  if (!res.ok) failures.push(`${route} returned ${res.status}`);
  for (const token of banned) {
    if (text.includes(token)) failures.push(`${route} contains banned token: ${token}`);
  }
}
const redirect = await fetch(`${base}/clinical-research`, { redirect: 'manual' });
if (![301, 302, 307, 308].includes(redirect.status)) failures.push(`/clinical-research did not redirect; status ${redirect.status}`);
const report = {
  checkedAt: new Date().toISOString(),
  base,
  routesChecked: routes.length,
  status: failures.length ? 'fail' : 'pass',
  failures,
  nextRecommendedAction: failures.length ? 'Open a corrective PR immediately.' : 'Review analytics and run the next funnel experiment.',
};
console.log(JSON.stringify(report, null, 2));
process.exit(failures.length ? 1 : 0);
