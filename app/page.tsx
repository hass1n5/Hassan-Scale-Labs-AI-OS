import Navbar from "@/components/Navbar";
import HeroCards from "@/components/HeroCards";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-[#0B0B0B] to-black text-white flex flex-col items-center justify-center px-6 py-24">

        {/* Hero Section */}

        <h1 className="text-7xl md:text-8xl font-black tracking-tight text-orange-500 text-center drop-shadow-lg">
          Hassan Scale Labs
        </h1>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold text-center leading-tight max-w-5xl">
          Empowering Businesses
          <br />
          <span className="text-white">
            with AI Innovation
          </span>
        </h2>

        <p className="mt-8 max-w-4xl text-center text-xl leading-9 text-gray-400">
          Transform your business with intelligent automation,
          AI-powered CRM, advanced cybersecurity, digital marketing,
          real-time analytics, and scalable business solutions.
          <br />
          Everything you need to build, automate, and scale—
          all in one powerful AI Operating System.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <button className="rounded-xl bg-orange-500 px-10 py-4 text-lg font-bold transition duration-300 hover:bg-orange-600 shadow-lg shadow-orange-500/30">
            🚀 Get Started
          </button>

          <button className="rounded-xl border border-orange-500 px-10 py-4 text-lg font-bold transition duration-300 hover:bg-orange-500 hover:text-black">
            📅 Book a Demo
          </button>

        </div>

        {/* Feature Cards */}

        <HeroCards />

      </main>
    </>
  );
}