import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Links */}
        <div className="grid md:grid-cols-4 gap-y-10 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/hachinski" className="hover:text-gray-300">Diagnostics</Link></li>
              <li><Link href="/marketplace" className="hover:text-gray-300">Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/research/vascular-dementia-clinical-trials" className="hover:text-gray-300">Clinical Research</Link></li>
              <li><Link href="/research/clinical-evidence" className="hover:text-gray-300">Clinical Evidence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-gray-300">HIPAA Notice</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@vascumind.com" className="hover:text-gray-300">info@vascumind.com</a></li>
              <li><a href="tel:5408786754" className="hover:text-gray-300">540-878-6754</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-gray-800 pt-8 text-xs text-gray-400 space-y-4">
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
