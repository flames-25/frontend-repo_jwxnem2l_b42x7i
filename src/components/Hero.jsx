import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:pt-12">
      <div className="relative h-[520px] sm:h-[560px] rounded-3xl overflow-hidden bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 ring-1 ring-white/40 shadow-xl">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-white/0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full grid place-items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Elegant Discovery for Government Opportunities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              A minimalist, modern experience blending beauty and clarity. Filter, explore, and focus on the work that matters.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#explore" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition">
                Explore opportunities
              </a>
              <a href="https://www.govwin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-medium text-gray-900 ring-1 ring-black/10 hover:bg-white transition">
                Learn about GovWin
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
