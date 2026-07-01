export const ACURIST_MCI_DISCLAIMER =
  "The Acurist.AI MCI Screen provided by VascuMind is a cognitive screening, benchmarking, and tracking tool, not a diagnostic medical device. It does not diagnose vascular dementia or any other medical condition. Results should be discussed with a qualified healthcare provider.";

export const SUPPLEMENT_DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";

export function AcuristScreenDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`border-4 border-black rounded-2xl bg-white ${compact ? "p-4" : "p-6"}`} aria-label="Acurist.AI MCI Screen disclaimer">
      <p className="font-semibold text-xl mb-2">Acurist.AI MCI Screen Disclaimer</p>
      <p className="text-black">{ACURIST_MCI_DISCLAIMER}</p>
    </section>
  );
}

export function SupplementDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`border-4 border-black rounded-2xl bg-white ${compact ? "p-4" : "p-6"}`} aria-label="FDA dietary supplement disclaimer">
      <p className="font-semibold text-xl mb-2">Supplement Disclaimer</p>
      <p className="text-black">{SUPPLEMENT_DISCLAIMER}</p>
    </section>
  );
}
