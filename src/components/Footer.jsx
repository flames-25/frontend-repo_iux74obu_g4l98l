export default function Footer() {
  return (
    <footer id="about" className="bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} PulseKicks. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
