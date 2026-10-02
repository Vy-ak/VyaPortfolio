import { ArrowDown } from "lucide-react";
import FadeIn from "./FadeIn";
import RotatingGreeting from "./RotatingGreeting";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships · 2027
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
                <RotatingGreeting />, I&apos;m Vya.
                <br />
                <span className="bg-linear-to-r from-iron-grey via-blue-slate to-steel-blue bg-clip-text text-transparent dark:from-icy-blue dark:via-icy-blue dark:to-steel-blue">
                    I Design, Build, Develop, and Maintain Programs.
                </span>
            </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Computer Science student who loves frontend and UI design. Scroll down to follow my
            journey, one project at a time.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              See my journey <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-muted"
            >
              Get in touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}