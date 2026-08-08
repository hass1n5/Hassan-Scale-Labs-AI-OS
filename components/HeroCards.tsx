export default function HeroCards() {
  return (
    <section className="relative z-10 mt-16 w-full max-w-7xl px-4">
      <div className="grid gap-5 md:grid-cols-3">

        {/* AI ASSISTANT */}
        <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#080d16]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_80px_rgba(0,200,255,0.15)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-2xl">
                ✦
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                ONLINE
              </span>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              AI Intelligence
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              AI Assistant
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Intelligent AI agents that automate repetitive business
              operations and assist your team 24/7.
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-slate-500">
                24 AI Agents Active
              </span>

              <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>

        {/* ANALYTICS */}
        <div className="group relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#080d16]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-[0_20px_80px_rgba(120,70,255,0.15)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-400/20" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-400/10 text-2xl">
                ◈
              </div>

              <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                LIVE
              </span>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Business Intelligence
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Advanced Analytics
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Real-time business intelligence, revenue insights and
              performance analytics in one powerful workspace.
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-slate-500">
                Real-time Insights
              </span>

              <span className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>

        {/* CYBER SECURITY */}
        <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#080d16]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_20px_80px_rgba(0,220,160,0.12)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/20" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-2xl">
                ◇
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                PROTECTED
              </span>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Enterprise Security
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-white">
              Cyber Security
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              AI-powered monitoring, threat detection and security
              intelligence designed to protect your business.
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-slate-500">
                Security Score 98%
              </span>

              <span className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
