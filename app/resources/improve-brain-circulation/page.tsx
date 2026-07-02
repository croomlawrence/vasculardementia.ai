import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "5 Ways to Support Healthy Brain Circulation | VascuMind",
  description: "Discover five actionable, evidence-based lifestyle changes you can make to support blood flow to your brain for better cognitive health.",
};

export default function BrainCirculationPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="prose prose-xl mx-auto">
        <h1>5 Lifestyle Changes to Support Healthy Brain Circulation</h1>
        
        <p>Supporting your cognitive health isn't just about brain games and puzzles. One of the most powerful things you can do is focus on your circulatory health. A healthy blood flow ensures your brain gets the oxygen and nutrients it needs to thrive.</p>
        
        <p>The best part? The steps to support brain circulation are things you can start doing today. Here are five evidence-based lifestyle changes to get you started.</p>

        <h2>1. Embrace a Brain-Healthy Diet</h2>
        <p>What's good for the heart is truly good for the brain. Focus on a diet rich in fruits, vegetables, whole grains, and healthy fats, like the Mediterranean or DASH diets. Key foods include:</p>
        <ul>
          <li><strong>Leafy Greens:</strong> Spinach and kale are packed with nitrates, which can help improve blood flow.</li>
          <li><strong>Fatty Fish:</strong> Salmon and mackerel are rich in Omega-3 fatty acids, which are crucial for blood vessel health.</li>
          <li><strong>Berries:</strong> Blueberries and strawberries contain flavonoids, antioxidants that can support healthy circulation.</li>
        </ul>

        <h2>2. Get Moving (Even a Little Helps)</h2>
        <p>Regular physical activity is like a workout for your entire circulatory system. Aerobic exercise, like brisk walking, swimming, or cycling, strengthens your heart, improves blood pressure, and helps keep your blood vessels flexible.</p>
        <p>You don't have to run a marathon. Aim for at least 30 minutes of moderate activity most days of the week. Even short, 10-minute walks can make a difference.</p>

        <h2>3. Manage Your Blood Pressure</h2>
        <p>High blood pressure is a silent threat to your blood vessels, including those in the brain. It causes damage over time, making them stiff and narrow. Keeping your blood pressure in a healthy range is one of the most critical steps you can take.</p>
        <p>Work with your doctor to monitor your numbers, reduce your salt intake, and follow their recommendations for medication if needed.</p>

        <h2>4. Don't Skimp on Sleep</h2>
        <p>Sleep is when your brain and body perform vital maintenance. During deep sleep, your brain clears out toxins and waste products that can build up during the day. Chronic poor sleep is linked to poor vascular health and an increased risk of cognitive issues.</p>
        <p>Aim for 7-9 hours of quality sleep per night. Create a regular sleep schedule and a relaxing bedtime routine to help your body wind down.</p>

        <h2>5. Challenge Your Mind</h2>
        <p>Staying mentally active encourages your brain to build and maintain strong connections. This is often called "cognitive reserve." Learning a new skill, reading a challenging book, or even playing a strategic board game can help keep your mind sharp.</p>
        <p>Think of it as building a more resilient "city." The more roads and pathways you have, the less impact a single traffic jam will have. The same is true for your brain.</p>

        <h2>A Journey of a Thousand Miles...</h2>
        <p>Making lifestyle changes can feel daunting, but every small step counts. By focusing on your vascular health, you are taking a powerful, proactive role in your own cognitive wellness journey.</p>
        <p><strong>Learn more about the <Link href="/resources/heart-brain-connection">deep link between your circulation and your mind</Link>.</strong></p>
      </div>
    </main>
  );
}
