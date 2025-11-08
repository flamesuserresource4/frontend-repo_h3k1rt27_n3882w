import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GhJjQmcUYmT1N2l6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Build beautiful apps, faster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Design, prototype, and ship with an AI-powered workflow. Clean components, sensible defaults, and delightful motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#features" className="rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">Explore Features</a>
          <a href="#contact" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium shadow hover:bg-slate-50">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
