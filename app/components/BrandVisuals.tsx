import Image from "next/image";
import Link from "next/link";

const trustBadges = [
  ["Free first step", "Start with the pattern"],
  ["Educational only", "Not a diagnosis"],
  ["Clinician-ready", "Better questions"],
  ["Baseline next", "$99 MCI Screen"],
];

const pathway = ["Concern", "Pattern", "Baseline", "Questions", "Options"];

const imageMap = {
  kitchen: {
    src: "/images/brand/vascumind-hero-noomlike-clean.png",
    alt: "Adult daughter and older father calmly reviewing a laptop together at a bright kitchen table.",
    label: "The moment you notice",
    caption: "From worry at the kitchen table to a safer first step.",
  },
  clinic: {
    src: "/images/brand/vascumind-clinician-conversation.png",
    alt: "Clinician, older adult, and caregiver reviewing a tablet together in a bright outpatient office.",
    label: "Clinician conversation",
    caption: "Bring clearer questions to the visit.",
  },
  tablet: {
    src: "/images/brand/vascumind-closeup-checklist.png",
    alt: "Hands near a tablet and notebook on a warm kitchen table while preparing cognitive-health questions.",
    label: "Cognitive baseline",
    caption: "Create a benchmark for discussion and repeat tracking.",
  },
};

const journeyCards = [
  {
    eyebrow: "Free first step",
    title: "Vascular Pattern Check",
    copy: "Answer plain-language questions about sudden changes, stepwise decline, stroke/TIA history, and vascular risk factors.",
    href: "/hachinski",
    cta: "Start free check",
    visual: "check",
  },
  {
    eyebrow: "$99 baseline",
    title: "Cognitive Baseline",
    copy: "Create a structured MCI Screen benchmark for discussion and repeat tracking. It is a screen, not a diagnosis.",
    href: "/memory-screen",
    cta: "Create baseline",
    visual: "baseline",
  },
  {
    eyebrow: "Visit prep",
    title: "Clinician Questions",
    copy: "Turn family observations into better questions about vascular risk factors, medications, sleep, mood, imaging, and follow-up.",
    href: "/protocol",
    cta: "See the protocol",
    visual: "questions",
  },
];

export function VascularPathwayArt({ tone = "consumer" }: { tone?: "consumer" | "clinical" | "dark" }) {
  const src = tone === "clinical" ? "/images/brand/vascumind-cro-dashboard.png" : "/images/brand/vascumind-abstract-pathway.png";
  const alt = tone === "clinical"
    ? "Abstract VascuMind clinical research dashboard concept for sponsor screening workflows."
    : "Abstract deep emerald pathway artwork representing guided vascular cognitive health navigation.";
  return (
    <div className={`pathway-art ${tone === "dark" ? "pathway-art-dark" : ""}`}>
      <Image src={src} alt={alt} width={1024} height={576} className="brand-image" priority={tone !== "clinical"} />
    </div>
  );
}

export function HumanMomentCard({ variant = "kitchen", priority = false }: { variant?: "kitchen" | "clinic" | "tablet"; priority?: boolean }) {
  const image = imageMap[variant];
  return (
    <figure className="human-card" aria-label={`${image.label}: ${image.caption}`}>
      <div className="human-card-photo">
        <Image src={image.src} alt={image.alt} width={1024} height={576} className="brand-image" priority={priority} loading={priority ? undefined : "eager"} />
      </div>
      <figcaption className="human-card-copy">
        <span className="section-label">{image.label}</span>
        <strong>{image.caption}</strong>
      </figcaption>
    </figure>
  );
}

export function HeroVisualStack() {
  return (
    <div className="hero-visual-stack" aria-label="Warm VascuMind family-first visual with product previews">
      <HumanMomentCard priority />
      <div className="hero-floating-card hero-floating-card-left">
        <span>Free check</span>
        <strong>Organize the pattern</strong>
        <small>Sudden · stepwise · stroke/TIA · vascular risk</small>
      </div>
      <div className="hero-floating-card hero-floating-card-right">
        <span>Next step</span>
        <strong>$99 cognitive baseline</strong>
        <small>For clinician discussion and repeat tracking</small>
      </div>
    </div>
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

export function ProductJourneyCards() {
  return (
    <div className="product-journey-grid">
      {journeyCards.map((card) => (
        <Link key={card.title} href={card.href} className="product-journey-card">
          <div className={`product-mini-visual product-mini-${card.visual}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="section-label mb-3">{card.eyebrow}</div>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
          <strong className="product-card-cta">{card.cta} →</strong>
        </Link>
      ))}
    </div>
  );
}

export function StoryPanels() {
  return (
    <div className="story-panel-grid">
      <HumanMomentCard variant="kitchen" />
      <div className="story-copy-card">
        <div className="section-label mb-4">The moment families need VascuMind</div>
        <h2>Something changed. Now you need a calmer way to start.</h2>
        <p>
          Maybe the change followed a stroke, TIA, blood-pressure issue, diabetes, PAD, or heart disease. VascuMind helps families organize what they notice before the next clinical conversation.
        </p>
        <ul>
          <li>Start with a free educational pattern check.</li>
          <li>Create a cognitive baseline only if it makes sense.</li>
          <li>Bring clearer, safer questions to a qualified clinician.</li>
        </ul>
      </div>
      <HumanMomentCard variant="tablet" />
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
