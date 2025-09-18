// src/components/sections/work/ProjectGrid.tsx
import { projectData } from "@/content/projects";
import Card from "@/components/ui/Card";

const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
