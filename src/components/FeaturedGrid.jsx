import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "PulseRunner X",
    price: "$189",
    color: "Carbon / Neon",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "AeroFlow Volt",
    price: "$210",
    color: "Obsidian / Lime",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nebula Glide",
    price: "$165",
    color: "Space Gray / Ice",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Quantum Sprint",
    price: "$195",
    color: "Graphite / Aurora",
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function FeaturedGrid() {
  return (
    <section id="collection" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Collection</h2>
            <p className="mt-2 text-gray-400">Limited drops refreshed weekly.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-white/90 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <span className="text-white/90">{p.price}</span>
                </div>
                <p className="text-sm text-gray-400">{p.color}</p>
                <div className="mt-3 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
