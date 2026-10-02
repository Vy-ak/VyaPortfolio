import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  "HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Framer Motion", "Figma", "Python", "Java", "Git",
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading eyebrow="About" title="A little about me" />
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <FadeIn delay={0.1}>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Computer Science student who got hooked on frontend the first time I made a
              button animate. I love the space where clean code meets thoughtful design.
            </p>
            <p>
              Right now I&apos;m learning animation and UI design, and this site is where I
              practice. When I&apos;m not coding, you&apos;ll find me Playing Games.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap content-start gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-3 py-1 text-sm transition hover:border-brand hover:text-brand"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}