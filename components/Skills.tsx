"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "CAD & Design",
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    skills: ["Fusion 360", "SolidWorks", "AutoCAD", "GD&T", "FEA"],
  },
  {
    title: "Control Systems",
    color: "from-emerald-500 to-teal-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    skills: ["PID Control", "State-Space", "LQR", "MPC", "Nonlinear Control"],
  },
  {
    title: "Simulation & Modelling",
    color: "from-purple-500 to-violet-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    skills: ["MATLAB", "Simulink", "ODE45", "MiL / SiL", "Numerical Methods"],
  },
  {
    title: "Programming",
    color: "from-orange-500 to-amber-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    skills: ["Python", "C / C++", "MATLAB Scripting", "ROS", "Git"],
  },
  {
    title: "Robotics & Mechatronics",
    color: "from-pink-500 to-rose-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    skills: ["Kinematics", "Sensor Fusion", "Embedded Systems", "Arduino", "Gimbal Systems"],
  },
  {
    title: "Manufacturing",
    color: "from-yellow-500 to-lime-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
    skills: ["3D Printing", "CNC Machining", "Sheet Metal", "Prototyping", "GD&T"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-background py-28 px-6 lg:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-3">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Skills & Tools</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg leading-8">
            A toolkit built across years of engineering coursework, research projects, and hands-on
            development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl border ${cat.border} ${cat.bg} p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className={`text-xs font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {["Problem Solving", "Technical Documentation", "Research", "Cross-functional Collaboration", "Agile / Scrum", "German (B2)", "English (Fluent)"].map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-colors"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
