// Interfaces: Skill, Project, FormData
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
