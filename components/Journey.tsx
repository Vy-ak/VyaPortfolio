"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import { journey, type Stop } from "@/data/journey";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const LINE_POS = "left-[15px] md:left-[calc(50%-1px)]";

export default function Journey() {
  const roadRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: roadRef,
    offset: ["start 70%", "end 70%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="mx-auto w-full max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          center
          eyebrow="The road so far"
          title="My journey"
          description="Every project I've built, in the order I built it."
        />
      </FadeIn>

      <div ref={roadRef} className="relative">
        <div className={`absolute inset-y-0 w-0.5 bg-border ${LINE_POS}`} />
        <motion.div
          style={{ scaleY: progress }}
          className={`absolute inset-y-0 w-0.5 origin-top bg-linear-to-b from-blue-slate to-steel-blue dark:from-steel-blue dark:to-icy-blue ${LINE_POS}`}
        />
        <motion.div
          style={{ top: dotTop }}
          className="absolute left-[9px] z-20 -mt-1.5 size-3.5 rounded-full bg-brand shadow-[0_0_16px_4px] shadow-brand/60 md:left-[calc(50%-7px)]"
        />

        <ol className="space-y-12">
          {journey.map((stop, i) => (
            <JourneyItem key={stop.title} stop={stop} side={i % 2 === 0 ? "left" : "right"} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function JourneyItem({ stop, side }: { stop: Stop; side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-16">
      <span className="absolute left-[9px] top-7 z-10 flex size-3.5 md:left-[calc(50%-7px)]">
        {stop.current && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
        )}
        <span className="relative inline-flex size-3.5 rounded-full border-2 border-brand bg-background" />
      </span>

      <FadeIn className={`ml-10 md:ml-0 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}>
        <Card stop={stop} alignRight={isLeft} />
      </FadeIn>
    </li>
  );
}

function Card({ stop, alignRight }: { stop: Stop; alignRight: boolean }) {
  const isProject = stop.type === "Projects";
  const align = alignRight ? "md:text-right" : "";
  const justify = alignRight ? "md:justify-end" : "";

  return (
    <div
      className={`rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/15 ${align} ${
        isProject ? "" : "border-dashed"
      } ${stop.current ? "border-brand/60" : ""}`}
    >
      <div className={`mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground ${justify}`}>
        <span className="font-mono">{stop.date}</span>
        <span aria-hidden>·</span>
        <span className={isProject ? "text-brand" : ""}>{isProject ? "Project" : "Milestone"}</span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{stop.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stop.description}</p>

      {stop.tags && (
        <div className={`mt-4 flex flex-wrap gap-2 ${justify}`}>
          {stop.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}

      {(stop.demo || stop.github) && (
        <div className={`mt-5 flex gap-4 text-sm font-medium ${justify}`}>
          {stop.demo && (
            <a href={stop.demo} target="_blank" className="inline-flex items-center gap-1 hover:text-brand">
              Live demo <ArrowUpRight className="size-4" />
            </a>
          )}
          {stop.github && (
            <a href={stop.github} target="_blank" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <Code className="size-4" /> Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}