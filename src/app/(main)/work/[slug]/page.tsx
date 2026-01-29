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

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
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
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest opacity-70 mb-4">
            {project.partnerType}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            {project.heading}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="container mx-auto px-4 pb-20 space-y-12 md:space-y-24">
        
        {/* Optional Challenge Text */}
        {project.challenge && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="opacity-80 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Image Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 ? (
          project.galleryImages.map((imgSrc, index) => (
            <div key={index} className="w-full relative">
              <Image
                src={imgSrc}
                alt={`${project.title} gallery image ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-lg shadow-sm"
              />
            </div>
          ))
        ) : (
          <div className="text-center py-20 opacity-50">
            <p>No gallery images found. Please check public/images/projects folder.</p>
          </div>
        )}

        {/* --- Navigation --- */}
        <div className="text-center py-20">
          <Button 
            className="bg-brand-primary text-white hover:bg-brand-primary/90 px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href={project.projectLink || '#'} target="_blank" rel="noopener noreferrer">
              Watch the full project
            </a>
          </Button>
        </div>

        <div className="border-t border-gray-500/30 pt-10 mt-10">
            <Link href="/work" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
                ← Back to All Work
            </Link>
        </div>

      </section>
    </article>
  );
}