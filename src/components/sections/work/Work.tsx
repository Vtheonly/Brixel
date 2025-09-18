import { projectData } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

const placeholderImages = [
  "/images/placeholder_images/Mask group.png",
  "/images/placeholder_images/Mask group_2.png",
  "/images/placeholder_images/Mask group_3.png",
];

const Work = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          we partner with ambitious Founders <br /> to create a lasting impact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <Link href={`/work/${project.id}`} key={project.id} className="group block">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.imageUrl || placeholderImages[index % placeholderImages.length]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm opacity-80">{project.partnerType}</p>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
              </div>
            </Link>
          ))}
          {/* Add placeholder projects to fill the grid if needed */}
          {[...Array(6 - projectData.length)].map((_, index) => (
            <div key={`placeholder-${index}`} className="group block">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={placeholderImages[index % placeholderImages.length]}
                  alt="Placeholder project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm opacity-80">A project category</p>
                  <h2 className="text-2xl font-bold">Fars project</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
