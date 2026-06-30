import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "shadow-soft" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-gradient text-sm text-primary-foreground">SP</span>
            <span className="hidden sm:inline">Sarvesh Patange</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
