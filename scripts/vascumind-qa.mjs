#!/usr/bin/env node
const base = process.env.VASCUMIND_BASE_URL || 'https://www.vascumind.com';
const routes = ['/', '/protocol', '/memory-screen', '/memory-screen/thank-you', '/clinical-trial-matching', '/cro-licensing', '/cro-licensing/packet', '/cro-partner-deck', '/caregiver-triage', '/hsa-fsa', '/compliance', '/transparency', '/hachinski', '/science', '/memory-after-stroke', '/vascular-dementia-symptoms', '/post-stroke-cognitive-impairment', '/hachinski-ischemic-score', '/vascular-cognitive-impairment', '/high-blood-pressure-and-memory', '/small-vessel-disease-memory', '/caregiver-guide-memory-after-stroke', '/cognitive-screening-for-clinical-trials', '/resources', '/resources/what-is-mild-cognitive-impairment', '/resources/mci-vs-normal-aging', '/resources/how-is-mci-diagnosed', '/resources/what-to-do-after-mci-diagnosis', '/resources/guide-to-hachinski-score', '/resources/heart-brain-connection', '/resources/what-is-vascular-cognitive-health', '/clinical-trials', '/clinical-trials/consent', '/clinical-trials/pre-screener', '/marketplace', '/marketplace/citicoline', '/marketplace/mct-oil', '/marketplace/omega-3', '/marketplace/beetroot', '/marketplace/b-complex', '/marketplace/vitamin-d3-k2', '/marketplace/percepta', '/research/clinical-evidence', '/research/vascular-dementia-clinical-trials', '/affiliate-disclosure', '/privacy', '/terms'];
const banned = ['acurist.ca', 'for Vascular Dementia?', 'clinically studied brain formula', 'slow brain atrophy', 'treats vascular dementia', 'prevents dementia', 'cures dementia', 'commercial engine', 'revenue streams', 'conversion journey', 'low-ticket', 'denial bypass', 'revenue fork', 'why it converts', 'Hims', 'Hers', 'most accurate', 'most reliable', 'Superior Accuracy', '97.3% accuracy', '97% accuracy', 'published accuracy of 97%', 'text-gray', 'text-slate', 'text-teal'];
let failures = [];
for (const route of routes) {
  const url = `${base}${route}`;
  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      'user-agent': 'VascuMind-QA-Agent/1.0',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
    },
  });
  const text = await res.text();
  if (!res.ok) failures.push(`${route} returned ${res.status}`);
  for (const token of banned) {
    if (text.includes(token)) failures.push(`${route} contains banned token: ${token}`);
  }
  if (text.includes('href="#"')) failures.push(`${route} contains placeholder href="#"`);
  // /science is now an intentional trust-building nav/footer route, not a primary conversion CTA.
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
