"use client";

import React from 'react';

export default function Home() {
  const skills = {
    production: ["JavaScript", "Python", "Java", "MySQL", "MongoDB", "Linux (Ubuntu/Arch)", "Git"],
    learning: ["Next.js", "React", "Node.js", "Express", "Django", "Tailwind CSS"]
  };

  const activities = [
    {
      date: "Phase Alpha",
      title: "Core Infrastructure & Branding",
      description: "Developed this high-performance Next.js engine. Engineered a custom design system using Tailwind CSS and optimized for Vercel edge deployment.",
      status: "Operational",
      tags: ["Next.js", "Vercel", "Tailwind"]
    },
    {
      date: "Phase Beta",
      title: "CMS & Server Orchestration",
      description: "Executed full-scale WordPress migrations. Managed CPanel environments, FTP synchronization, and complex relational database architecture.",
      status: "Active",
      tags: ["CPanel", "MySQL", "Architecture"]
    },
    {
      date: "Phase Gamma",
      title: "Advanced System Logic",
      description: "Developing custom CRUD applications and integrating RESTful APIs for scalable data management solutions.",
      status: "In Development",
      tags: ["Full-Stack", "API", "Logic"]
    }
  ];

  const projects = [
    {
      title: "Whisper Wire",
      type: "MERN Stack Application",
      description: "A paywall-centric news portal engineered to deliver exclusive articles and premium media with secure user authentication and content access.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://whisper-wire-mu.vercel.app"
    },
    {
      title: "Life Link",
      type: "Development Project",
      description: "A digital platform focused on streamlining connectivity and structured data handling. Currently in active development.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      link: "https://github.com/noellouis/life-link"
    },
    {
      title: "Arivi Group",
      type: "Collaborative Project",
      description: "A collaborative web application aimed at building a scalable, functional digital solution for robust user experiences.",
      tech: ["Next.js", "React", "JavaScript"],
      link: "https://github.com/noellouis/arivigroup"
    },
    {
      title: "Blood Donor Management",
      type: "Full-Stack Project",
      description: "A complete CRUD application for managing donor data efficiently, architected with secure backend logic.",
      tech: ["React", "Django", "MySQL"],
      link: "#"
    }
  ];

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">

      {/* --- MISSION CONTROL (NAVBAR) --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xl">N</div>
            <span className="font-bold tracking-tight text-white">NOEL'S_EXPLORER_LOG</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('toolbox')} className="text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-widest text-[10px]">Toolbox</button>
            <button onClick={() => scrollToSection('logs')} className="text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-widest text-[10px]">Expeditions</button>
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-800 pl-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-mono">Status: Online</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden text-center space-y-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.15),rgba(15,23,42,0))]" />

        {/* PROFILE IMAGE SLOT */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full border-4 border-slate-900 bg-slate-900 overflow-hidden shadow-2xl">
            <img
              src="/me.jpg"
              alt="Explorer Noel"
              className="h-full w-full object-cover object-[center_15%] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-[1.3] group-hover:scale-[1.35]"
            />
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-sky-500 text-slate-950 text-[10px] font-bold px-4 py-1.5 rounded-full border-2 border-slate-950 uppercase tracking-widest shadow-lg">
            Noel
          </div>
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Navigating the Stack, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              One Layer at a Time.
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('logs')} className="px-8 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 active:translate-y-0">
              Access Expedition Logs
            </button>
            <button onClick={() => scrollToSection('toolbox')} className="px-8 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-medium rounded-full transition-all hover:bg-slate-800">
              Technical Toolbox
            </button>
          </div>
        </div>
        {/* --- CONSOLIDATED CONTENT SECTION --- */}
        <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-sm md:text-base leading-relaxed bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
          <p>
            Welcome to my Digital Canvas, where I paint my ideas and blend innovation with imagination.
            A space where I launch my curiosity into the world of applications — transforming concepts into experiences.
          </p>
          <p>
            As a BCA student driven by a passion for building practical, real-world solutions, I work as a
            full-stack developer crafting responsive web applications with React, Python (Django), and SQL.
            My approach emphasizes clean architecture, scalability, and meaningful user experiences.
          </p>
          <p>
            Beyond development, I have a strong interest in systems and networking. As a Linux power user,
            I’ve configured Ubuntu home servers, customized Arch Linux on Mac hardware, and gained hands-on
            experience in server administration. From managing user permissions to implementing secure
            remote access solutions with Tailscale, I enjoy understanding technology from the inside out
            — and I’m always eager to explore more.
          </p>
          <p>Outside the world of coding, you’ll often find me on the badminton court, lost in a book, or listening to music.

            For me, technology is not just about writing code; it’s about creating solutions that truly matter. And this is only the beginning of my journey in this ever-evolving world. Learning never stops — and neither do I.</p>
          <p className="pt-2 border-t border-slate-800/50 text-slate-400 italic">
            Among my key projects is a Blood Donation Management System, architected to efficiently connect
            donors and recipients through structured data handling and robust backend logic.
            Alongside this, my home lab experiments reflect my hands-on, self-driven approach to learning
            — optimizing hardware, troubleshooting complex network issues, and engineering reliable systems
            from scratch.
          </p>
        </div>
        {/* --- END CONTENT SECTION --- */}

      </section>

      {/* --- SKILLS SECTION (Toolbox) --- */}
      <section id="toolbox" className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 border-t border-slate-900 scroll-mt-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-sky-500 rounded-full" />
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Production Ready</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.production.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-mono text-sm hover:border-sky-500 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-amber-500 rounded-full" />
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Learning Path</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.learning.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-mono text-sm border-dashed border-amber-500/30 hover:border-amber-500 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTIVITY LOG SECTION --- */}
      <section id="logs" className="max-w-4xl mx-auto py-24 px-6 border-t border-slate-900 scroll-mt-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight text-sm">Expedition Logs</h2>
          <div className="h-px flex-1 bg-slate-900"></div>
        </div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div key={index} className="relative pl-8 group">
              <div className="absolute left-0 top-0 h-full w-px bg-slate-800 group-last:h-0"></div>
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">{activity.date}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${activity.status === 'Operational' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' :
                      activity.status === 'Active' ? 'border-sky-500/30 text-sky-400 bg-sky-500/5' :
                        'border-slate-700 text-slate-500'
                    }`}>
                    {activity.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">{activity.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{activity.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {activity.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-400">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS / DISCOVERIES --- */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6 border-t border-slate-900 scroll-mt-20">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Discoveries</h2>
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Selected Works & Deployments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]">
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-t-2 border-r-2 border-sky-500 rounded-tr-sm"></div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-sky-500 uppercase tracking-tighter bg-sky-500/10 px-2 py-1 rounded">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] text-slate-500 font-mono">{t}</span>
                  ))}
                </div>

                <div className="pt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all">
                    PROJECT_VIEW <span className="text-sky-500">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REFRESHED FOOTER --- */}
      <footer className="w-full bg-slate-950 border-t border-slate-900 mt-24">
        <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">

          {/* Terminal Contact Form */}
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-sky-500/10 rounded-full blur-3xl opacity-50"></div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-bold text-sky-400">
                ?
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Establish Contact</h3>
              <p className="text-xs font-mono text-slate-500 hidden sm:block">:: SYSTEM_INQUIRY_REQUEST</p>
            </div>

            <form action="https://formspree.io/f/mlgwzorp" method="POST" className="space-y-3 font-mono text-sm">
              <input
                name="name"
                type="text"
                placeholder="EXPLORER_ID // Name"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 text-sky-400 placeholder-slate-600 transition-all outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="COMMUNICATOR_CH// Email"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 text-sky-400 placeholder-slate-600 transition-all outline-none"
              />

              <textarea
                name="message"
                placeholder="BRIEFING_LOG // Your Message"
                rows={3}
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 text-sky-400 placeholder-slate-600 transition-all outline-none resize-none"
              />

              <input type="hidden" name="_subject" value="New message from Explorer site" />

              <div className="pt-4">
                <button type="submit" className="w-full sm:w-auto px-10 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  SEND_SIGNAL
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between py-6">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white tracking-tight">Explorer Noel</h4>
              <p className="text-slate-500 text-sm max-w-md mx-auto md:mx-0">
                Specialized in infrastructure migration, WordPress architecture, and custom system logic.
                Bridging the gap between complex backend requirements and intuitive frontend experiences.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-12 md:pt-0">
              <div className="h-px bg-slate-900 w-full md:w-3/4"></div>
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <a href="https://github.com/noellouis" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px]">GitHub_Repository</a>
                <a href="#" className="text-slate-600 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px]">LinkedIn_Network</a>
                <a href="#" className="text-slate-600 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px]">Curriculum_Vitae</a>
              </div>
              <div className="text-[10px] font-mono text-slate-700 tracking-[0.2em] pt-4 uppercase">
                © 2026 Explorer Noel // System Architecture Ready
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}