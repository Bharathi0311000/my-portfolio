// myportfolio/fed/src/components/Experience.tsx

const experiences = [
  {
    role: "Senior Full-Stack & GenAI Engineer",
    company: "Tech Lead / Enterprise Projects",
    period: "2023 — Present",
    description: "Architecting headless WordPress solutions paired with Next.js App Router. Integrating custom LLM APIs, vector stores, and automated workflows into production web platforms.",
    highlights: ["Next.js", "TypeScript", "WPGraphQL", "GenAI APIs", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Software Solutions Firm",
    period: "2021 — 2023",
    description: "Developed and maintained high-performance web applications, API integrations, and CMS backends. Focused on client-side optimization, SEO, and state management.",
    highlights: ["React", "Node.js", "WordPress", "REST APIs", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-10">
      <div className="mb-8 border-b border-slate-800 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Work Experience</h2>
        <p className="text-slate-400 mt-1">A timeline of my 3.6+ years in full-stack web architecture and modern frontend engineering.</p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Pulsing timeline node icon */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 w-fit">
                {exp.period}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-400 mb-3">{exp.company}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-3xl">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((item, hIdx) => (
                <span 
                  key={hIdx} 
                  className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}