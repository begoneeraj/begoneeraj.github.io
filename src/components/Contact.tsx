"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-sm text-sky-400"
      >
        04 · contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Let&apos;s build something.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-md text-foreground/60"
      >
        Open to internships, freelance work, and collaborations. Reach out any
        time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 transition-transform hover:scale-105"
        >
          <Mail size={16} />
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-sky-400/50 hover:text-sky-400"
        >
          <GithubIcon size={16} />
          @{profile.handle}
        </a>
      </motion.div>

      <p className="mt-24 font-mono text-xs text-foreground/30">
        built with Next.js, Tailwind &amp; Framer Motion — deployed on GitHub
        Pages
      </p>
    </section>
  );
}
