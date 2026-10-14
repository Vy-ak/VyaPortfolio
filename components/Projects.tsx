import { BentoCard } from "@/components/ui/bento";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          center
          eyebrow="Projects"
          title="Projects"
          description="A selection of projects I've built — from full-stack web apps to community automation tools."
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-3">
          <BentoCard
            key="cosplay-thieves-website"
            eyebrow="Community Website"
            title="Cosplay Thieves Website"
            description={
              <>
                <span>Staff-facing dashboard and public site for the Cosplay Thieves community (1,835 members) — landing, internal operations, and admin tooling.</span>
                <span className="mt-3 flex gap-4 text-sm font-medium text-muted-foreground">
                  <a href="https://www.cosplaythieves.com/" target="_blank" className="inline-flex items-center gap-1 hover:text-brand">
                    Live Website
                  </a>
                </span>
              </>
            }
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/cosplaythieves-website.png)] bg-cover bg-center" />}
            className="max-lg:rounded-t-4xl lg:col-span-6 lg:rounded-t-4xl"
          />
          <BentoCard
            key="ct-officer"
            eyebrow="Discord Bot"
            title="CT Officer"
            description="Security and moderation bot: roles, tickets, onboarding, scam detection with rate-limit safeguards and logging across an active community."
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/ct-officer.png)] bg-cover bg-top" />}
            className="lg:col-span-3 lg:rounded-bl-4xl"
          />
          <BentoCard
            key="ct-media"
            eyebrow="Discord Bot"
            title="CT Media"
            description="Talent/streamer operations bot: dashboards, social media monitoring, and payment tracking for community staff."
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/ct-media.png)] bg-cover bg-top" />}
            className="lg:col-span-3"
          />
          <BentoCard
            key="growth-forecaster"
            eyebrow="AI Web App"
            title="Growth Forecaster"
            description={
              <>
                <span>Stunting prediction web app for the Artificial Intelligence course, trained on Kaggle datasets.</span>
                <span className="mt-3 flex gap-4 text-sm font-medium text-muted-foreground">
                  <a href="https://vyakraf.pythonanywhere.com/" target="_blank" className="inline-flex items-center gap-1 hover:text-brand">
                    Live demo
                  </a>
                  <a href="https://github.com/Vy-ak/Artificial-Intelligence" target="_blank" className="inline-flex items-center gap-1 hover:text-foreground">
                    Code
                  </a>
                </span>
              </>
            }
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/growth-forecaster.png)] bg-cover bg-center" />}
            className="lg:col-span-2"
          />
          <BentoCard
            key="bks-smpit"
            eyebrow="Freelance Web App"
            title="BKS SMPIT Alfityan"
            description="Digital yearbook website delivered directly to parents, proving a web-based yearbook is more reliable than print."
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/bks-alfityan.png)] bg-cover bg-center" />}
            className="lg:col-span-2"
          />
          <BentoCard
            key="mapscore"
            eyebrow="Full-stack Web App"
            title="MapScore"
            description={
              <>
                <span>Full-stack web app built for the Software Engineering & Software Architecture course.</span>
                <span className="mt-3 flex gap-4 text-sm font-medium text-muted-foreground">
                  <a href="https://map-score.vercel.app/" target="_blank" className="inline-flex items-center gap-1 hover:text-brand">
                    Live demo
                  </a>
                  <a href="https://github.com/Vy-ak/MapScore" target="_blank" className="inline-flex items-center gap-1 hover:text-foreground">
                    Code
                  </a>
                </span>
              </>
            }
            graphic={<div key="graphic" className="absolute inset-0 bg-[url(/projects/mapscore.png)] bg-cover bg-center" />}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </FadeIn>
    </section>
  );
}
