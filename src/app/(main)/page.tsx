// src/app/(main)/page.tsx
import HeroSection from "@/components/sections/home/HeroSection";
import ImpactSection from "@/components/sections/home/ImpactSection";
import CtaSection from "@/components/sections/shared/CtaSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-brand-magenta text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug">
            We're a brand strategy & design agency for ambitious founders. We help you grow faster, launch smarter, and build brands people trust.
          </h2>
          <Link href="/work" className="mt-6 inline-block font-bold underline hover:no-underline transition-all">
            Check Our Work
          </Link>
        </div>
      </section>

      <ImpactSection />

      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Some of our work.</h2>
            {/* Here you would render a grid of featured projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-80 bg-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-80 bg-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-80 bg-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-80 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="text-center mt-12">
              <Link href="/work" className="bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-all">
                View All Work
              </Link>
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}