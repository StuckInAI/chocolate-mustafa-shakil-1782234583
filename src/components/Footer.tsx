import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#3b1f0e] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍫</span>
            <span className="text-xl font-bold text-white">
              Chocolate <span className="text-[#e8b84b]">Hub</span>
            </span>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/60 hover:text-[#e8b84b] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Chocolate Hub. All rights reserved.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">
            Made with 🍫 and passion · Handcrafted chocolates delivered to your door
          </p>
        </div>
      </div>
    </footer>
  );
}
