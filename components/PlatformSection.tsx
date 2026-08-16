"use client";

import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    icon: FiCpu,
    number: "01",
    title: "AI Command Center",
    description:
      "One intelligent layer to monitor, control, and coordinate your entire business.",
    accent: "cyan",
  },
  {
    icon: FiZap,
    number: "02",
    title: "Workflow Automation",
    description:
      "Turn repetitive operations into intelligent workflows that run continuously.",
    accent: "violet",
  },
  {
    icon: FiBarChart2,
    number: "03",
    title: "Business Intelligence",
    description:
      "Transform scattered business data into clear insights and faster decisions.",
    accent: "blue",
  },
  {
    icon: FiActivity,
    number: "04",
    title: "Growth Engine",
    description:
      "Connect marketing, sales, and operations into one system built for scale.",
    accent: "emerald",
  },
];

const accentStyles = {
  cyan: {
    icon: "text-cyan-300",
    glow: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    label: "text-cyan-300",
  },
  violet: {
    icon: "text-violet-300",
    glow: "bg-violet-400/10",
    border: "border-violet-400/20",
    label: "text-violet-300",
  },
  blue: {
    icon: "text-blue-300",
    glow: "bg-blue-400/10",
    border: "border-blue-400/20",
    label: "text-blue-300",
  },
  emerald: {
    icon: "text-emerald-300",
    glow: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    label: "text-emerald-300",
  },
};

export default function PlatformSection() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#02050b] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.045] blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-blue-600/[0.035] blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-violet-600/[0.035] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
            THE AI OPERATING SYSTEM
          </div>

          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            One system.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Every part of your business.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A unified intelligence layer that connects your operations,
            automates the work, understands your data, and creates a system
            designed to scale with you.
          </p>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.012] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  COMMAND CENTER
                </div>
                <div className="mt-2 text-xl font-bold text-white">
                  Business Intelligence
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                SYSTEM ONLINE
              </div>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["84.6%", "Automation"],
                ["+37.8%", "Growth"],
                ["92.4%", "Efficiency"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-black/20 p-5"
                >
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-3xl border border-white/[0.07] bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">
                  Operational Intelligence
                </span>
                <span className="text-[10px] text-cyan-300">LIVE</span>
              </div>

              <div className="mt-7 flex h-44 items-end gap-2">
                {[42, 58, 48, 72, 64, 88, 76, 96, 82, 100, 91, 108].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/20 via-blue-400/50 to-violet-400/80 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                      style={{ height: `${height}px` }}
                    />
                  )
                )}
              </div>

              <div className="mt-4 flex justify-between text-[9px] uppercase tracking-widest text-slate-600">
                <span>MON</span>
                <span>WED</span>
                <span>FRI</span>
                <span>SUN</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              const styles =
                accentStyles[feature.accent as keyof typeof accentStyles];

              return (
                <article
                  key={feature.number}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className={`absolute -right-16 -top-16 h-36 w-36 rounded-full blur-[60px] ${styles.glow}`}
                  />

                  <div className="relative flex items-start gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-black/20 ${styles.border}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${styles.icon} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    <div>
                      <div
                        className={`text-[9px] font-bold uppercase tracking-[0.25em] ${styles.label}`}
                      >
                        {feature.number}
                      </div>

                      <h3 className="mt-2 text-xl font-black tracking-tight text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
