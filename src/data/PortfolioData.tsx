import {type Project, type Experience } from '../types/Portfolio';

export const projectsData: Project[] = [
  {
    title: 'Shopping List API',
    description: 'A structural backend system built using TypeScript to handle data transactions for customer inventories.',
    tags: ['TypeScript', 'Node.js', 'Express', 'SQL'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'Mi-Shopping-List-App',
    description: 'A responsive frontend client application interacting seamlessly with dynamic data services.',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'Sky View Weather App',
    description: 'An interactive weather platform performing live geographic API data lookups.',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'Tailwind'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'My Link Vault',
    description: 'A secure, intuitive dashboard layout for saving, sorting, and indexing web references.',
    tags: ['TypeScript', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com'
  }
];

export const experienceData: Experience[] = [
  {
    role: 'Full-Stack Developer Apprentice',
    company: 'mLab',
    duration: 'June 2026 - March 2027',
    highlights: [
      'Mastered fluid user interface components and frontend state structures.',
      'Currently developing strict typing schemas and backend API routes.',
      'Maintaining version control repositories via GitHub.'
    ]
  },
  {
    role: 'Admin Clerk',
    company: 'HighOver Wildlife Sanctuary',
    duration: 'Jun 2022 - Nov 2023',
    highlights: [
      'Controlled internal information distribution pipelines.',
      'Maintained absolute precision across client entries and team registers.'
    ]
  },
  {
    role: 'IT Technician Volunteer',
    company: 'Richmond Oasis Center',
    duration: 'Apr 2019 - Jan 2022',
    highlights: [
      'Diagnosed, maintained, and optimized complex workstation network setups.',
      'Tested experimental applications and software updates before company deployment.'
    ]
  }
];
