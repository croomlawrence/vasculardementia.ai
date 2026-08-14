'use client';

import React from 'react';

export default function NavDropdown({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="nav-dropdown"
      onMouseEnter={(e) => {
        const d = e.currentTarget.querySelector('details');
        if (d) (d as HTMLDetailsElement).open = true;
      }}
      onMouseLeave={(e) => {
        const d = e.currentTarget.querySelector('details');
        if (d) (d as HTMLDetailsElement).open = false;
      }}
    >
      <details className="nav-dropdown-inner">
        <summary>{summary}</summary>
        <div className="nav-dropdown-menu">{children}</div>
      </details>
    </div>
  );
}
