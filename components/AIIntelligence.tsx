"use client";

import { useEffect, useState } from "react";
import {
  FiActivity,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const insights = [
  {
    title: "Revenue Opportunity",
    text: "AI detected a high-value growth opportunity.",
    value: "+24.8%",
    icon: FiTrendingUp,
    tone: "cyan",
  },
  {
    title: "Customer Behavior",
    text: "Purchase activity is trending above normal.",
    value: "+18.2%",
    icon: FiActivity,
    tone: "violet",
  },
  {
    title: "Automation Impact",
    text: "Automated workflows reduced manual workload.",
    value: "1,250h",
    icon: FiZap,
    tone: "emerald",
  },
];

const chartValues = [38, 45, 41, 56, 52, 64, 61, 73, 68, 82, 77, 91];

export default function AIIntelligence() {
  const [activeInsight, setActiveInsight] = useState(0);
  const [scan, setScan] = useState(0);

  useEffect(() => {
    const insightTimer = window.setInterval(() => {
      setActiveInsight((value) => (value + 1) % insights.length);
    }, 2800);

    const scanTimer = window.setInterval(() => {
      setScan((value) => (value + 1) % 100);
    }, 80);

    return () => {
      window.clearInterval(insightTimer);
      window.clearInterval(scanTimer);
    };
  }, []);

  return (
    <section
      id="ai-intelligence"
      className="relative overflow-hidden bg-[#01060d] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.055] blur-[150px]" />
        <div className="absolute right-[8%] bottom-0 h-[460px] w-[460px] rounded-full bg-violet-600/[0.055] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.18) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1540px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-400/[0.05] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-violet-300">
            <FiCpu className="text-violet-300" />
            AI INTELLIGENCE
          </div>

          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Turn your data into
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              intelligent decisions.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Your business data is constantly changing. AI watches the signals,
            finds the patterns, and surfaces the opportunities that matter.
          </p>
        </div>

        {/* Main dashboard */}
        <div className="relative overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#030a13]/95 shadow-[0_0_120px_rgba(34,211,238,0.06)] backdrop-blur-xl">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.45fr_0.9fr] lg:p-10">
            {/* LEFT — AI status */}
            <div className="flex flex-col justify-between rounded-[26px] border border-cyan-400/15 bg-white/[0.018] p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                    AI ENGINE
                  </span>

                  <span className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]" />
                    ONLINE
                  </span>
                </div>

                <div className="relative mx-auto mt-10 flex h-48 w-48 items-center justify-center">
                  <div className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full border border-cyan-400/20 border-dashed" />
                  <div className="absolute inset-5 rounded-full border border-violet-400/20" />
                  <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-xl" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-[#061522] shadow-[0_0_50px_rgba(34,211,238,0.18)]">
                    <FiCpu
                      size={42}
                      className="text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                    />
                  </div>

                  <span className="absolute left-3 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,1)]" />
                  <span className="absolute right-5 top-8 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                  <span className="absolute bottom-5 right-8 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,1)]" />
                </div>

                <div className="mt-8 text-center">
                  <div className="text-2xl font-black text-white">
                    Neural Intelligence
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Continuously analyzing your business
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  ["Data Sources", "24 connected"],
                  ["Signals Processed", "8.4M"],
                  ["AI Confidence", "97.8%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-xs text-slate-500">{label}</span>
                    <span className="text-xs font-bold text-slate-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER — Analytics */}
            <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.018] p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                    BUSINESS INTELLIGENCE
                  </div>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Performance Overview
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] px-3 py-2 text-xs text-slate-400">
                  <FiDatabase className="text-cyan-300" />
                  Live Data
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["Revenue", "$284K", "+24.8%"],
                  ["Customers", "12.8K", "+18.2%"],
                  ["Conversions", "8.42%", "+11.6%"],
                  ["Efficiency", "94.7%", "+9.4%"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {label}
                    </div>
                    <div className="mt-2 text-xl font-black text-white">
                      {value}
                    </div>
                    <div className="mt-1 text-[10px] font-bold text-emerald-400">
                      ↑ {change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">
                      Growth Intelligence
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      AI forecast vs actual performance
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      Actual
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                      AI Forecast
                    </span>
                  </div>
                </div>

                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4, 5].map((line) => (
                      <div
                        key={line}
                        className="h-px w-full bg-white/[0.045]"
                      />
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 top-4 flex items-end gap-2">
                    {chartValues.map((value, index) => (
                      <div
                        key={index}
                        className="relative flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-cyan-500/10 to-cyan-400/50 transition-all duration-700"
                          style={{
                            height: `${value}%`,
                            animation: `barRise 1.2s ease-out ${
                              index * 0.05
                            }s both`,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-violet-500 opacity-60" />
                </div>

                <div className="mt-3 flex justify-between text-[9px] uppercase tracking-widest text-slate-700">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                  <span>SEP</span>
                  <span>NOV</span>
                </div>
              </div>

              {/* AI scan */}
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-violet-400/15 bg-violet-400/[0.035] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 text-violet-300">
                  <FiCpu />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-white">
                      AI Analysis in progress
                    </span>
                    <span className="text-[10px] font-bold text-violet-300">
                      {scan}%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-75"
                      style={{ width: `${scan}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Insights */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-300">
                    AI INSIGHTS
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    What your AI sees
                  </div>
                </div>

                <FiBarChart2 className="text-slate-600" />
              </div>

              {insights.map((item, index) => {
                const Icon = item.icon;
                const active = activeInsight === index;

                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-5 transition-all duration-700 ${
                      active
                        ? "border-cyan-400/30 bg-cyan-400/[0.045] shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                        : "border-white/[0.07] bg-white/[0.018]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          item.tone === "cyan"
                            ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-300"
                            : item.tone === "violet"
                              ? "border-violet-400/30 bg-violet-400/[0.06] text-violet-300"
                              : "border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-300"
                        }`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-sm font-bold text-white">
                            {item.title}
                          </h4>
                          <FiArrowUpRight className="text-slate-600" />
                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xl font-black text-white">
                            {item.value}
                          </span>

                          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                            <FiArrowUpRight />
                            AI DETECTED
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-auto rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-emerald-300" />
                  <span className="text-sm font-bold text-white">
                    All systems analyzed
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  AI has reviewed your latest business signals and found{" "}
                  <span className="font-bold text-emerald-400">14</span> new
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="mx-5 mb-5 flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 sm:mx-7 sm:mb-7 sm:flex-row sm:items-center sm:justify-between lg:mx-10 lg:mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 text-cyan-300">
                <FiActivity size={16} />
              </div>
              <span className="text-xs text-slate-500">
                Intelligence engine continuously monitoring your business
              </span>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
              24 DATA SOURCES CONNECTED
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes barRise {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            transform-origin: bottom;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
