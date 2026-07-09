"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Download,
  Play,
  ArrowUpRight,
  Calendar,
  Wrench,
} from "lucide-react";
import ProjectModal, { type Project } from "./ProjectModal";

const projects: Project[] = [
  {
    title: "Adaptive Gimbal-Based 3D Printer",
    shortDescription:
      "Multi-axis gimbal printhead for complex overhangs without support structures.",
    description:
      "Designed and developed a multi-axis gimbal printhead capable of printing complex overhangs without relying heavily on support structures. The project combines CAD design, kinematic analysis, and mechatronic integration. The system enables non-planar printing paths, dramatically reducing material waste and post-processing time.",
    image: "/images/gimbal-printer.webp",
    github: "https://github.com/Madangopal1508/Gimbal-3d-printer-printhead",
    demo: "#",
    reportUrl: "/reports/gimbal-report.pdf",
    videoUrl: "https://drive.google.com/file/d/1F9szNyBwCaylWIZlVJtsxIeGTiz57X7t/preview",
    status: "Completed",
    duration: "Course Project",
    technologies: [
      "Fusion 360",
      "CAD",
      "Mechatronics",
      "3D Printing",
      "Kinematics",
      "C++",
      "Python",
    ],
    highlights: [
      "Developed full kinematic model for 5-axis gimbal printhead motion",
      "Reduced support material usage by up to 60% in test geometries",
      "Validated print quality through dimensional accuracy testing",
      "Produced comprehensive design documentation and technical report",
    ],
  },
  {
    title: "Vehicle Cruise Control",
    shortDescription:
      "Closed-loop PID speed controller validated with Model-in-the-Loop simulations.",
    description:
      "Built a closed-loop vehicle speed controller in MATLAB/Simulink using PID control architecture. Designed and tuned the controller for optimal steady-state error and transient response. Validated controller performance through Model-in-the-Loop (MiL) simulations under varying road gradients, load conditions, and reference speed profiles. Produced a comprehensive technical report documenting methodology and results.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    github: "#",
    demo: "#",
    reportUrl: "#",
    videoUrl: "#",
    status: "Completed",
    duration: "4 Weeks",
    technologies: [
      "MATLAB",
      "Simulink",
      "PID Control",
      "Control Systems",
      "MiL Testing",
      "Signal Processing",
    ],
    highlights: [
      "Designed PID controller achieving <2% steady-state error",
      "Simulated disturbance rejection under varying road conditions",
      "Performed MiL validation across 10+ test scenarios",
      "Compared PID vs. feed-forward control strategies",
      "Produced full technical report with Bode plots and step responses",
    ],
  },
  {
    title: "Rigid Pendulum Simulation",
    shortDescription:
      "Compared Euler, RK4, and ODE45 solvers for a damped pendulum system.",
    description:
      "Implemented and compared multiple numerical integration methods — Euler forward, RK4, and MATLAB's ODE45 — for simulating a damped rigid pendulum. Evaluated each method's numerical stability, convergence rate, computation time, and accuracy against analytical solutions. The study revealed practical trade-offs between solver complexity and computational efficiency for different simulation scenarios.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    github: "https://github.com/Madangopal1508/Inverted-pendulum-robot",
    demo: "#",
    reportUrl: "#",
    videoUrl: "https://drive.google.com/file/d/1-AQinSEC9vRTsz0ZwadgPK9AeiIJrfBz/preview",
    status: "Completed",
    duration: "Course Project",
    technologies: [
      "MATLAB",
      "ODE45",
      "Euler Method",
      "RK4",
      "Numerical Methods",
      "Simulation",
    ],
    highlights: [
      "Implemented Euler, RK4, and ODE45 from scratch in MATLAB",
      "Quantified solver accuracy against analytical reference solutions",
      "Benchmarked computation time across varying step sizes",
      "Demonstrated stability boundaries for explicit Euler integration",
      "Visualised phase portraits and energy dissipation for each solver",
    ],
  },
  {
    title: "Inverted Pendulum Control",
    shortDescription:
      "Nonlinear and state-space control for stabilising an inverted pendulum.",
    description:
      "Implemented and compared multiple control strategies — including nonlinear energy-based swing-up control and LQR state-space stabilisation — for balancing an inverted pendulum on a cart. Investigated controller performance and robustness under external disturbances and parametric uncertainty. The project deepened understanding of nonlinear dynamics, linearisation, and practical controller design.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
    github: "#",
    demo: "#",
    reportUrl: "#",
    videoUrl: "#",
    status: "Completed",
    duration: "Research Project",
    technologies: [
      "MATLAB",
      "Simulink",
      "State-Space",
      "LQR",
      "PID",
      "Nonlinear Control",
      "Robotics",
    ],
    highlights: [
      "Derived full nonlinear equations of motion for cart-pendulum system",
      "Designed energy-based swing-up controller from rest position",
      "Implemented LQR stabilisation with optimal gain tuning",
      "Tested robustness under impulse disturbances of varying magnitudes",
      "Compared transient response of PID vs. LQR in simulation",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative bg-background py-28 px-6 lg:px-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-white/60 text-lg leading-8">
              A collection of engineering, simulation, robotics and mechatronics projects developed
              throughout my Master's journey, focusing on solving real-world engineering challenges.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Status */}
                  <span
                    className={`absolute top-5 right-5 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>

                  {/* Hover overlay — click hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium flex items-center gap-2">
                      <ArrowUpRight size={16} /> View Details
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-6 mb-5">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center gap-5 text-white/50 text-xs mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {project.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Wrench size={13} /> Engineering Project
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    {project.videoUrl !== "#" && (
                      <button
                        onClick={() => { setSelected(project); }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-xs font-medium transition-colors"
                      >
                        <Play size={14} /> Video
                      </button>
                    )}
                    {project.reportUrl !== "#" && (
                      <a
                        href={project.reportUrl}
                        download
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium transition-colors"
                      >
                        <Download size={14} /> Report
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="ml-auto flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-medium transition-colors"
                    >
                      Full details <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
