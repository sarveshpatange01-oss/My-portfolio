import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! I'll get back to you soon.");
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Always open to conversations on product, finance, consulting, or just an interesting idea.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          {/* info */}
          <div className="space-y-4">
            <a href="mailto:sarveshpatange01@gmail.com" className="glass group flex items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-medium">sarveshpatange01@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sarvesh-patange-241493298/" target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
                <p className="font-medium">sarvesh-patange-241493298</p>
              </div>
            </a>
            <a href="https://github.com/sarveshpatange01-oss" target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
                <p className="font-medium">sarveshpatange01-oss</p>
              </div>
            </a>
            <div className="glass flex items-center gap-4 rounded-2xl p-5 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
                <p className="font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* form */}
          <form onSubmit={onSubmit} className="glass rounded-3xl p-7 shadow-elegant">
            <div className="grid gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                <input required name="name" type="text" placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                <input required name="email" type="email" placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea required name="message" rows={5} placeholder="Tell me a bit about it..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20" />
              </div>
              <button
                type="submit" disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
