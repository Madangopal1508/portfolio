"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Download,
  Play,
  Calendar,
  Tag,
  CheckCircle2,
} from "lucide-react";

export type Project = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  reportUrl: string;
  videoUrl: string;
  status: "Completed" | "Ongoing";
  duration: string;
  technologies: string[];
  highlights: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"overview" | "video">("overview");

  useEffect(() => {
    if (project) {
      setTab("overview");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-3 inset-y-3 md:inset-x-8 md:inset-y-6 lg:inset-x-20 lg:inset-y-8 z-[101] flex flex-col rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10 shadow-2xl"
          >

            {/* ── Compact header with image strip ── */}
            <div className="relative shrink-0 h-36 md:h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
              {/* Strong fade so text below is clearly separate */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] from-30% via-[#0f0f0f]/60 to-transparent" />

              {/* Status pill */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  project.status === "Completed"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* ── Project title + meta (always visible, not in scroll area) ── */}
            <div className="px-6 md:px-8 pt-4 pb-4 shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-white/40 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} /> {project.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag size={11} /> {project.technologies.length} technologies
                </span>
              </div>
            </div>

            {/* ── Tab bar ── */}
            <div className="flex items-center gap-2 px-6 md:px-8 pb-3 shrink-0">
              {(["overview", "video"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    tab === t
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/8 border border-white/8"
                  }`}
                >
                  {t === "video" ? "▶  Video" : "Overview"}
                </button>
              ))}

              {/* Quick action links in the tab row — always reachable */}
              <div className="ml-auto flex items-center gap-2">
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 text-xs transition-all">
                    <Github size={12} /> GitHub
                  </a>
                )}
                {project.reportUrl !== "#" && (
                  <a href={project.reportUrl} download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs transition-all">
                    <Download size={12} /> Report
                  </a>
                )}
                {project.videoUrl !== "#" && (
                  <button onClick={() => setTab("video")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 text-xs transition-all">
                    <Play size={12} /> Video
                  </button>
                )}
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-white/6 mx-6 md:mx-8 shrink-0" />

            {/* ── Scrollable content ── */}
            <div className="flex-1 overflow-y-auto">
              {tab === "overview" && (
                <div className="px-6 md:px-8 py-6 space-y-8">

                  {/* DESCRIPTION — most prominent, first thing you see */}
                  <div className="max-w-3xl">
                    <p className="text-white text-base md:text-[17px] leading-[1.9] font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5" />

                  {/* Two-column: Highlights + Tech */}
                  <div className="grid md:grid-cols-2 gap-8">

                    {/* Highlights */}
                    {project.highlights.length > 0 && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-4">
                          Key Highlights
                        </h3>
                        <ul className="space-y-2.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="text-blue-400 mt-[3px] shrink-0" />
                              <span className="text-white/75 text-sm leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Meta info */}
                      <div className="mt-6 space-y-2 text-sm">
                        <div className="flex justify-between text-white/40">
                          <span>Status</span>
                          <span className={project.status === "Completed" ? "text-green-400 font-medium" : "text-yellow-400 font-medium"}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-white/40">
                          <span>Duration</span>
                          <span className="text-white/70">{project.duration}</span>
                        </div>
                        {project.demo !== "#" && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === "video" && (
                <div className="px-6 md:px-8 py-8 flex flex-col items-center gap-4">
                  {project.videoUrl !== "#" ? (
                    <>
                      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-white/10 bg-black aspect-video">
                        <iframe
                          src={project.videoUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} — Video`}
                        />
                      </div>
                      <p className="text-white/25 text-xs">{project.title} · Demo / Presentation</p>
                    </>
                  ) : (
                    <div className="w-full max-w-3xl rounded-xl border border-white/8 bg-white/3 aspect-video flex flex-col items-center justify-center gap-3 text-white/20">
                      <Play size={40} />
                      <p className="text-sm">No video available for this project yet.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
