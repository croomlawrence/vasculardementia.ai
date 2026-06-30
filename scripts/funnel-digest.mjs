#!/usr/bin/env node
const digest = {
  generatedAt: new Date().toISOString(),
  purpose: 'Daily VascuMind funnel digest placeholder until analytics APIs are wired.',
  eventsToTrack: [
    'cta_memory_screen_click',
    'checkout_started',
    'memory_screen_lead_submit',
    'cro_inquiry_submit',
    'affiliate_product_click',
    'hachinski_started',
    'hachinski_completed'
  ],
  revenueStreams: ['Cognitive test sales', 'CRO licensing fees', 'Affiliate supplement sales'],
  action: 'Connect Vercel Analytics/PostHog export plus HubSpot and Stripe webhooks, then replace this placeholder with real event counts.'
};
console.log(JSON.stringify(digest, null, 2));
