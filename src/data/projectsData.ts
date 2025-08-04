// projectsData export
import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "A responsive restaurant website built with HTML, Bootstrap, and Tailwind CSS. Features online food ordering system with mobile-first design optimized for all screen sizes.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    technologies: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript"],
    url: "https://restaurant-website.vercel.app",
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "A responsive weather app that provides real-time weather updates by city, with clean UI and smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80"

,
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    url: "https://weather-application-six-ashy.vercel.app",
  },
  {
    id: 3,
    title: "Responsive Blog Website",
    description:
      "A responsive blog website featuring dynamic posts, clean UI, and seamless navigation across all devices.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    url: "https://react-blog-ivory-one.vercel.app",
  },
];
export default projectsData;
