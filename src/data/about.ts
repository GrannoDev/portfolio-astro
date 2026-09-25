const BIRTH_DATE = {year: 1997, monthIndex: 6, day: 4}; // monthIndex is 0-based: 6 = July

export function getAge(today = new Date()) {
  const {year, monthIndex, day} = BIRTH_DATE;
  const age = today.getFullYear() - year;
  const hadBirthdayThisYear = today >= new Date(today.getFullYear(), monthIndex, day);
  return hadBirthdayThisYear ? age : age - 1;
}

export const tools = {
  daily: 'Most days I write TypeScript and Angular on the frontend, with Java and Spring Boot on PostgreSQL behind it.',
  sideProjects:
    'On side projects I reach for SvelteKit, React and React Native, Hono, Node.js, Tailwind CSS, PostgreSQL and Docker.',
  exploring: 'Right now I am exploring how AI can sharpen my development work, from faster iteration to better reviews.',
};

export const about = {
  intro: `I'm Magnus, ${getAge()}, based in Denmark.`,
  focus: 'I care about clean implementation, fast interfaces and systems that stay maintainable as a product grows.',
  interests: "Away from the keyboard it's fishing, the gym, Marvel and games.",
};
