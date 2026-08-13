"use client";

import { track } from "@vercel/analytics";

export type VascuMindEventData = Record<string, string | number | boolean | undefined | null>;

type TrackOptions = {
  path?: string;
  eventData?: VascuMindEventData;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"] as const;

function currentPath() {
  if (typeof window === "undefined") return "server";
  return window.location.pathname;
}

function persistAttribution(params: URLSearchParams) {
  if (typeof window === "undefined") return {};
  const stored: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) window.localStorage.setItem(`vascumind_${key}`, value);
    const saved = value || window.localStorage.getItem(`vascumind_${key}`) || undefined;
    if (saved) stored[key] = saved;
  }
  if (document.referrer && !window.localStorage.getItem("vascumind_first_referrer")) {
    window.localStorage.setItem("vascumind_first_referrer", document.referrer);
  }
  return stored;
}

function browserContext() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const attribution = persistAttribution(params);
  return {
    currentPath: window.location.pathname,
    currentSearch: window.location.search,
    referrer: document.referrer,
    firstReferrer: window.localStorage.getItem("vascumind_first_referrer") || undefined,
    utmSource: attribution.utm_source,
    utmMedium: attribution.utm_medium,
    utmCampaign: attribution.utm_campaign,
    utmTerm: attribution.utm_term,
    utmContent: attribution.utm_content,
    gclid: attribution.gclid,
    fbclid: attribution.fbclid,
    msclkid: attribution.msclkid,
  };
}

function cleanEventData(eventData: VascuMindEventData = {}) {
  return Object.fromEntries(
    Object.entries(eventData).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  ) as Record<string, string | number | boolean>;
}

function fireAdPixels(eventName: string, eventData: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", eventName, eventData);
  if (["checkout_started", "lead_submitted", "memory_screen_lead_submit", "cro_packet_requested"].includes(eventName)) {
    w.fbq?.("track", eventName === "checkout_started" ? "InitiateCheckout" : "Lead", eventData);
    w.lintrk?.("track", { conversion_id: eventName });
  }
}

export function trackVascuMindEvent(eventName: string, options: TrackOptions = {}) {
  const eventData = cleanEventData({ ...browserContext(), ...options.eventData });
  const path = options.path || currentPath();

  track(eventName, eventData);
  fireAdPixels(eventName, eventData);

  if (typeof window === "undefined") return;

  fetch("/api/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventData,
      path,
      source: "vascumind.com",
      occurredAt: new Date().toISOString(),
    }),
    keepalive: true,
  }).catch(() => undefined);
}
