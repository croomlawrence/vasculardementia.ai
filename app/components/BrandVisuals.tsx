import Image from "next/image";
import Link from "next/link";

const trustBadges = [
  ["Free first step", "Vascular memory check"],
  ["Educational only", "Not a diagnosis"],
  ["Clinician-ready", "Better questions"],
  ["Baseline next", "$99 Memory Baseline"],
];

const pathway = ["Concern", "Ischemic clues", "Memory baseline", "Questions", "Options"];

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
    alt: "Hands near a tablet and notebook on a warm kitchen table while preparing memory-health questions.",
    label: "Memory baseline",
    caption: "Create a benchmark for discussion and repeat tracking.",
  },
};

const journeyCards = [
  {
    eyebrow: "Free first step",
    title: "Vascular Memory Check",
    copy: "Answer plain-language questions about sudden changes, stepwise decline, stroke/TIA history, and vascular risk factors that may point toward vascular or blood-flow-related concerns.",
    href: "/hachinski",
    cta: "Start free check",
    visual: "check",
  },
  {
    eyebrow: "$99 baseline",
    title: "Memory Baseline",
    copy: "Create a structured MCI Screen benchmark for clinician discussion and repeat tracking. It is a screen, not a diagnosis.",
    href: "/memory-screen",
    cta: "Create memory baseline",
    visual: "baseline",
  },
  {
    eyebrow: "Visit prep",
    title: "Clinician Questions",
    copy: "Turn family observations into better questions about blood flow, stroke/TIA history, vascular risk factors, medications, sleep, mood, imaging, and follow-up.",
    href: "/protocol",
    cta: "See the protocol",
    visual: "questions",
  },
];

export function VascularPathwayArt({ tone = "consumer" }: { tone?: "consumer" | "clinical" | "dark" }) {
  const src = tone === "clinical" ? "/images/brand/vascumind-cro-dashboard.png" : "/images/brand/vascumind-abstract-pathway.png";
  const alt = tone === "clinical"
    ? "Abstract VascuMind clinical research dashboard concept for sponsor screening workflows."
    : "Abstract deep emerald pathway artwork representing guided vascular memory-health navigation.";
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
    <div className="hero-product-stack" aria-label="VascuMind first-step product options">
      <Link href="/hachinski" className="hero-product-card hero-product-card-primary">
        <div>
          <div className="hero-product-logo">VascuMind <span>Free</span></div>
          <h2>Vascular Memory Check</h2>
          <p>Start with memory changes that may relate to blood flow, stroke/TIA history, or vascular risk factors.</p>
          <strong>Check my vascular memory pattern</strong>
        </div>
        <div className="hero-product-visual product-mini-visual product-mini-check" aria-hidden="true"><span /><span /><span /></div>
      </Link>
      <Link href="/memory-screen" className="hero-product-card">
        <div>
          <div className="hero-product-logo">VascuMind <span>Baseline</span></div>
          <h2>$99 Memory Baseline</h2>
          <p>Create a structured memory benchmark to discuss with a clinician and compare over time.</p>
          <strong>Create my baseline</strong>
        </div>
        <div className="hero-product-visual product-mini-visual product-mini-baseline" aria-hidden="true"><span /><span /><span /></div>
      </Link>
    </div>
  );
}

export function HeroPortrait() {
  return (
    <div className="hero-portrait" aria-hidden="true">
      <Image
        src="/images/brand/vascumind-clinician-conversation.png"
        alt="Older adult with family caregiver and clinician reviewing cognitive health together in a bright clinical setting"
        width={1280}
        height={720}
        className="hero-portrait-image"
        priority
      />
      <div className="hero-portrait-scrim" />
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
        <div className="section-label mb-4">Memory as a signal</div>
        <h2>Memory can be a clue to what blood flow may be doing inside the body.</h2>
        <p>
          Memory is not a blood test and VascuMind does not diagnose disease. But changes in attention, processing speed, confusion, or memory can be a functional signal worth organizing when stroke, TIA, blood pressure, diabetes, PAD, heart disease, or other vascular risks are part of the story.
        </p>
        <ul>
          <li>Start with a free educational vascular memory check.</li>
          <li>Create a memory baseline only if it makes sense.</li>
          <li>Bring clearer, safer questions about blood flow and vascular risk to a qualified clinician.</li>
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
          Start with the Check
        </Link>
      )}
    </div>
  );
}

export function ResultPreviewCard({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`result-preview-card ${dark ? "result-preview-dark" : ""}`} aria-label="Example of non-diagnostic vascular-pattern summary preview">
      <div className="preview-topline">
        <span>Memory signal summary</span>
        <strong>Educational only</strong>
      </div>
      <div className="preview-score-row">
        <div>
          <small>Free check</small>
          <strong>Vascular clues</strong>
        </div>
        <div>
          <small>Next step</small>
          <strong>Memory baseline</strong>
        </div>
      </div>
      <ul>
        <li>Stroke/TIA history questions</li>
        <li>Blood-flow and vascular risk prompts</li>
        <li>Clinician conversation checklist</li>
      </ul>
    </div>
  );
}
