import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-fuchsia-500 via-cyan-500 to-emerald-400" />
            <span className="text-white font-semibold tracking-wide">PulseKicks</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#collection" className="hover:text-white transition-colors">Collection</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-2 text-sm font-medium transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3 text-sm text-gray-300">
            <a href="#collection" className="block px-1 py-2 hover:text-white">Collection</a>
            <a href="#features" className="block px-1 py-2 hover:text-white">Features</a>
            <a href="#about" className="block px-1 py-2 hover:text-white">About</a>
          </div>
        )}
      </div>
    </header>
  );
}
