import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Activity from "@/components/Activity";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Journey />
        <About />
        <Contact />
        <Activity />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vya · Built with Next.js, Tailwind & Framer Motion
      </footer>
    </>
  );
}