export const MCI_SCREEN_DISCLAIMER =
  "The MCI Screen referenced by VascuMind is a cognitive screening, benchmarking, and tracking tool sourced from MCI Screen / EMBIC materials. It does not diagnose vascular dementia or any other medical condition and is not a substitute for clinical evaluation. Results should be discussed with a qualified healthcare provider.";

export const SUPPLEMENT_DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";

export function MCIScreenDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`border-4 border-black rounded-2xl bg-white ${compact ? "p-4" : "p-6"}`} aria-label="MCI Screen disclaimer">
      <p className="font-semibold text-xl mb-2">MCI Screen Disclaimer</p>
      <p className="text-black">{MCI_SCREEN_DISCLAIMER}</p>
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
