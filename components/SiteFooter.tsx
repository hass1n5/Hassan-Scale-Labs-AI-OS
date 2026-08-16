"use client";

import {
  FiArrowUpRight,
  FiCpu,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

const productLinks = [
  ["AI Intelligence", "#ai-intelligence"],
  ["Workflow Automation", "#workflow-automation"],
  ["Platform", "#platform"],
  ["How It Works", "#how-it-works"],
];

const companyLinks = [
  ["Why Scale Labs", "#why-scale-labs"],
  ["Get Started", "#get-started"],
  ["Contact", "mailto:hello@scalelabs.ai"],
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#010309]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-[320px] w-[320px] rounded-full bg-cyan-500/[0.045] blur-[130px]" />
        <div className="absolute right-[5%] bottom-0 h-[360px] w-[360px] rounded-full bg-violet-600/[0.045] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1540px] px-5 sm:px-6 lg:px-10">
        {/* Top brand area */}
        <div className="grid gap-12 border-b border-white/[0.07] py-16 lg:grid-cols-[1.4fr_0.6fr] lg:py-20">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06]">
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl" />
                <FiCpu className="relative h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <div className="text-lg font-black tracking-tight text-white">
                  SCALE<span className="text-cyan-300">LABS</span>
                </div>
                <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.3em] text-slate-600">
                  AI Operating System
                </div>
              </div>
            </div>

            <h2 className="mt-8 max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
              Build the intelligence layer
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                behind your next stage of growth.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Scale Labs connects intelligence, automation, and business
              systems into one operating layer designed to keep your company
              moving.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#021017] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
              >
                Start Building
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="mailto:hello@scalelabs.ai"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.025] px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FiMail className="text-cyan-300" />
                Talk to us
              </a>
            </div>
          </div>

          {/* Live system card */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

            <div className="relative flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
                SYSTEM STATUS
              </span>

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Online
              </span>
            </div>

            <div className="relative mt-8 flex justify-center py-5">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <div className="absolute inset-0 animate-pulse rounded-full border border-cyan-400/10" />
                <div className="absolute inset-3 rounded-full border border-cyan-400/15" />
                <div className="absolute inset-7 rounded-full bg-cyan-400/[0.08] shadow-[0_0_60px_rgba(34,211,238,0.18)]" />
                <FiCpu className="relative h-8 w-8 text-cyan-300" />
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <div className="text-xl font-black text-white">24/7</div>
                <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-slate-600">
                  Intelligence
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <div className="text-xl font-black text-white">AI</div>
                <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-slate-600">
                  Powered
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid gap-10 border-b border-white/[0.07] py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr]">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em] text-cyan-300">
              SCALE LABS
            </div>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-600">
              Intelligent infrastructure for businesses ready to operate at a
              higher level.
            </p>
          </div>

          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
              PLATFORM
            </div>

            <div className="mt-5 space-y-3">
              {productLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-xs text-slate-600 transition-colors hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
              COMPANY
            </div>

            <div className="mt-5 space-y-3">
              {companyLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-xs text-slate-600 transition-colors hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
              CONNECT
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FiGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FiLinkedin />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700">
            © 2026 Scale Labs. Intelligent systems. Built to scale.
          </div>

          <div className="flex items-center gap-5 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-700">
            <a href="#" className="transition-colors hover:text-slate-400">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-slate-400">
              Terms
            </a>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="flex items-center gap-2 text-emerald-400/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
