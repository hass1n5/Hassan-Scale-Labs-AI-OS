"use client";

import { useEffect, useState } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiClock,
  FiCpu,
  FiMail,
  FiShield,
  FiStar,
  FiUser,
  FiZap,
} from "react-icons/fi";

const workflowSteps = [
  {
    title: "Lead Received",
    description: "New lead enters the system",
    icon: FiUser,
    tone: "cyan",
  },
  {
    title: "AI Analyzes",
    description: "AI scores and analyzes the lead",
    icon: FiCpu,
    tone: "violet",
  },
  {
    title: "Automation Runs",
    description: "Tasks and actions are triggered",
    icon: FiZap,
    tone: "cyan",
  },
  {
    title: "Customer Updated",
    description: "Customer is notified & updated",
    icon: FiMail,
    tone: "violet",
  },
  {
    title: "Completed",
    description: "Workflow completed successfully",
    icon: FiCheck,
    tone: "green",
  },
];

const metrics = [
  {
    value: "2.5M+",
    label: "Tasks Automated",
    change: "32.1%",
    icon: FiCpu,
    tone: "cyan",
    bars: [28, 38, 34, 50, 45, 62, 58, 78],
  },
  {
    value: "84.6%",
    label: "Automation Rate",
    change: "18.7%",
    icon: FiZap,
    tone: "violet",
    bars: [30, 40, 35, 48, 55, 51, 67, 78],
  },
  {
    value: "1,250h",
    label: "Time Saved",
    change: "28.9%",
    icon: FiClock,
    tone: "green",
    bars: [25, 35, 32, 46, 55, 48, 68, 80],
  },
  {
    value: "99.9%",
    label: "System Uptime",
    change: "0.3%",
    icon: FiShield,
    tone: "cyan",
    bars: [58, 48, 55, 45, 52, 42, 48, 62],
  },
];

const toneClasses = {
  cyan: {
    border: "border-cyan-400/25",
    icon: "border-cyan-400/40 bg-cyan-400/[0.07] text-cyan-300",
    glow: "shadow-[0_0_35px_rgba(34,211,238,0.12)]",
    line: "from-cyan-400",
  },
  violet: {
    border: "border-violet-400/25",
    icon: "border-violet-400/40 bg-violet-400/[0.07] text-violet-300",
    glow: "shadow-[0_0_35px_rgba(139,92,246,0.12)]",
    line: "from-violet-400",
  },
  green: {
    border: "border-emerald-400/25",
    icon: "border-emerald-400/40 bg-emerald-400/[0.07] text-emerald-300",
    glow: "shadow-[0_0_35px_rgba(16,185,129,0.12)]",
    line: "from-emerald-400",
  },
} as const;

