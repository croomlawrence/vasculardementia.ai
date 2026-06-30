import React from 'react';

interface MemoryScreenCTAProps {
  className?: string;
}

export default function MemoryScreenCTA({ className = '' }: MemoryScreenCTAProps) {
  return (
    <a
      href="/memory-screen"
      className={`inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black border border-black transition focus:outline focus:outline-4 focus:outline-black ${className}`}
    >
      Start Memory Screen
    </a>
  );
}
