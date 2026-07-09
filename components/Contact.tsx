"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useState } from "react";

const socials = [
  {
    label: "Email",
    value: "gopalareddy.konda24@gmail.com",
    href: "mailto:gopalareddy.konda24@gmail.com",
    icon: Mail,
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/madana-gopala-reddy-konda",
    href: "https://www.linkedin.com/in/madana-gopala-reddy-konda-15a266254/",
    icon: Linkedin,
    color: "from-sky-500 to-blue-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
  },
  {
    label: "GitHub",
    value: "github.com/Madangopal1508",
    href: "https://github.com/Madangopal1508",
    icon: Github,
    color: "from-purple-500 to-violet-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:gopalareddy.konda24@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-background py-28 px-6 lg:px-20 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg leading-8">
            Whether you have an opportunity, a project to discuss, or just want to connect — I'd
            love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — social links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <MapPin size={14} />
              <span>Based in Germany · Available for remote & on-site roles</span>
            </div>

            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border ${s.border} ${s.bg} hover:scale-[1.02] transition-transform group`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0`}>
                  <s.icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{s.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                    {s.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-5"
            >
              <h3 className="text-white font-semibold text-xl mb-6">Send a Message</h3>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                {sent ? "Message Sent!" : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
