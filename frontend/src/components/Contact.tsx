// myportfolio/fed/src/components/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 py-12 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Get In Touch
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Let’s Build Something Exceptional
        </h2>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Whether you need a high-performance Next.js application, a decoupled WordPress setup, or GenAI API integrations, my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a 
            href="bharathikori2000@gmail.com" 
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition text-sm"
          >
            Send Email
          </a>
          <a 
            href="https://github.com/Bharathi0311000/" 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium rounded-lg transition text-sm"
          >
            GitHub Profile
          </a>
          <a 
            href="https://www.linkedin.com/in/bharathi-k-a67b50295/" 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium rounded-lg transition text-sm"
          >
            LinkedIn Profile
          </a>
        </div>

      </div>
    </section>
  );
}