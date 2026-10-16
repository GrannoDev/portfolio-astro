/** Writes a tool the way it would appear in package.json, e.g. "Spring Boot" → "spring-boot". */
export const packageName = (tool: string) => tool.toLowerCase().replaceAll(' ', '-');
