import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      {/* Hero — scroll-driven canvas animation */}
      <div id="hero" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
