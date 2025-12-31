import { projectData } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 font-display">
          we partner with ambitious Founders <br /> to create a lasting impact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => {
            const isExternal = !!project.videoUrl;
            const href = project.videoUrl || `/case-studies/${project.id}`;

            return (
              <Link 
                href={href} 
                key={project.id} 
                className="group block h-full"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
                <div className="relative w-full aspect-[4/3]"> 
                  {/* Using aspect ratio to keep images uniform */}
                  <Image
                    // Fallback to placeholder if thumbnail is missing
                    src={project.thumbnailUrl || "/images/placeholder_images/Mask group.png"} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm font-medium opacity-90 mb-1">{project.partnerType}</p>
                  <h2 className="text-3xl font-bold font-display">{project.title}</h2>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
