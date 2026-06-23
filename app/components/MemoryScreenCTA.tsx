import Link from 'next/link';

interface MemoryScreenCTAProps {
  className?: string;
}

export default function MemoryScreenCTA({ className = '' }: MemoryScreenCTAProps) {
  return (
    <Link 
      href="#get-started" 
      className={`inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition ${className}`}
    >
      Start Memory Screen
    </Link>
  );
}
