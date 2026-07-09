"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Download } from "lucide-react";

const timeline = [
  {
    year: "2025 – Present",
    title: "M.Sc. Mechatronics Engineering",
    place: "University of Applied Sciences, Germany",
    icon: GraduationCap,
    description:
      "Specialising in control systems, robotics, and simulation. Focusing on adaptive gimbal-based 3D printing and dynamic system modelling.",
  },
  {
    year: "2020 – 2024",
    title: "B.Tech. Mechanical Engineering",
    place: "JNTU, India",
    icon: GraduationCap,
    description:
      "Core foundation in mechanical design, thermodynamics, manufacturing processes, and engineering analysis.",
  },
  {
    year: "2023",
    title: "Engineering Intern — Production",
    place: "Vizag Steel Plant, India",
    icon: Briefcase,
    description:
      "Worked in the production of rolls used in manufacturing steel rods. Produced detailed technical documentation covering production processes and equipment specifications.",
  },
  {
    year: "2023",
    title: "Engineering Intern — Production",
    place: "ZF Commercial Vehicles, India",
    icon: Briefcase,
    description:
      "Involved in the production line for exhaust valves in commercial vehicles, gaining hands-on experience in manufacturing processes and quality standards.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative bg-background py-28 px-6 lg:px-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">Who I Am</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Photo placeholder */}
            <div className="relative mb-8">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500/30 to-emerald-500/30 border border-white/10 flex items-center justify-center text-6xl font-bold text-white/20 select-none">
                MR
              </div>
              <div className="absolute -bottom-3 -right-3 w-40 h-40 rounded-2xl border border-blue-500/20 -z-10" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">Madana Gopala Reddy Konda</h3>

            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <MapPin size={14} />
              <span>Germany</span>
              <span className="mx-2">·</span>
              <span className="text-green-400 font-medium">Open to Opportunities</span>
            </div>

            <p className="text-white/70 leading-8 text-lg mb-6">
              I'm a Mechatronics Engineer with a passion for bridging mechanical and software
              worlds. My work spans dynamic control systems, precision simulation, and innovative
              robotics — designed to solve real-world engineering challenges.
            </p>

            <p className="text-white/60 leading-8 mb-8">
              With internship experience at Vizag Steel Plant and ZF Commercial Vehicles, I have
              hands-on exposure to real-world manufacturing environments alongside my academic
              foundation in control systems and CAD design.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-white/50 uppercase tracking-widest text-sm">
              Education & Experience
            </h3>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                  <item.icon size={12} className="text-blue-400" />
                </div>
                <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1 block">
                  {item.year}
                </span>
                <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                <p className="text-white/50 text-sm mb-2">{item.place}</p>
                <p className="text-white/60 text-sm leading-6">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
