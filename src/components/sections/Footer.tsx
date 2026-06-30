import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient text-primary-foreground">
          <span className="font-display font-bold">SP</span>
        </div>
        <p className="mt-5 font-display text-xl font-semibold italic gradient-text">
          "Always learning, always growing."
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="https://www.linkedin.com/in/sarvesh-patange-241493298/" target="_blank" rel="noreferrer"
            aria-label="LinkedIn"
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/sarveshpatange01-oss" target="_blank" rel="noreferrer"
            aria-label="GitHub"
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:sarveshpatange01@gmail.com" aria-label="Email"
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sarvesh Patange · Built with care in Mumbai.
        </p>
      </div>
    </footer>
  );
}
