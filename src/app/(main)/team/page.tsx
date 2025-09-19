// src/app/(main)/team/page.tsx
import TeamCard from "@/components/ui/TeamCard";
import { teamData } from "@/content/team";
import CtaSection from "@/components/sections/shared/CtaSection";

export default function TeamPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re a crew of curious minds who dare to break patterns and make bold moves—always with strategy at the core. Different stories, one mission: building brands that actually matter. We challenge each other, and we can do the same for you. We believe that when you love what you do, every project is more than work, it&apos;s a chance to create something unforgettable. <strong>TOGETHER.</strong>
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamData.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
