import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedNav } from "@/components/ui/animated-nav";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vya — Frontend Developer",
  description: "CS student and frontend developer. Follow my journey, one project at a time.",
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