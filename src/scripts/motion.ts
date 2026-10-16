/**
 * Types section headings out one at a time as they scroll into view, with a block caret
 * after the last character, and fades section bodies in. Runs only when the layout's
 * inline script has set `typing` on <html> (motion allowed, IntersectionObserver and ResizeObserver present).
 */

interface Heading {
  el: HTMLElement;
  text: string;
  done: HTMLElement;
  rest: HTMLElement;
  caret: HTMLElement;
}

const BASE_DELAY_MS = 34;
const PAUSE_BETWEEN_MS = 360;

function toHeading(el: HTMLElement): Heading | undefined {
  const done = el.querySelector<HTMLElement>('[data-typed-done]');
  const rest = el.querySelector<HTMLElement>('[data-typed-rest]');
  const caret = el.querySelector<HTMLElement>('.caret');
  const text = el.dataset.typed;
  return done && rest && caret && text ? {el, text, done, rest, caret} : undefined;
}

/** Uneven gaps read as a person typing: longer after spaces, longest after punctuation. */
function delayAfter(char: string) {
  let delay = BASE_DELAY_MS * (0.55 + Math.random() * 0.9);
  if (char === ' ') delay += BASE_DELAY_MS * 0.6;
  if (',.:;'.includes(char)) delay += BASE_DELAY_MS * 5;
  return delay;
}

const CARET_GAP_EM = 0.06;

/** Moves the caret just after the last typed character, centred on that character's line. */
function placeCaret(heading: Heading) {
  const typed = heading.done.firstChild;
  if (!typed?.textContent) return;
  const range = document.createRange();
  range.setStart(typed, typed.textContent.length - 1);
  range.setEnd(typed, typed.textContent.length);
  const rects = range.getClientRects();
  const char = rects[rects.length - 1];
  if (!char) return;
  const box = heading.el.getBoundingClientRect();
  const fontSize = parseFloat(getComputedStyle(heading.el).fontSize);
  const left = char.right - box.left + CARET_GAP_EM * fontSize;
  const top = char.top - box.top + (char.height - heading.caret.offsetHeight) / 2;
  heading.caret.style.transform = `translate(${left}px, ${top}px)`;
}

function show(heading: Heading, count: number) {
  heading.done.textContent = heading.text.slice(0, count);
  heading.rest.textContent = heading.text.slice(count);
  if (heading.el.classList.contains('is-active')) placeCaret(heading);
}

function startTyping() {
  const headings = [...document.querySelectorAll<HTMLElement>('[data-typed]')].flatMap((el) => toHeading(el) ?? []);
  const byElement = new Map<Element, Heading>(headings.map((heading) => [heading.el, heading]));
  const visible = new Set<Heading>();
  const started = new Set<Heading>();
  const queue: Heading[] = [];
  let active: Heading | undefined;
  let busy = false;

  function type(heading: Heading, count: number) {
    show(heading, count);
    if (count < heading.text.length) {
      setTimeout(() => type(heading, count + 1), delayAfter(heading.text.charAt(count - 1)));
      return;
    }
    heading.el.classList.add('is-done');
    setTimeout(() => {
      busy = false;
      next();
    }, PAUSE_BETWEEN_MS);
  }

  function next() {
    while (!busy) {
      const heading = queue.shift();
      if (!heading) return;
      // Scrolled past while waiting its turn: typing it off-screen would only delay the next one.
      if (!visible.has(heading)) {
        show(heading, heading.text.length);
        continue;
      }
      active?.el.classList.remove('is-active', 'is-done');
      active = heading;
      heading.el.classList.add('is-active');
      busy = true;
      type(heading, 1);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const heading = byElement.get(entry.target);
        if (!heading) continue;
        if (!entry.isIntersecting) {
          visible.delete(heading);
          continue;
        }
        visible.add(heading);
        if (started.has(heading)) continue;
        started.add(heading);
        queue.push(heading);
      }
      queue.sort((a, b) => headings.indexOf(a) - headings.indexOf(b));
      next();
    },
    {rootMargin: '0px 0px -12% 0px'},
  );
  headings.forEach((heading) => observer.observe(heading.el));

  // Rewrapping (resize, rotation, late font swap) resizes the heading and moves its last
  // character, so the caret follows it.
  const followText = new ResizeObserver(() => active && placeCaret(active));
  headings.forEach((heading) => followText.observe(heading.el));
}

function startReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    {rootMargin: '0px 0px -8% 0px'},
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}

if (document.documentElement.classList.contains('typing')) {
  startTyping();
  startReveal();
}
