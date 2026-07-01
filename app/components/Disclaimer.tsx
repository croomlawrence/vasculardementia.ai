import { ACURIST_MCI_DISCLAIMER, SUPPLEMENT_DISCLAIMER } from './ComplianceNotices';

export default function Disclaimer() {
  return (
    <div className="bg-white border-t border-black py-8 text-sm">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        <div className="border-l-4 border-black pl-6 bg-white p-4 rounded-r-xl">
          <p className="font-semibold mb-2 text-base">Acurist.AI MCI Screen Disclaimer</p>
          <p className="text-black">{ACURIST_MCI_DISCLAIMER}</p>
        </div>

        <div className="text-black">
          <strong>{SUPPLEMENT_DISCLAIMER}</strong>
        </div>

        <div className="text-xs text-black pt-4 border-t border-black">
          VascuMind® content is for educational purposes only and does not constitute medical advice or clinical guidance. Sudden neurologic symptoms require immediate emergency care (call 911). Supplement pages use structure/function wellness language, affiliate disclosure, and the required FDA dietary-supplement notice. Full compliance page: /compliance.
        </div>
      </div>
    </div>
  );
}
