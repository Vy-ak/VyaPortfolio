"use client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full border bg-background/80 shadow-lg backdrop-blur-sm transition hover:scale-105 active:scale-95 md:bottom-auto md:top-6"
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </button>
  );
}