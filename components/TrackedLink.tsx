"use client";

import React from "react";
import { trackVascuMindEvent } from "@/lib/trackVascuMindEvent";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
};

export default function TrackedLink({ eventName, eventData = {}, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackVascuMindEvent(eventName, { eventData });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
