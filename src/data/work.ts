import {workProjects, type Project} from './projects';

export interface Change {
  kind: 'Added' | 'Changed';
  text: string;
}

export interface Role {
  version: string;
  date: string;
  title: string;
  changes: Change[];
  shipped?: Project[];
}

export const workSummary = 'Four years at Northtech, from intern to lead.';

export const roles: Role[] = [
  {
    version: 'v4.0.0',
    date: 'Now',
    title: 'Frontend lead, Northtech',
    changes: [
      {
        kind: 'Changed',
        text: 'Leading frontend work on ClimbAlong: Angular architecture, web performance, scalable UI systems and product experiences that feel fast and intuitive.',
      },
    ],
    shipped: workProjects,
  },
  {
    version: 'v3.0.0',
    date: '2023',
    title: 'Fullstack developer, Northtech',
    changes: [
      {
        kind: 'Added',
        text: 'Building and shipping fullstack web applications across frontend and backend, with hands-on work in TypeScript, Angular, Java, APIs and production-ready architecture.',
      },
    ],
  },
  {
    version: 'v2.0.0',
    date: '2022',
    title: 'Intern, Northtech',
    changes: [
      {kind: 'Changed', text: 'Contributed to a visual redesign of ClimbAlong and improved the user experience.'},
      {kind: 'Added', text: 'New functionality, including scoreboard features.'},
    ],
  },
  {
    version: 'v1.0.0',
    date: '2020',
    title: 'Computer science, Cphbusiness Academy',
    changes: [
      {
        kind: 'Added',
        text: 'A practical, project-driven foundation in software engineering and building complete web applications for real use cases.',
      },
    ],
  },
];
