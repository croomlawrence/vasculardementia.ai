#!/usr/bin/env node
/**
 * Local/on-prem lead qualification engine for VascuMind CRO follow-up.
 * This is not medical advice. It only prioritizes operational follow-up.
 */

const emergencyTokens = [
  'stroke last week', 'stroke today', '911', 'facial droop', 'face drooping',
  'one-sided weakness', 'sudden weakness', 'cannot speak', 'speech trouble',
  'sudden confusion', 'vision loss', 'severe dizziness'
];

function scoreLead(input) {
  const text = Object.values(input).join(' ').toLowerCase();
  if (emergencyTokens.some((token) => text.includes(token))) {
    return {
      priority: 'emergency_redirect',
      score: 0,
      reason: 'Possible acute neurologic symptom language. Route to emergency care, not VascuMind follow-up.',
      requiredResponse: 'Please call 911 or seek immediate emergency medical attention. VascuMind is not for acute medical emergencies.',
    };
  }

  let score = 0;
  const reasons = [];
  if (/cro|sponsor|trial|site|participant|recruit|study/.test(text)) { score += 3; reasons.push('trial/CRO language'); }
  if (/vascular|stroke|tia|pad|blood flow|cognitive|mci|memory/.test(text)) { score += 2; reasons.push('vascular-cognitive relevance'); }
  if (/\b[1-9][0-9]{2,}\b/.test(text) || /multi[- ]?site|sites|countries/.test(text)) { score += 2; reasons.push('volume/site signal'); }
  if (/q[1-4]|2026|2027|month|quarter|timeline|launch/.test(text)) { score += 1; reasons.push('timeline signal'); }
  if (input.trialDataConsent === 'on' || input.trialDataConsent === true) { score += 1; reasons.push('trial-data consent'); }

  const priority = score >= 6 ? 'high' : score >= 3 ? 'medium' : 'low';
  return { priority, score, reason: reasons.join(', ') || 'limited qualification detail', requiredResponse: null };
}

if (process.argv[1] && process.argv[1].endsWith('local-lead-scoring.mjs')) {
  const raw = process.argv[2] || '{}';
  const input = JSON.parse(raw);
  console.log(JSON.stringify(scoreLead(input), null, 2));
}

export { scoreLead };
