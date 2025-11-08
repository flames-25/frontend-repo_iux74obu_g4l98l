function CTA() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(200px_200px_at_20%_20%,rgba(244,63,94,0.15),transparent_60%),radial-gradient(200px_200px_at_80%_80%,rgba(79,70,229,0.15),transparent_60%)]" />
          <div className="relative p-10 sm:p-14">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Run the night in comfort</h3>
              <p className="mt-3 text-zinc-300">
                Engineered with responsive midsoles and reflective accents, our sneakers keep you fast and visible. Designed for urban explorers.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/15 border border-white/20">Learn more</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20">Get early access</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
