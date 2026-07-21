// myportfolio/fed/src/app/page.tsx
import Link from 'next/link';
import { fetchGraphQL } from '@/lib/wordpress';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

interface Project {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: { node: { sourceUrl: string } } | null;
  projectDetails: {
    liveDemoUrl: string;
    githubRepo: string;
    techStack: string;
  };
}

const GET_PROJECTS_QUERY = `
  query GetProjects {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        projectDetails {
          liveDemoUrl
          githubRepo
          techStack
        }
      }
    }
  }
`;

export default async function HomePage() {
  const data = await fetchGraphQL(GET_PROJECTS_QUERY);
  const projects: Project[] = data?.posts?.nodes || [];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-16">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* 1. Hero Section Component */}
        <Hero />


{/* 2. Add Skills Section */}
        <Skills />

        {/* 3. Work Experience Section */}
        <Experience />

        {/* 2. Projects Showcase Section */}
        <section id="projects" className="scroll-mt-10">
          <div className="mb-8 border-b border-slate-800 pb-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Featured Projects</h2>
            <p className="text-slate-400 mt-1">Live data fetched from Headless WordPress via WPGraphQL.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              // Convert comma-separated string into array for styled badges
              const techList = project.projectDetails?.techStack
                ? project.projectDetails.techStack.split(',').map((tech) => tech.trim())
                : [];

              return (
                <div 
                  key={project.id} 
                  className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 hover:text-cyan-400 transition">
  <Link href={`/projects/${project.slug}`}>
    {project.title}
  </Link>
</h3>
                    {/* Clean formatted WordPress HTML content */}
                    <div 
                      className="text-slate-400 text-sm mb-6 leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: project.excerpt }} 
                    />

                    {/* Styled Tech Stack Badges */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {techList.length > 0 ? (
                          techList.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/50"
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-600 font-mono">N/A</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Links Section */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                    {project.projectDetails?.liveDemoUrl && (
                      <a 
                        href={project.projectDetails.liveDemoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-4 py-2 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.projectDetails?.githubRepo && (
                      <a 
                        href={project.projectDetails.githubRepo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-4 py-2 text-sm font-medium border border-slate-700 hover:bg-slate-800 rounded-lg text-slate-300 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
{/* Contact Section */}
        <Contact />
      </div>
    </main>
  );
}