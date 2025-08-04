// ProjectCard Component
import React from "react";
import { ExternalLink } from "lucide-react";
// Make sure the types file exists and exports 'Project'
import type { Project } from "../../types";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <div
    className={`bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-gray-700 translate-y-0 opacity-100 project-card`}
    data-index={index}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs border border-blue-600/30"
          >
            {tech}
          </span>
        ))}
      </div>

     <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
>
  <span className="mr-2">View Project</span>
  <ExternalLink className="w-4 h-4" />
</a>

    </div>
  </div>
);

export default ProjectCard;
