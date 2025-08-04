import React from "react";
import projects from "../data/projectsData.ts"; 
// Update the import path if SectionHeader is in a different folder, e.g.:
import SectionHeader from "../components/SectionHeader";
import ProjectCard from '../components/projects/ProjectCard';

// Import the Project type from your types folder to ensure consistency
import type { Project } from "../types";

// Remove the local Project type definition above

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="My Projects"
          subtitle="Showcasing my passion for creating exceptional web experiences"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
