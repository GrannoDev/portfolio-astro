const BIRTH_DATE = {year: 1997, monthIndex: 6, day: 4}; // monthIndex is 0-based: 6 = July

export function getAge(today = new Date()) {
  const {year, monthIndex, day} = BIRTH_DATE;
  const age = today.getFullYear() - year;
  const hadBirthdayThisYear = today >= new Date(today.getFullYear(), monthIndex, day);
  return hadBirthdayThisYear ? age : age - 1;
}

const pad = (value: number) => String(value).padStart(2, '0');

/** ISO date of the "initial release", e.g. 1997-07-04. */
export const birthDate = `${BIRTH_DATE.year}-${pad(BIRTH_DATE.monthIndex + 1)}-${pad(BIRTH_DATE.day)}`;

export const tools = {
  daily: ['TypeScript', 'Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
  sideProjects: ['SvelteKit', 'React', 'React Native', 'Hono', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
  exploring: 'How agents can sharpen my development work, from faster iteration to better reviews.',
};

export const about = {
  intro: `I'm Magnus, ${getAge()}, based in Denmark.`,
  focus: 'I care about clean implementation, fast interfaces and systems that stay maintainable as a product grows.',
  interests: "Away from the keyboard it's fishing, the gym, Marvel and games.",
};
