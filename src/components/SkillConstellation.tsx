import { motion } from "framer-motion";
import { Code2, Database, FileSpreadsheet, LineChart, Users, Brain, Crown, Cpu } from "lucide-react";

const skills = [
  { label: "Python", icon: Code2, angle: 0 },
  { label: "SQL", icon: Database, angle: 45 },
  { label: "Excel", icon: FileSpreadsheet, angle: 90 },
  { label: "Finance", icon: LineChart, angle: 135 },
  { label: "Leadership", icon: Crown, angle: 180 },
  { label: "Teams", icon: Users, angle: 225 },
  { label: "Problem", icon: Brain, angle: 270 },
  { label: "C++", icon: Cpu, angle: 315 },
];

export function SkillConstellation() {
  // svg viewBox 400x400 — orbits + nodes
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* background glow */}
      <div className="absolute inset-6 rounded-full bg-navy/15 blur-3xl" />

      {/* SVG orbits */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.42 0.13 264)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.42 0.13 264)" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.5 0.15 264)" />
            <stop offset="100%" stopColor="oklch(0.25 0.08 264)" />
          </radialGradient>
        </defs>

        {/* concentric orbits */}
        {[90, 130, 170].map((r, i) => (
          <motion.circle
            key={r}
            cx="200" cy="200" r={r}
            fill="none"
            stroke="url(#orbitGrad)"
            strokeWidth={i === 1 ? 1.2 : 0.6}
            strokeDasharray={i === 2 ? "2 6" : undefined}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + i * 0.1, duration: 0.8 }}
            style={{ transformOrigin: "200px 200px" }}
          />
        ))}

        {/* rotating tick ring */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <line
              key={i}
              x1="200" y1="35" x2="200" y2={i % 3 === 0 ? 28 : 32}
              stroke="oklch(0.42 0.13 264)"
              strokeOpacity={i % 3 === 0 ? 0.6 : 0.25}
              strokeWidth="1"
              transform={`rotate(${i * 10} 200 200)`}
            />
          ))}
        </motion.g>

        {/* connector lines from center to nodes */}
        {skills.map((s) => {
          const rad = (s.angle * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 130;
          const y = 200 + Math.sin(rad) * 130;
          return (
            <motion.line
              key={`l-${s.label}`}
              x1="200" y1="200" x2={x} y2={y}
              stroke="oklch(0.42 0.13 264)" strokeOpacity="0.2" strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            />
          );
        })}

        {/* core */}
        <motion.circle
          cx="200" cy="200" r="44"
          fill="url(#coreGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 180 }}
        />
        <motion.circle
          cx="200" cy="200" r="44"
          fill="none" stroke="oklch(0.42 0.13 264)" strokeOpacity="0.5"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <text
          x="200" y="208" textAnchor="middle"
          fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28"
          fill="oklch(0.98 0 0)"
        >
          SP
        </text>

        {/* corner markers — clinical/scientific feel */}
        {[
          [20, 20], [380, 20], [20, 380], [380, 380],
        ].map(([cx, cy], i) => (
          <g key={i} stroke="oklch(0.45 0.03 257)" strokeWidth="0.8" fill="none">
            <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} />
            <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} />
          </g>
        ))}

        {/* corner labels */}
        <text x="20" y="14" fontFamily="ui-monospace,monospace" fontSize="7" fill="oklch(0.55 0.03 257)">SYS·001</text>
        <text x="380" y="14" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="7" fill="oklch(0.55 0.03 257)">v.2026</text>
        <text x="20" y="396" fontFamily="ui-monospace,monospace" fontSize="7" fill="oklch(0.55 0.03 257)">N 19.07° E 72.91°</text>
        <text x="380" y="396" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="7" fill="oklch(0.55 0.03 257)">IIT·BOMBAY</text>
      </svg>

      {/* HTML nodes positioned over SVG */}
      {skills.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const xPct = 50 + (Math.cos(rad) * 130) / 4; // 400px → percent
        const yPct = 50 + (Math.sin(rad) * 130) / 4;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7 + i * 0.06, type: "spring", stiffness: 200 }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3 + (i % 3), delay: i * 0.2 }}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl shadow-soft"
            >
              <s.icon className="h-4 w-4 text-navy" />
            </motion.div>
            <span className="rounded-full bg-background/70 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
              {s.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
