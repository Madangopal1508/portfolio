"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Madangopal1508", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/madana-gopala-reddy-konda-15a266254/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gopalareddy.konda24@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl tracking-tight mb-1">
              MR<span className="text-blue-400">.</span>
            </div>
            <p className="text-white/30 text-sm">Mechatronics Engineer · Germany</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Madana Gopala Reddy Konda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
