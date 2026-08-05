"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-sm text-sky-400"
      >
        02 · skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Wherever the problem needs.
      </motion.h2>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.label}>
            <p className="mb-4 text-sm text-foreground/50">{group.label}</p>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    delay: groupIndex * 0.1 + i * 0.04,
                  }}
                  whileHover={{ y: -3, borderColor: "rgba(56,189,248,0.6)" }}
                  className="rounded-full border border-white/10 px-4 py-2 font-mono text-sm text-foreground/80 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
