import { projectData } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// This generates static paths for all your projects (artech, amirane, etc.)
export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.id,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // 1. Find the specific project data using the URL slug
  const project = projectData.find((p) => p.id === params.slug);

  // 2. If no project is found, show 404
  if (!project) {
    return notFound();
  }

  // 3. Render the dynamic page
  return (
    <article 
      style={{ backgroundColor: project.backgroundColor, color: project.textColor }} 
      className="min-h-screen transition-colors duration-300"
    >
      {/* --- Header Section --- */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest opacity-70 mb-2 sm:mb-4 font-sans">
            {project.partnerType}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-8 font-display">
            {project.heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl font-sans">
            {project.description}
          </p>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="container mx-auto px-4 pb-12 sm:pb-20 space-y-6 sm:space-y-12 md:space-y-24">
        
        {/* Optional Challenge Text */}
        {project.challenge && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center my-10 sm:my-20">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-display">The Challenge</h2>
              <p className="opacity-80 leading-relaxed font-sans text-sm sm:text-base">
                {project.challenge}
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Image Gallery - Responsive Grid */}
        {project.galleryImages && project.galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-6 md:gap-12">
            {project.galleryImages.map((imgSrc, index) => (
              <div 
                key={index} 
                className="w-full relative rounded-lg sm:rounded-xl overflow-hidden bg-white/10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} gallery image ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20 opacity-50">
            <p>No gallery images found. Please check public/images/projects folder.</p>
          </div>
        )}

        {/* --- CTA Button --- */}
        <div className="text-center py-10 sm:py-20">
          <Button 
            className="bg-brand-primary text-white hover:bg-brand-primary/90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full"
            asChild
          >
            <Link href="/contact">
              Start a project
            </Link>
          </Button>
        </div>

        {/* --- Back Navigation --- */}
        <div className="border-t border-gray-500/30 pt-6 sm:pt-10 mt-6 sm:mt-10">
            <Link href="/work" className="text-xs sm:text-sm font-bold opacity-60 hover:opacity-100 transition-opacity font-sans">
                ← Back to All Work
            </Link>
        </div>

      </section>
    </article>
  );
}
