"use client";

import {
  FaLink,
  FaBolt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    label: "CONNECT",
    title: "Bring everything together",
    description:
      "Connect your workflows, data, tools and business operations inside one intelligent platform.",
    cta: "Connect your ecosystem",
    icon: FaLink,
    color: "cyan",
  },
  {
    number: "02",
    label: "AUTOMATE",
    title: "Let AI do the heavy work",
    description:
      "Automate repetitive tasks, workflows, follow-ups and operational processes with intelligent AI assistance.",
    cta: "Automate your workflow",
    icon: FaBolt,
    color: "violet",
  },
  {
    number: "03",
    label: "ANALYZE",
    title: "Turn data into decisions",
    description:
      "Understand trends, performance and opportunities through real-time analytics and AI-powered intelligence.",
    cta: "Understand what matters",
    icon: FaChartLine,
    color: "blue",
  },
  {
    number: "04",
    label: "SCALE",
    title: "Grow with confidence",
    description:
      "Use everything your platform learns to improve operations, protect your business and scale faster.",
    cta: "Scale with intelligence",
    icon: FaRocket,
    color: "emerald",
  },
];

const iconStyles = {
  cyan: {
    box: "border-cyan-400/25 bg-cyan-400/[0.06] shadow-[0_0_45px_rgba(34,211,238,0.10)]",
    icon: "text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.75)]",
    label: "text-cyan-400",
    button:
      "border-cyan-400/25 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
  },
  violet: {
    box: "border-violet-400/25 bg-violet-400/[0.06] shadow-[0_0_45px_rgba(139,92,246,0.10)]",
    icon: "text-violet-300 drop-shadow-[0_0_20px_rgba(139,92,246,0.75)]",
    label: "text-violet-400",
    button:
      "border-violet-400/25 hover:border-violet-300/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  blue: {
    box: "border-blue-400/25 bg-blue-400/[0.06] shadow-[0_0_45px_rgba(59,130,246,0.10)]",
    icon: "text-blue-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.75)]",
    label: "text-blue-400",
    button:
      "border-blue-400/25 hover:border-blue-300/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  emerald: {
    box: "border-emerald-400/25 bg-emerald-400/[0.06] shadow-[0_0_45px_rgba(16,185,129,0.10)]",
    icon: "text-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.75)]",
    label: "text-emerald-400",
    button:
      "border-emerald-400/25 hover:border-emerald-300/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
};

export default function HowItWorks() {
  const imageByStep: Record<string, string> = {
    "01": "/images/how-it-works/connect.png",
    "02": "/images/how-it-works/automate.png",
    "03": "/images/how-it-works/analyze.png",
    "04": "/images/how-it-works/scale.png",
  };


  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#02050b] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[140px]" />
        <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
            HOW IT WORKS
          </div>

          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            One intelligent system.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Built to scale with you.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Connect your business, automate the work, understand what matters,
            and scale with AI-powered intelligence.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const styles = iconStyles[step.color as keyof typeof iconStyles];

            return (
              <article
                key={step.number}
                className="group rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-3 transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
              >
                <div className="relative overflow-hidden rounded-[25px] border border-white/[0.07] bg-[#050b15] p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />

                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-xs font-bold text-white backdrop-blur-xl ${styles.box}`}
                    >
                      {step.number}
                    </div>

                    <span className={`text-[11px] font-bold tracking-[0.25em] ${styles.label}`}>
                      {step.label}
                    </span>
                  </div>

                  <div
                    className={`relative mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-[34px] border backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 ${styles.box}`}
                  >
                    <div className="absolute inset-3 rounded-[28px] border border-white/[0.06]" />

                    <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                    <img
                      src={imageByStep[step.number]}
                      alt="Connect"
                      className="relative z-10 h-24 w-24 object-contain drop-shadow-[0_12px_30px_rgba(34,211,238,0.30)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                    />

                    <div className="absolute bottom-3 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-white/10 blur-md" />
                  </div>
                </div>

                <div className="px-3 pb-3 pt-7 text-center">
                  <div className={`mb-3 text-[10px] font-bold uppercase tracking-[0.3em] ${styles.label}`}>
                    {step.number} · {step.label}
                  </div>

                  <h3 className="mx-auto max-w-[280px] text-2xl font-black leading-tight tracking-[-0.035em] text-white">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[300px] text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  <button
                    type="button"
                    className={`mt-7 flex w-full items-center justify-center gap-3 rounded-2xl border bg-white/[0.02] px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 ${styles.button}`}
                  >
                    {step.cta}
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