function MiniChart({ bars }: { bars: number[] }) {
  return (
    <div className="flex h-14 w-28 items-end gap-1.5">
      {bars.map((height, index) => (
        <span
          key={index}
          className="w-2 rounded-full bg-gradient-to-t from-cyan-500/40 via-blue-400 to-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
          style={{
            height: `${height}%`,
            animation: `chartPulse 2.8s ease-in-out ${index * 0.12}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export default function WorkflowAutomation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="workflow-automation"
      className="relative overflow-hidden bg-[#01060d] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute right-[8%] top-1/3 h-96 w-96 rounded-full bg-violet-600/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.15) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1540px]">
        <div className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-[#030b15]/90 shadow-[0_0_100px_rgba(0,100,180,0.08)] backdrop-blur-xl">
          {/* Top circuit decoration */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:gap-10 lg:p-12 xl:p-14">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/[0.08] text-violet-300 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                  <FiZap size={19} />
                </div>

                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-300">
                  Workflow Automation
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl xl:text-[58px]">
                Turn operations into{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  intelligent workflows.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Automate repetitive tasks, eliminate manual work, and keep
                your business running 24/7 with intelligent workflows that
                adapt and scale with you.
              </p>

              <div className="my-8 h-px w-full bg-gradient-to-r from-cyan-400/80 via-blue-500/20 to-transparent" />

              <div className="space-y-6">
                {[
                  {
                    icon: FiStar,
                    title: "Smart Automation",
                    text: "AI identifies patterns and automates repetitive tasks with precision.",
                    tone: "violet",
                  },
                  {
                    icon: FiBarChart2,
                    title: "Seamless Execution",
                    text: "Workflows run in the background, ensuring nothing falls through the cracks.",
                    tone: "cyan",
                  },
                  {
                    icon: FiShield,
                    title: "Reliable & Secure",
                    text: "Enterprise-grade security with real-time monitoring and error handling.",
                    tone: "violet",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="group flex gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                          item.tone === "cyan"
                            ? "border-cyan-400/40 bg-cyan-400/[0.05] text-cyan-300"
                            : "border-violet-400/40 bg-violet-400/[0.05] text-violet-300"
                        } transition-transform duration-300 group-hover:-translate-y-1`}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 font-bold text-white shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                Explore Workflow Automation
                <FiArrowRight />
              </button>
            </div>

            {/* CENTER WORKFLOW */}
            <div className="relative flex items-center justify-center py-6 lg:py-10">
              <div className="absolute left-1/2 top-5 h-[calc(100%-40px)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/10 via-cyan-400/60 to-emerald-400/20" />

              <div className="relative w-full max-w-[500px] space-y-5">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  const tone = toneClasses[step.tone as keyof typeof toneClasses];
                  const active = activeStep === index;

                  return (
                    <div key={step.title} className="relative">
                      {index > 0 && (
                        <div
                          className={`absolute -top-5 left-1/2 z-20 h-5 w-px -translate-x-1/2 ${
                            active || activeStep > index - 1
                              ? "bg-cyan-400"
                              : "bg-slate-700"
                          }`}
                        />
                      )}

                      <div
                        className={`relative z-10 flex items-center gap-4 rounded-2xl border bg-[#06111d]/95 p-4 backdrop-blur-xl transition-all duration-700 ${
                          tone.border
                        } ${
                          active
                            ? `${tone.glow} -translate-y-1 scale-[1.02]`
                            : "shadow-none"
                        }`}
                      >
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${tone.icon}`}
                        >
                          <Icon size={24} />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-bold text-white">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">
                            {step.description}
                          </p>
                        </div>

                        <span
                          className={`ml-auto h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                            active
                              ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]"
                              : "bg-slate-700"
                          }`}
                        />
                      </div>

                      {index < workflowSteps.length - 1 && (
                        <div className="relative z-20 mx-auto -my-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/50 bg-[#06111d] text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                          <span className="animate-pulse">↓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT METRICS */}
            <div className="flex flex-col justify-center gap-4">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                const tone =
                  toneClasses[metric.tone as keyof typeof toneClasses];

                return (
                  <div
                    key={metric.label}
                    className={`group rounded-2xl border ${tone.border} bg-[#06101a]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${tone.glow}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${tone.icon}`}
                      >
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-3xl font-black tracking-tight text-white">
                          {metric.value}
                        </div>

                        <div className="mt-1 text-sm font-medium text-slate-400">
                          {metric.label}
                        </div>

                        <div className="mt-1 text-xs font-bold text-emerald-400">
                          ↑ {metric.change}{" "}
                          <span className="font-normal text-slate-600">
                            vs last month
                          </span>
                        </div>
                      </div>

                      <MiniChart bars={metric.bars} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FOOTER BAR */}
          <div className="mx-6 mb-6 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 sm:mx-8 sm:mb-8 sm:flex-row sm:items-center sm:justify-between lg:mx-12 lg:mb-12">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/[0.05] text-cyan-300">
                <FiActivity />
              </div>

              <div>
                <div className="font-bold text-white">
                  Intelligent. Automated. Always Working.
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Focus on growth while AI handles the rest.
                </div>
              </div>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              System Online
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes chartPulse {
          from {
            transform: scaleY(0.72);
            opacity: 0.65;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
