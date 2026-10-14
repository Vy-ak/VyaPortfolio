"use client";

import { useEffect, useState } from "react";
import ContributionSkyline, { type ContributionDay } from "@/components/ui/contribution-skyline";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Activity() {
  const [data, setData] = useState<ContributionDay[] | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-contributions")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!cancelled) {
          setData(Array.isArray(json?.data) ? json.data : []);
        }
      })
      .catch(() => {
        if (!cancelled) setData([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="activity" className="mx-auto w-full max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          center
          eyebrow="Consistency"
          title="Activity"
          description="My GitHub contributions in the last year."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        {data === undefined ? (
          <p className="text-center text-sm text-muted-foreground">Loading activity…</p>
        ) : data.length > 0 ? (
          <ContributionSkyline data={data} unit="contribution" />
        ) : (
          <p className="text-center text-sm text-muted-foreground">No contribution data available right now.</p>
        )}
      </FadeIn>
    </section>
  );
}
