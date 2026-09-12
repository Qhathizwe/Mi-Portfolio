export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}
