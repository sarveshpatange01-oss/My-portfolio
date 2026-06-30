import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, MapPin, Sparkles } from "lucide-react";
import { SkillConstellation } from "@/components/SkillConstellation";


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-navy/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-navy-light/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-navy" />
            Open to PM, Finance & Consulting opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="gradient-text">Sarvesh</span><br />Patange.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Aspiring Product Manager · Finance Enthusiast · IIT Bombay Student · Problem Solver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65 }}
            className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4" /> Mumbai, India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-navy-gradient px-5 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> View Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/sarvesh-patange-241493298/"
              target="_blank" rel="noreferrer"
              className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/sarveshpatange01-oss"
              target="_blank" rel="noreferrer"
              className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <SkillConstellation />
          <div className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 shadow-soft">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-navy font-semibold">8</span> skills · <span className="text-navy font-semibold">1</span> mission
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
