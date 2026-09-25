import {siteConfig, profiles} from '../data/site';
import {projects} from '../data/projects';
import {roles, workSummary} from '../data/work';
import {about, tools} from '../data/about';

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');
const absolute = (path: string) => new URL(path, siteConfig.url).href;

/**
 * Plain Markdown version of the portfolio, for language models and agents.
 * Served as /llms.txt (https://llmstxt.org) and /index.md.
 */
export function profileMarkdown({includeLinks = false} = {}) {
  const sections = [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    list([
      `Role: ${siteConfig.role}`,
      `Current position: ${roles[0].title}`,
      `Employer: ${siteConfig.employer}`,
      `Location: ${siteConfig.location}`,
      `Education: ${siteConfig.education}`,
      `Languages: ${siteConfig.languages.join(', ')}`,
      `Email: ${siteConfig.email}`,
    ]),
    '## Projects',
    list(
      projects.map(
        (project) => `[${project.title}](${project.url}): ${project.type}. ${project.description} Stack: ${project.stack}.`,
      ),
    ),
    '## Work',
    workSummary,
    list(roles.map((role) => `${role.date}: ${role.title}. ${role.description}`)),
    '## Tools',
    [tools.daily, tools.sideProjects, tools.exploring].join('\n\n'),
    '## About',
    [`${about.intro} ${about.focus}`, about.interests].join('\n\n'),
    '## Contact',
    list([
      `[Email](mailto:${siteConfig.email})`,
      ...Object.values(profiles).map(({label, href}) => `[${label}](${href})`),
    ]),
  ];

  if (includeLinks) {
    sections.push(
      '## Optional',
      list([
        `[Portfolio](${absolute('/')}): The HTML version of this profile`,
        `[Markdown](${absolute('/index.md')}): The same profile as a Markdown page`,
      ]),
    );
  }

  return `${sections.join('\n\n')}\n`;
}
