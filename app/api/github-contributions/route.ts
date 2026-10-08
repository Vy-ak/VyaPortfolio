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

type Day = { date: string; contributionCount: number };
type Week = { contributionDays: Day[] };

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_USERNAME ?? "Vy-ak";

  if (!token) {
    return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });
  }

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { login } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: `GitHub API ${res.status}` }, { status: 502 });
  }

  const json = await res.json();
  const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks as Week[] | undefined;

  if (!weeks) {
    const message = json?.errors?.[0]?.message ?? "No contribution data";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  const data = weeks.flatMap((w) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })),
  );

  return NextResponse.json({ data });
}
