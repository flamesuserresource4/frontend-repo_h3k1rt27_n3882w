import { Rocket, Star, Settings } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white grid place-items-center shadow">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-800">Vibe Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium shadow-sm hover:bg-slate-50">
            <Star size={16} />
            Star
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">
            <Settings size={16} />
            Dashboard
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
