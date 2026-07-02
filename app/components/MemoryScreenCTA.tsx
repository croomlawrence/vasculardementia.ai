import React from 'react';
import TrackedLink from '@/components/TrackedLink';

interface MemoryScreenCTAProps {
  className?: string;
}

export default function MemoryScreenCTA({ className = '' }: MemoryScreenCTAProps) {
  return (
    <TrackedLink
      href="/memory-screen"
      eventName="cta_memory_screen_click"
      eventData={{ ctaLabel: 'Start Memory Screen', sourceComponent: 'MemoryScreenCTA' }}
      className={`inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black border border-black transition focus:outline focus:outline-4 focus:outline-black ${className}`}
    >
      Start Memory Screen
    </TrackedLink>
  );
}
