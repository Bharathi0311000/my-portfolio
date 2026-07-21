// myportfolio/fed/src/components/Skills.tsx

const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: ["Next.js (App Router)", "TypeScript", "React", "Tailwind CSS", "HTML5/CSS3", "State Management"],
  },
  {
    title: "Backend & Headless CMS",
    skills: ["Node.js", "Express", "WordPress (Headless)", "WPGraphQL", "REST APIs", "GraphQL"],
  },
  {
    title: "AI & Emerging Tech",
    skills: ["GenAI Integration", "Prompt Engineering", "LLM APIs", "AI Workflows"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git / GitHub", "Docker", "CI/CD", "Vercel", "XAMPP / Local Envs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-10">
      <div className="mb-8 border-b border-slate-800 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Technical Skills</h2>
        <p className="text-slate-400 mt-1">Core competencies developed over 3.6+ years of full-stack engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}