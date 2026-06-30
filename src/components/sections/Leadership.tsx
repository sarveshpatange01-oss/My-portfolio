import { motion } from "framer-motion";
import { Crown, Users2, Trophy, Lightbulb } from "lucide-react";

const items = [
  {
    icon: Crown,
    tag: "Leadership",
    title: "Team Lead & Initiator",
    desc: "Led peer study groups and student initiatives, coordinating tasks, deadlines, and outcomes across diverse teams.",
  },
  {
    icon: Users2,
    tag: "College Activities",
    title: "IIT Bombay Campus Life",
    desc: "Active participant in technical and cultural events, contributing to a vibrant collaborative campus community.",
  },
  {
    icon: Lightbulb,
    tag: "Team Projects",
    title: "Cross-functional Problem Solving",
    desc: "Collaborated on academic and self-driven projects spanning engineering, data, and product thinking.",
  },
  {
    icon: Trophy,
    tag: "Extracurricular",
    title: "Continuous Learner",
    desc: "Online courses, finance reads, and product breakdowns — building a well-rounded foundation beyond the classroom.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">Leadership & Activities</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Beyond the <span className="gradient-text">classroom</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            How I spend time outside lectures — leading, collaborating, and learning.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-navy/10 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-navy">{it.tag}</p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
