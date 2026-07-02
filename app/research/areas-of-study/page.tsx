import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Areas of Research in Vascular Cognitive Health | VascuMind",
  description: "Learn about the different types of clinical trials and research being done to better understand and manage vascular cognitive health.",
};

const researchAreas = [
  {
    title: "Improving Blood Flow & Circulation",
    description: "This is one of the most active areas of research. Scientists are studying various drugs, supplements, and lifestyle interventions that may help improve blood flow to the brain, protecting it from damage and supporting its natural functions.",
    href: "https://clinicaltrials.gov/search?cond=Vascular%20Dementia&term=blood%20flow&recrs=a",
  },
  {
    title: "Non-Drug & Rehabilitation Therapies",
    description: "This category of research explores how different types of therapy can help. This includes cognitive rehabilitation to improve memory and thinking skills, physical therapy to improve balance and strength, and even music or art therapy.",
    href: "https://clinicaltrials.gov/search?cond=Vascular%20Dementia&term=rehabilitation&recrs=a",
  },
    {
    title: "Digital Health, Apps & Wearables",
    description: "Researchers are increasingly using technology to monitor patients and deliver support. This includes specialized mobile apps to guide exercises, wearable sensors to track movement and sleep, and telehealth platforms to connect patients with specialists remotely.",
    href: "https://clinicaltrials.gov/search?cond=Vascular%20Dementia&term=app%20OR%20digital&recrs=a",
  },
  {
    title: "New Diagnostic & Imaging Tools",
    description: "A major goal of research is to find better ways to detect vascular cognitive changes as early as possible. This involves developing new brain imaging techniques, identifying blood-based biomarkers, and creating more sensitive cognitive tests.",
    href: "https://clinicaltrials.gov/search?cond=Vascular%20Dementia&term=diagnostic%20OR%20imaging&recrs=a",
  },
  {
    title: "Drug & Supplement Studies",
    description: "This is the most well-known type of clinical trial, where researchers test the safety and effectiveness of new medications or nutritional supplements to see if they can slow progression or improve symptoms.",
    href: "https://clinicaltrials.gov/search?cond=Vascular%20Dementia&f_intrv=Drug%20OR%20Dietary%20Supplement&recrs=a",
  }
];

export default function AreasOfStudyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">Major Areas of Vascular Cognitive Research</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">Learn about the different approaches scientists are taking to better understand, diagnose, and manage vascular cognitive health.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {researchAreas.map((area) => (
          <div key={area.title} className="border-2 border-gray-200 rounded-3xl p-8 flex flex-col">
            <h2 className="text-3xl font-semibold mb-4">{area.title}</h2>
            <p className="text-lg text-gray-700 mb-6 flex-grow">{area.description}</p>
            <Link 
              href={area.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-block mt-auto text-center font-semibold py-3 px-6 rounded-full"
            >
              See Related Studies on ClinicalTrials.gov
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center border-t pt-10">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to Take the Next Step?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our anonymous pre-screener can help you determine if you might be a preliminary fit for studies like these.
        </p>
        <Link 
            href="/clinical-trials/pre-screener"
            className="btn-green inline-block px-12 py-4 rounded-full text-xl font-semibold"
        >
            Start Your Pre-Screener
        </Link>
      </div>
    </main>
  );
}
