import { ShieldCheck, Truck, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Responsive Cushioning",
    desc: "Energy-return midsoles engineered for all-day comfort.",
  },
  {
    icon: Truck,
    title: "Express Worldwide",
    desc: "Fast, tracked delivery with hassle-free returns.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Premium materials backed by a 1-year warranty.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for performance</h2>
          <p className="mt-2 text-gray-400">Every pair is crafted to move with you — light, durable, and striking.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <f.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
