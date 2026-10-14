import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedNav } from "@/components/ui/animated-nav";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vya-portfolio.vercel.app"),
  title: {
    default: "Verdy — Software Engineer Intern Candidate",
    template: "%s | Verdy",
  },
  description:
    "Verdy Akbar Rafsanjani — software engineer intern candidate building web applications and automation tools, from full-stack dashboards to Discord bots.",
  keywords: [
    "Verdy Akbar Rafsanjani",
    "Verdy",
    "Software Engineer Intern",
    "Web Developer",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Verdy — Software Engineer Intern Candidate",
    description:
      "Verdy Akbar Rafsanjani — software engineer intern candidate building web applications and automation tools.",
    type: "website",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <AnimatedNav
          items={[
            { name: "Home", href: "#home" },
            { name: "Journey", href: "#journey" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ]}
        />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}