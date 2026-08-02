export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-zinc-900 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-orange-500">
        Hassan Scale Labs
      </h1>

      <div className="flex gap-6 text-white">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">AI Tools</a>
        <a href="#">Dashboard</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}