"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREETINGS = [
  { text: "Hi", lang: "en", name: "English" },
  { text: "Halo", lang: "id", name: "Indonesian" },
  { text: "Hola", lang: "es", name: "Spanish" },
  { text: "Bonjour", lang: "fr", name: "French" },
  { text: "こんにちは", lang: "ja", name: "Japanese" },
  { text: "안녕", lang: "ko", name: "Korean" },
  { text: "Ciao", lang: "it", name: "Italian" },
  { text: "Hallo", lang: "de", name: "German" },
];

export default function RotatingGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % GREETINGS.length), 2000);
    return () => clearInterval(id);
  }, []);

  const greeting = GREETINGS[index];

  return (
    <>
      <span className="sr-only">Hi</span>

      <span aria-hidden className="inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={greeting.text}
            lang={greeting.lang}
            title={greeting.name}
            className="inline-block"
            initial={{ y: "0.4em", opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-0.4em", opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {greeting.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}