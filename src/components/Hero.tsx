"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import ParticleField from "./ParticleField";
import GithubIcon from "./icons/GithubIcon";
import { profile } from "@/lib/data";

function useTypewriter(lines: string[], typingMs = 45, pauseMs = 1600) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          setLineIndex((i) => (i + 1) % lines.length);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? typingMs / 2 : typingMs);
    }

    timeout = setTimeout(tick, typingMs);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.taglines);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      <ParticleField />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
      >
        <span className="mb-6 rounded-full border border-white/10 px-4 py-1 font-mono text-xs tracking-wide text-sky-400">
          open to internships · freelance · collaborations
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 h-7 font-mono text-sm text-foreground/60 sm:text-base">
          {typed}
          <span className="ml-0.5 animate-pulse text-sky-400">|</span>
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-6 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-colors hover:border-sky-400/50 hover:text-sky-400"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-colors hover:border-sky-400/50 hover:text-sky-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 z-10 text-foreground/40 transition-colors hover:text-sky-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
