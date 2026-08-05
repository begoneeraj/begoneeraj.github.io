"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import GithubStats from "./GithubStats";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 font-mono text-sm text-sky-400">01 · about</p>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Software that verifies things people can&apos;t check by eye.
        </h2>
        <p className="text-lg leading-relaxed text-foreground/70">
          {profile.bio}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-14"
      >
        <GithubStats />
      </motion.div>
    </section>
  );
}
