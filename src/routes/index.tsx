import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { FloatingConnect } from "@/components/FloatingConnect";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Leadership } from "@/components/sections/Leadership";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarvesh Patange — IIT Bombay | Aspiring PM & Finance Enthusiast" },
      { name: "description", content: "Portfolio of Sarvesh Patange, Chemical Engineering student at IIT Bombay — exploring Product Management, Finance, Consulting and Technology." },
      { property: "og:title", content: "Sarvesh Patange — Portfolio" },
      { property: "og:description", content: "Aspiring Product Manager · Finance Enthusiast · IIT Bombay Student · Problem Solver." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Leadership />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <FloatingConnect />
      <Toaster position="bottom-center" />
    </>
  );
}
