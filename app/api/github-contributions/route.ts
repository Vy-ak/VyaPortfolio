import { NextResponse } from "next/server";

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}`;

const TIMEOUT_MS = 10000;

type Day = { date: string; contributionCount: number };
type Week = { contributionDays: Day[] };

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_USERNAME ?? "Vy-ak";

  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
      signal: controller.signal,
      // Avoid caching partial/failed responses; revalidate on success.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { error: `GitHub API ${res.status}`, detail: detail.slice(0, 200) },
        { status: 502 },
      );
    }

    const json = await res.json();
    if (json?.errors?.length) {
      const message = json.errors[0]?.message ?? "GitHub GraphQL error";
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks as
      | Week[]
      | undefined;

    if (!Array.isArray(weeks)) {
      return NextResponse.json({ error: "No contribution data" }, { status: 502 });
    }

    const data = weeks.flatMap((w) =>
      (w?.contributionDays ?? []).map((d) => ({ date: d.date, count: d.contributionCount })),
    );

    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json({ error: "GitHub request timed out" }, { status: 504 });
    }
    return NextResponse.json({ error: "Failed to reach GitHub" }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
