export interface Role {
  date: string;
  title: string;
  description: string;
}

export const workSummary = 'Four years at Northtech, from intern to lead.';

export const roles: Role[] = [
  {
    date: 'Now',
    title: 'Frontend lead, Northtech',
    description:
      'Leading frontend work on ClimbAlong: Angular architecture, web performance, scalable UI systems and product experiences that feel fast and intuitive.',
  },
  {
    date: '2023',
    title: 'Fullstack developer, Northtech',
    description:
      'Building and shipping fullstack web applications across frontend and backend, with hands-on work in TypeScript, Angular, Java, APIs and production-ready architecture.',
  },
  {
    date: '2022',
    title: 'Intern, Northtech',
    description:
      'Contributed to a visual redesign of ClimbAlong, improved the user experience and added new functionality, including scoreboard features.',
  },
  {
    date: '2020',
    title: 'Computer science, Cphbusiness Academy',
    description:
      'A practical, project-driven foundation in software engineering and building complete web applications for real use cases.',
  },
];
