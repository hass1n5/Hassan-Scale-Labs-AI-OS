"use client";

import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiZap,
} from "react-icons/fi";

const points = [
  "Connect your business systems",
  "Automate repetitive operations",
  "Turn data into intelligent decisions",
];

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-[#01040a] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-violet-600/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.09] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-cyan-400/[0.025] px-7 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.5)]" />

          <div className="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[80px]" />

          <div className="relative">
            <div className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/[0.05] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              READY TO SCALE
            </div>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] border border-cyan-400/20 bg-cyan-400/[0.06] shadow-[0_0_60px_rgba(34,211,238,0.10)]">
              <FiCpu className="h-9 w-9 text-cyan-300" />
            </div>

            <h2 className="mx-auto mt-9 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Build a smarter business.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Start with Scale Labs.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Connect your systems, automate the work, and give your business
              an intelligent operating layer built for what comes next.
            </p>

            <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 text-left sm:grid sm:grid-cols-3 sm:gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#031018] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.28)] sm:w-auto"
              >
                Start Building
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/[0.10] bg-white/[0.03] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
              >
                <FiZap className="h-4 w-4 text-violet-300" />
                Explore Platform
              </button>
            </div>

            <div className="mt-8 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-600">
              Intelligent infrastructure for the next stage of growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
