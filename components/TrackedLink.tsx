"use client";

import React from "react";
import { track } from "@vercel/analytics";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
};

export default function TrackedLink({ eventName, eventData = {}, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventData);
        fetch("/api/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventName, eventData, path: window.location.pathname }),
          keepalive: true,
        }).catch(() => undefined);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
