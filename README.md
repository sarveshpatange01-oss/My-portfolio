# Sarvesh Patange — Personal Portfolio

A modern, minimal, and professional personal portfolio website for **Sarvesh Patange**, a Chemical Engineering student at IIT Bombay exploring Product Management, Finance, Consulting, and Technology.

🌐 **Live site:** https://sarveshpatange.lovable.app

---

## ✨ Features

- **Hero section** with an animated *Skill Constellation* (custom SVG with rotating rings, an SP monogram, and orbiting skill nodes) instead of a profile photo — a unique visual identity.
- **About** — engineering background meets business mind.
- **Skills** — technical (Python, C++, SQL, Excel) with animated progress bars + soft skills (Leadership, Team Management, Problem Solving, Communication, Analytical Thinking).
- **Leadership & Activities** highlights.
- **Journey** timeline.
- **Contact** section with email, LinkedIn, GitHub, and a working contact form.
- **Floating "Let's Connect"** button on every section.
- **Professional loading screen** on first visit.
- **Light / Dark theme** toggle.
- **Glassmorphism** cards, subtle gradient backgrounds, and smooth **Framer Motion** animations.
- **SEO optimized** — semantic HTML, meta tags, OpenGraph, Twitter cards, and fast loading.
- Fully **responsive** across mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7, SSR-ready)
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4 with semantic design tokens
- **Animations:** Framer Motion
- **UI Primitives:** shadcn/ui (Radix UI)
- **Icons:** lucide-react
- **Fonts:** Poppins (display) + Inter (body)
- **Language:** TypeScript
- **Package Manager:** Bun

---

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/         # Hero, About, Skills, Leadership, Journey, Contact, Footer
│   ├── ui/               # shadcn/ui primitives
│   ├── FloatingConnect.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── SkillConstellation.tsx   # Custom animated SVG hero visual
│   └── ThemeToggle.tsx
├── routes/
│   ├── __root.tsx        # App shell, meta tags, fonts
│   └── index.tsx         # Home page composition
├── lib/                  # Utilities
├── hooks/                # Custom React hooks
└── styles.css            # Tailwind v4 theme + design tokens
```

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) (or npm / pnpm)

### Install dependencies
```bash
bun install
```

### Run the dev server
```bash
bun run dev
```
The site will be available at **http://localhost:8080**.

### Build for production
```bash
bun run build
```

### Preview the production build
```bash
bun run start
```

---

## 🎨 Customization

- **Personal info, links, education, skills** — edit the section files under `src/components/sections/`.
- **Skill Constellation nodes** — edit `src/components/SkillConstellation.tsx`.
- **Theme colors / gradients / shadows** — edit semantic tokens in `src/styles.css` (Navy + Gold + Gray palette). Never hardcode color utilities in components.
- **SEO / metadata** — edit `head()` in `src/routes/__root.tsx` and `src/routes/index.tsx`.

---

## 📬 Contact

- **Email:** sarveshpatange01@gmail.com
- **LinkedIn:** [sarvesh-patange-241493298](https://www.linkedin.com/in/sarvesh-patange-241493298/)
- **GitHub:** [sarveshpatange01-oss](https://github.com/sarveshpatange01-oss)
- **Location:** Mumbai, India

---

## 📄 License

Personal portfolio — © Sarvesh Patange. All rights reserved.

> *"Always learning, always growing."*
