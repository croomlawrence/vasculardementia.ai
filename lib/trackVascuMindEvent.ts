"use client";

import { track } from "@vercel/analytics";

export type VascuMindEventData = Record<string, string | number | boolean | undefined | null>;

type TrackOptions = {
  path?: string;
  eventData?: VascuMindEventData;
};

function currentPath() {
  if (typeof window === "undefined") return "server";
  return window.location.pathname;
}

function cleanEventData(eventData: VascuMindEventData = {}) {
  return Object.fromEntries(
    Object.entries(eventData).filter(([, value]) => value !== undefined && value !== null),
  ) as Record<string, string | number | boolean>;
}

export function trackVascuMindEvent(eventName: string, options: TrackOptions = {}) {
  const eventData = cleanEventData(options.eventData);
  const path = options.path || currentPath();

  track(eventName, eventData);

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
