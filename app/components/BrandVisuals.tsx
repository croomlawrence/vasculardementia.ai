import Link from "next/link";

const trustBadges = [
  ["Free first step", "Start with the pattern"],
  ["Educational only", "Not a diagnosis"],
  ["Clinician-ready", "Better questions"],
  ["Baseline next", "$99 MCI Screen"],
];

const pathway = ["Concern", "Pattern", "Baseline", "Questions", "Options"];

export function VascularPathwayArt({ tone = "consumer" }: { tone?: "consumer" | "clinical" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`pathway-art ${dark ? "pathway-art-dark" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 640 420" role="img" aria-label="Abstract vascular cognitive pathway artwork">
        <defs>
          <linearGradient id={`pathGradient-${tone}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={dark ? "#DDF2EF" : "#0B4D3C"} stopOpacity="0.92" />
            <stop offset="100%" stopColor={dark ? "#10B981" : "#10B981"} stopOpacity="0.62" />
          </linearGradient>
          <radialGradient id={`halo-${tone}`} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor={dark ? "#10B981" : "#EAF5F0"} stopOpacity="0.95" />
            <stop offset="100%" stopColor={dark ? "#000000" : "#FFFFFF"} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="640" height="420" rx="38" fill={dark ? "#071B16" : "#F8F4EA"} />
        <circle cx="326" cy="192" r="192" fill={`url(#halo-${tone})`} />
        <path d="M72 278 C156 184 226 334 319 218 C397 119 468 192 572 94" fill="none" stroke={`url(#pathGradient-${tone})`} strokeWidth="12" strokeLinecap="round" />
        <path d="M112 150 C198 92 226 184 292 158 C369 128 416 60 522 46" fill="none" stroke={`url(#pathGradient-${tone})`} strokeWidth="5" strokeLinecap="round" opacity="0.55" />
        <path d="M135 343 C236 296 253 381 354 305 C431 247 479 306 575 245" fill="none" stroke={`url(#pathGradient-${tone})`} strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        {[72, 190, 319, 454, 572].map((cx, index) => (
          <g key={cx}>
            <circle cx={cx} cy={[278, 235, 218, 157, 94][index]} r="22" fill={dark ? "#000000" : "#FFFFFF"} stroke={dark ? "#DDF2EF" : "#000000"} strokeWidth="3" />
            <circle cx={cx} cy={[278, 235, 218, 157, 94][index]} r="8" fill={dark ? "#10B981" : "#0B4D3C"} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function HumanMomentCard({ variant = "kitchen" }: { variant?: "kitchen" | "clinic" | "tablet" }) {
  const label = variant === "clinic" ? "Clinician conversation" : variant === "tablet" ? "Cognitive baseline" : "The moment you notice";
  const caption = variant === "clinic" ? "Bring clearer questions to the visit." : variant === "tablet" ? "Create a benchmark for discussion and repeat tracking." : "From worry at the kitchen table to a safer first step.";
  return (
    <figure className="human-card" aria-label={`${label}: ${caption}`}>
      <div className="human-card-scene">
        <div className="sun-orb" />
        <div className="window-panel window-left" />
        <div className="window-panel window-right" />
        <div className="person person-caregiver"><span /></div>
        <div className="person person-parent"><span /></div>
        <div className="table-surface" />
        <div className="tablet-device">
          <div className="tablet-line" />
          <div className="tablet-line short" />
          <div className="tablet-pill" />
        </div>
        <div className="path-overlay" />
      </div>
      <figcaption className="human-card-copy">
        <span className="section-label">{label}</span>
        <strong>{caption}</strong>
      </figcaption>
    </figure>
  );
}

export function TrustBadgeRow() {
  return (
    <div className="brand-trust-row" aria-label="VascuMind trust cues">
      {trustBadges.map(([title, copy]) => (
        <div key={title} className="brand-trust-badge">
          <span className="badge-icon" aria-hidden="true">✓</span>
          <div><strong>{title}</strong><small>{copy}</small></div>
        </div>
      ))}
    </div>
  );
}

export function PathwayLine({ cta = true }: { cta?: boolean }) {
  return (
    <div className="pathway-line-card">
      <div className="pathway-line" aria-label="VascuMind guided pathway">
        {pathway.map((step, index) => (
          <div key={step} className="pathway-step">
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      {cta && (
        <Link href="/hachinski" className="btn-primary inline-flex justify-center text-center mt-8">
          Start with the Pattern
        </Link>
      )}
    </div>
  );
}

export function ResultPreviewCard({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`result-preview-card ${dark ? "result-preview-dark" : ""}`} aria-label="Example of non-diagnostic pattern summary preview">
      <div className="preview-topline">
        <span>Pattern summary</span>
        <strong>Educational only</strong>
      </div>
      <div className="preview-score-row">
        <div>
          <small>Free check</small>
          <strong>Organized clues</strong>
        </div>
        <div>
          <small>Next step</small>
          <strong>Cognitive baseline</strong>
        </div>
      </div>
      <ul>
        <li>Stroke/TIA history questions</li>
        <li>Vascular risk-factor prompts</li>
        <li>Clinician conversation checklist</li>
      </ul>
    </div>
  );
}
