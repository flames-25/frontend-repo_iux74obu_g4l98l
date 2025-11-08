import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              New Drop
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Elevate your stride.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl">
              Futuristic silhouettes, premium materials, and comfort engineered for speed. Explore our limited-run sneakers built for the streets and the spotlight.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#collection" className="inline-flex justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-gray-100 transition-colors">Shop the Collection</a>
              <a href="#features" className="inline-flex justify-center rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/15 transition-colors">Why PulseKicks</a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[920px] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10 blur-3xl" />
    </section>
  );
}
