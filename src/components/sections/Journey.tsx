import { motion } from "framer-motion";
import { GraduationCap, Code2, TrendingUp, Rocket } from "lucide-react";

const steps = [
  { icon: GraduationCap, year: "2023", title: "IIT Bombay", desc: "Began Chemical Engineering at one of India's premier institutes." },
  { icon: Code2, year: "Now", title: "Learning Python & SQL", desc: "Building a technical toolkit for data-driven problem solving." },
  { icon: TrendingUp, year: "Now", title: "Exploring Finance & PM", desc: "Diving into markets, valuation, and product thinking through self-study and projects." },
  { icon: Rocket, year: "Next", title: "Future Career Goals", desc: "A role where analytics, leadership and technology converge — PM, consulting or finance." },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_60%,oklch(0.42_0.13_264/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">My Journey</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            From engineering to <span className="gradient-text">impact</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-navy/10 via-navy/40 to-navy/10 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative grid grid-cols-[2rem_1fr] items-start gap-4 md:grid-cols-2 md:gap-12 ${left ? "" : ""}`}
                >
                  {/* dot */}
                  <div className="relative flex justify-start md:hidden">
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy-gradient text-primary-foreground shadow-glow">
                      <s.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-navy-gradient text-primary-foreground shadow-glow md:flex">
                    <s.icon className="h-4 w-4" />
                  </div>

                  {/* card */}
                  <div className={`md:col-span-2 md:grid md:grid-cols-2 md:gap-12`}>
                    <div className={left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}>
                      <div className="glass inline-block rounded-2xl p-5 shadow-soft">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy">{s.year}</p>
                        <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div className={left ? "hidden md:block" : "hidden md:block md:order-1"} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
