export default function Disclaimer() {
  return (
    <div className="bg-white border-t border-black py-8 text-sm">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {/* Mandatory Acurist.AI Disclaimer - placed prominently */}
        <div className="border-l-4 border-black pl-6 bg-amber-50 p-4 rounded-r-xl">
          <p className="font-semibold mb-2 text-base">Acurist.AI MCI Screen Disclaimer (Required on all screening & product pages)</p>
          <p className="text-black">
            The Acurist.AI MCI Screen provided by VascuMind is a cognitive screening, benchmarking, and tracking tool, <strong>not a diagnostic medical device</strong>. It does not diagnose vascular dementia or any other medical condition. Results should be discussed with a qualified healthcare provider.
          </p>
        </div>

        {/* FDA Supplement Disclaimer - footer of every page */}
        <div className="text-black">
          <strong>These statements have not been evaluated by the Food and Drug Administration.</strong> This product is not intended to diagnose, treat, cure, or prevent any disease.
        </div>

        <div className="text-xs text-black/70 pt-4 border-t border-black">
          VascuMind® content is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Sudden neurologic symptoms require immediate emergency care (call 911). All supplement and screening claims are reviewed against FTC/DSHEA rules. Banned language includes: treat, cure, prevent, reverse, stop (in disease context), Alzheimer’s (unless “not Alzheimer’s”), and direct “for vascular dementia” claims on supplements. Use “vascular cognitive concerns,” “supports healthy blood flow,” or “wellness support” instead. Full compliance page: /compliance.
        </div>
      </div>
    </div>
  );
}
