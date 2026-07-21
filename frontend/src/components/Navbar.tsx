// myportfolio/fed/src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-wider text-slate-100 hover:text-cyan-400 transition font-mono"
        >
          &lt;Portfolio /&gt;
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/#skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>
          <Link href="/#experience" className="hover:text-cyan-400 transition">
            Experience
          </Link>
          <Link href="/#projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="px-4 py-2 text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}