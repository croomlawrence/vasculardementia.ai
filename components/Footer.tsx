import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-y-10 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-base">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/hachinski" className="hover:underline">Diagnostics</Link></li>
              <li><Link href="/marketplace" className="hover:underline">Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Research</h4>
            <ul className="space-y-2 text-base">
              <li><Link href="/research/vascular-dementia-clinical-trials" className="hover:underline">Clinical Research</Link></li>
              <li><Link href="/research/clinical-evidence" className="hover:underline">Clinical Evidence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-base">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
              <li><Link href="#" className="hover:underline">HIPAA Notice</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-base">
              <li><a href="mailto:info@vascumind.com" className="hover:underline">info@vascumind.com</a></li>
              <li><a href="tel:5408786754" className="hover:underline">540-878-6754</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-8 text-base text-white space-y-4">
          <p>
            <strong>Disclaimer:</strong> The information on this website is for educational and informational purposes only and is not intended as medical advice.
            These statements have not been evaluated by the Food and Drug Administration.
            The products mentioned are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            Always consult with a qualified healthcare professional before starting any new supplement, medication, or treatment plan,
            especially if you have a medical condition or are taking prescription medications.
          </p>
          <p>
            Vascumind® and its affiliates do not provide medical diagnoses or treatment recommendations.
            Clinical trial information is provided for educational purposes only.
          </p>
          <p className="pt-4 text-center">
            © {new Date().getFullYear()} Vascumind®. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
