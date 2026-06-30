import { motion } from "framer-motion";
import { GraduationCap, LineChart, Cpu, Briefcase } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "IIT Bombay", desc: "Chemical Engineering undergraduate building rigor in first-principles thinking." },
  { icon: Briefcase, title: "Product Management", desc: "Drawn to how great products are scoped, built, and shipped to delight users." },
  { icon: LineChart, title: "Finance", desc: "Exploring markets, valuation and strategy — the language of business decisions." },
  { icon: Cpu, title: "Technology", desc: "Comfortable with Python, SQL and the engineering mindset behind modern tools." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">About me</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Engineering background. <span className="gradient-text">Business mind.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              I am a Chemical Engineering student at IIT Bombay with a strong interest in management,
              finance, and technology. I enjoy solving problems, leading teams, and continuously
              learning new skills. I aim to build a career where analytical thinking, leadership,
              and technology come together to create meaningful impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
