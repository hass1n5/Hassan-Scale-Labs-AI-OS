"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"platform" | "solutions" | null>(
    null
  );

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu: "platform" | "solutions") => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-28px)] max-w-[1540px] -translate-x-1/2">
      <nav
        ref={navRef}
        className="relative flex h-[72px] items-center justify-between rounded-[20px] border border-white/[0.10] bg-[#070a10]/85 px-5 shadow-[0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        {/* LOGO */}
        <a href="/" className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[13px] border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-orange-500/15 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
            <span className="relative z-10 font-[family-name:var(--font-heading)] text-xl font-bold text-white">
              H
            </span>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          <div className="hidden min-[900px]:block">
            <div className="whitespace-nowrap font-[family-name:var(--font-heading)] text-[17px] font-semibold tracking-[-0.02em] text-white">
              Hassan Scale Labs
            </div>

            <div className="mt-[2px] whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.30em] text-orange-400">
              Build • Grow • Scale
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-0.5 xl:flex">

          {/* HOME */}
          <a
            href="/"
            className="whitespace-nowrap rounded-xl bg-white/[0.065] px-4 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-medium text-white transition-all duration-300 hover:bg-white/[0.10] hover:text-cyan-300"
          >
            Home
          </a>

          {/* PLATFORM BUTTON */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("platform")}
              aria-expanded={openMenu === "platform"}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-medium transition-all duration-300 ${
                openMenu === "platform"
                  ? "bg-cyan-400/[0.10] text-cyan-300"
                  : "text-white/75 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              Platform

              <span
                className={`text-[10px] transition-transform duration-300 ${
                  openMenu === "platform" ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* PLATFORM DROPDOWN */}
            {openMenu === "platform" && (
              <div className="absolute left-1/2 top-full mt-3 w-[650px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#090d16]/[0.98] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.75)] backdrop-blur-2xl">

                <div className="mb-4 flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div>
                    <p className="font-[family-name:var(--font-nav)] text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                      AI Operating System
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Intelligent infrastructure for modern businesses
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-[9px] text-cyan-300">
                    Powered by AI
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    ["AI Assistant", "Smart AI conversations", "🤖"],
                    ["Analytics", "Real-time insights", "📊"],
                    ["CRM", "Manage relationships", "👥"],
                    ["Automation", "Workflows & tasks", "⚡"],
                    ["Cyber Security", "Protect your business", "🛡️"],
                    ["Projects", "Track everything", "📁"],
                  ].map(([title, description, icon]) => (
                    <a
                      key={title}
                      href="#"
                      onClick={() => setOpenMenu(null)}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05]"
                    >
                      <div className="mb-3 text-lg">{icon}</div>

                      <div className="whitespace-nowrap font-[family-name:var(--font-nav)] text-[14px] font-semibold text-white">
                        {title}
                      </div>

                      <div className="mt-1 text-[10px] leading-4 text-white/40">
                        {description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS BUTTON */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("solutions")}
              aria-expanded={openMenu === "solutions"}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-medium transition-all duration-300 ${
                openMenu === "solutions"
                  ? "bg-cyan-400/[0.10] text-cyan-300"
                  : "text-white/75 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              Solutions

              <span
                className={`text-[10px] transition-transform duration-300 ${
                  openMenu === "solutions" ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* SOLUTIONS DROPDOWN */}
            {openMenu === "solutions" && (
              <div className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#090d16]/[0.98] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.75)] backdrop-blur-2xl">

                {[
                  ["AI Automation", "Automate repetitive work"],
                  ["Business Intelligence", "Turn data into decisions"],
                  ["Cyber Security", "Secure your digital world"],
                  ["Digital Growth", "Scale your online presence"],
                ].map(([title, description]) => (
                  <a
                    key={title}
                    href="#"
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-xl p-3 transition-all duration-200 hover:bg-white/[0.06]"
                  >
                    <div className="font-[family-name:var(--font-nav)] text-[14px] font-semibold text-white">
                      {title}
                    </div>

                    <div className="mt-1 text-xs text-white/40">
                      {description}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* NORMAL LINKS */}
          {[
            ["Services", "#services"],
            ["AI Tools", "#ai-tools"],
            ["Pricing", "#pricing"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-xl px-4 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-medium text-white/70 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-2">

          {/* SEARCH */}
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-white/60 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300 xl:flex"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>

          {/* LOGIN */}
          <a
            href="#login"
            className="hidden rounded-xl border border-white/10 px-4 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white lg:block"
          >
            Login
          </a>

          {/* GET STARTED */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-5 py-2.5 font-[family-name:var(--font-nav)] text-[14px] font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(59,130,246,0.40)]"
          >
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* MOBILE */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
