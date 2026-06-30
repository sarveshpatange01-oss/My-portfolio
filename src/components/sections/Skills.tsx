import { motion } from "framer-motion";
import { Code2, Database, FileSpreadsheet, Users, Brain, MessagesSquare, Crown, Target } from "lucide-react";

const technical = [
  { name: "Python", level: 85, icon: Code2 },
  { name: "C++", level: 75, icon: Code2 },
  { name: "SQL", level: 80, icon: Database },
  { name: "Microsoft Excel", level: 90, icon: FileSpreadsheet },
];

const soft = [
  { name: "Leadership", icon: Crown },
  { name: "Team Management", icon: Users },
  { name: "Problem Solving", icon: Brain },
  { name: "Communication", icon: MessagesSquare },
  { name: "Analytical Thinking", icon: Target },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.42_0.13_264/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            A blend of <span className="gradient-text">tech & people</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* technical */}
          <div className="glass rounded-3xl p-7 shadow-soft">
            <h3 className="font-display text-xl font-semibold">Technical</h3>
            <div className="mt-6 space-y-5">
              {technical.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <s.icon className="h-4 w-4 text-navy" />
                      {s.name}
                    </div>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-navy-gradient"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* soft */}
          <div className="glass rounded-3xl p-7 shadow-soft">
            <h3 className="font-display text-xl font-semibold">Strengths</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {soft.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-elegant"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-navy transition-colors group-hover:bg-navy-gradient group-hover:text-primary-foreground">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-sm font-medium">{s.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
