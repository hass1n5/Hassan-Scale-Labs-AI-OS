export default function HeroCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl px-6">

      <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-orange-500 text-xl font-bold">
          🤖 AI Assistant
        </h3>

        <p className="text-gray-400 mt-3">
          Manage AI Agents and automate daily business tasks.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-orange-500 text-xl font-bold">
          📊 Analytics
        </h3>

        <p className="text-gray-400 mt-3">
          View sales, traffic, campaigns and business performance.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-orange-500 text-xl font-bold">
          🔐 Cyber Security
        </h3>

        <p className="text-gray-400 mt-3">
          Security monitoring, vulnerability reports and AI protection.
        </p>
      </div>

    </section>
  );
}