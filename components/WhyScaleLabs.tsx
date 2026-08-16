"use client";

import {
  FiArrowUpRight,
  FiCheckCircle,
  FiLayers,
  FiLock,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    number: "01",
    icon: FiZap,
    title: "Built for action",
    description:
      "AI does more than surface information. It turns signals into workflows, decisions, and measurable actions.",
    accent: "cyan",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "One connected system",
    description:
      "Bring operations, automation, intelligence, and growth together instead of managing disconnected tools.",
    accent: "violet",
  },
  {
    number: "03",
    icon: FiTrendingUp,
    title: "Designed to scale",
    description:
      "Start with what matters today and expand your AI operating system as your business grows.",
    accent: "blue",
  },
  {
    number: "04",
    icon: FiLock,
    title: "Intelligence you control",
    description:
      "Keep your business logic, workflows, and insights inside a system designed around your organization.",
    accent: "emerald",
  },
];

const accentStyles = {
  cyan: {
    icon: "text-cyan-300",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400/10",
    label: "text-cyan-300",
  },
  violet: {
    icon: "text-violet-300",
    border: "border-violet-400/20",
    glow: "bg-violet-400/10",
    label: "text-violet-300",
  },
  blue: {
    icon: "text-blue-300",
    border: "border-blue-400/20",
    glow: "bg-blue-400/10",
    label: "text-blue-300",
  },
  emerald: {
    icon: "text-emerald-300",
    border: "border-emerald-400/20",
    glow: "bg-emerald-400/10",
    label: "text-emerald-300",
  },
};

export default function WhyScaleLabs() {
  return (
    <section
      id="why-scale-labs"
      className="relative overflow-hidden bg-[#01050b] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.045] blur-[150px]" />
        <div className="absolute right-[8%] bottom-10 h-[450px] w-[450px] rounded-full bg-violet-600/[0.045] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.2) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-400/[0.05] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.9)]" />
              WHY SCALE LABS
            </div>

            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl">
              AI that works
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                around your business.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:justify-self-end">
            Scale Labs is built to become the intelligence layer behind your
            business — connecting the systems you already use and turning
            complexity into momentum.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const styles =
              accentStyles[benefit.accent as keyof typeof accentStyles];

            return (
              <article
                key={benefit.number}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.012] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:p-8"
              >
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] ${styles.glow}`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-black/20 ${styles.border}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${styles.icon} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                      />
                    </div>

                    <span
                      className={`text-[10px] font-black tracking-[0.25em] ${styles.label}`}
                    >
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-black tracking-tight text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {benefit.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors group-hover:text-slate-400">
                    <FiCheckCircle className={styles.icon} />
                    Built into the system
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[32px] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.035] to-violet-500/[0.05] p-7 sm:p-9">
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                THE SCALE LABS ADVANTAGE
              </div>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Less complexity. More intelligent growth.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                One operating layer that keeps learning, adapting, and moving
                your business forward.
              </p>
            </div>

            <button
              type="button"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.07] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            >
              Explore the system
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
