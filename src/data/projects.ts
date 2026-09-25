import type {ImageMetadata} from 'astro';
import climbalongImg from '../assets/climbalong.png';
import proclimbingImg from '../assets/proclimbing.webp';
import silverballImg from '../assets/silverball.png';
import piratewhistImg from '../assets/piratewhist.webp';
import knapoghugImg from '../assets/knapoghug-logo.webp';

export interface Project {
  type: string;
  title: string;
  description: string;
  stack: string;
  url: string;
  linkLabel: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    type: 'Product, at Northtech',
    title: 'ClimbAlong',
    description: 'Digital climbing platform. I help build performant user experiences and scalable application features.',
    stack: 'Angular, TypeScript, Java and Spring Boot, Tailwind CSS, PostgreSQL',
    url: 'https://climbalong.com/',
    linkLabel: 'climbalong.com',
    image: climbalongImg,
    imageAlt: 'ClimbAlong web app',
  },
  {
    type: 'Web application, at Northtech',
    title: 'Pro Climbing League',
    description:
      'Web application for a global climbing league. I built it end to end, including the qualification format, with content managed in Sanity.',
    stack: 'SvelteKit, TypeScript, Sanity, PostHog',
    url: 'https://www.proclimbing.com/',
    linkLabel: 'proclimbing.com',
    image: proclimbingImg,
    imageAlt: 'Pro Climbing League qualification section',
  },
  {
    type: 'Website',
    title: 'Silverball',
    description: 'Danish gaming pub centred on pinball culture, built for discoverability and a clear content experience.',
    stack: 'SvelteKit, TypeScript, Tailwind CSS, Firebase',
    url: 'https://silverball.dk/',
    linkLabel: 'silverball.dk',
    image: silverballImg,
    imageAlt: 'Silverball website',
  },
  {
    type: 'Mobile app',
    title: 'Pirate Whist',
    description: 'Keeps whist scores straight: rounds, tricks and points, so the game stays about the cards and not the maths.',
    stack: 'React Native, Expo',
    url: 'https://piratewhist.com/',
    linkLabel: 'piratewhist.com',
    image: piratewhistImg,
    imageAlt: 'Pirate Whist app',
  },
  {
    type: 'Web and mobile app',
    title: 'Knap & Hug',
    description:
      'Runs my fishing club with friends, on the web and as a mobile app: planning trips, logging catches and keeping everyone in the loop. Members only.',
    stack: 'SvelteKit, TypeScript, Tailwind CSS, Hono, Drizzle, PostgreSQL, Better Auth, Expo',
    url: 'https://knapoghug.com/',
    linkLabel: 'knapoghug.com',
    image: knapoghugImg,
    imageAlt: 'Knap og Hug logo',
  },
];
