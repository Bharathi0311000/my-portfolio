// myportfolio/fed/src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 text-center md:text-left flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        3.6+ Years Experience • Certified Next.js & GenAI Developer
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Building modern, high-performance <br className="hidden md:inline" />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          headless & full-stack web apps
        </span>
      </h1>

      <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
        Specializing in decoupled architectures using Next.js, TypeScript, Node.js, and Headless WordPress (WPGraphQL). Experienced in integrating GenAI capabilities into enterprise web products.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium rounded-lg transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}