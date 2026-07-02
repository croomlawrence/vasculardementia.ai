import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mission | VascuMind',
  description: 'Learn why we started VascuMind: to bring clarity and hope to the cognitive health journey.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-semibold tracking-tight mb-6">A Clearer Path Forward for Cognitive Health.</h1>
      <div className="prose prose-xl">
        <p>
          We started VascuMind for a simple reason: we saw our own family members and friends navigate the confusing and often frightening landscape of cognitive health with few places to turn for trusted guidance. The journey from the first "is this normal?" moment to a clear answer was too often long, lonely, and filled with anxiety.
        </p>
        <p>
          We knew there had to be a better way.
        </p>
        <p>
          Our mission is to empower individuals and families with trusted, science-backed tools to understand their own cognitive health. We help bridge the gap between that first flicker of concern and a more productive conversation with their doctor.
        </p>
        <p>
          And for those who choose to participate, we provide a pathway to contribute to the next generation of medical breakthroughs by connecting them with important clinical research. We believe that by empowering patients today, we can help accelerate science for everyone tomorrow.
        </p>
      </div>
    </main>
  );
}
