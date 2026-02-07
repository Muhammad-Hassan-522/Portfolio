export interface Project {
  title: string;
  slug: string;
  description: string; // Short summary
  fullDescription: string; // Detailed explanation
  features: string[]; // Key functionalities
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}
