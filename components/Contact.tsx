import { ArrowUpRight, Mail } from "lucide-react";
import { EMAIL } from "@/data/journey";
import FadeIn from "./FadeIn";

const LINKS = [
  { name: "GitHub", href: "https://github.com/Vy-ak" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/verdy-akbar-6b13882a8/?isSelfProfile=true" },
  { name: "Résumé", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand-glow/30 blur-3xl"
          />
          <p className="relative text-sm font-medium text-brand">Next stop</p>
          <h2 className="relative mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something together
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted-foreground">
            I&apos;m looking for internships and fun projects. My inbox is always open.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            <Mail className="size-4" /> {EMAIL}
          </a>

          <div className="relative mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            {LINKS.map((link) => (
              <a key={link.name} href={link.href} target="_blank" className="inline-flex items-center gap-1 transition hover:text-foreground">
                {link.name} <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}