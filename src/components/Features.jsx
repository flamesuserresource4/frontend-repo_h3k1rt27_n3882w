import { Code2, Zap, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Developer-first',
    desc: 'Composable components, Tailwind styling, and sensible patterns that scale.'
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Vite-powered dev server and optimized builds keep you in flow.'
  },
  {
    icon: Shield,
    title: 'Secure & reliable',
    desc: 'Best practices baked in so you can ship with confidence.'
  },
  {
    icon: Sparkles,
    title: 'Polished UX',
    desc: 'Motion, icons, and accessible primitives for a delightful experience.'
  }
]

function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">A modern stack with pragmatic defaults so you can focus on what matters.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
