"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-sm text-sky-400"
      >
        03 · projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Things I&apos;ve shipped.
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.slug}
            href={project.live ?? project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-sky-400/40 ${
              project.featured ? "sm:col-span-2" : ""
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,0%),rgba(56,189,248,0.08),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-foreground/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
                />
              </div>
              {project.featured && (
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-amber-400">
                  <Star size={12} fill="currentColor" /> featured
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {project.description}
              </p>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-foreground/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
