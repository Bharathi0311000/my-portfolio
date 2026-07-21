// myportfolio/fed/src/app/projects/[slug]/page.tsx
import { fetchGraphQL } from '@/lib/wordpress';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

const GET_PROJECT_BY_SLUG = `
  query GetProjectBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      projectDetails {
        liveDemoUrl
        githubRepo
        techStack
      }
    }
  }
`;

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  
  const data = await fetchGraphQL(GET_PROJECT_BY_SLUG, { id: slug });
  const project = data?.post;

  if (!project) {
    notFound();
  }

  const techList = project.projectDetails?.techStack
    ? project.projectDetails.techStack.split(',').map((tech: string) => tech.trim())
    : [];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-mono transition"
        >
          ← Back to Portfolio
        </Link>

        {/* Title */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {project.title}
          </h1>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techList.map((tech: string, idx: number) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950 text-cyan-400 border border-cyan-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Main Content from WordPress */}
        <article 
          className="prose prose-invert prose-cyan max-w-none text-slate-300 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {/* Call to Action Links */}
        <div className="flex gap-4 pt-8 border-t border-slate-800">
          {project.projectDetails?.liveDemoUrl && (
            <a 
              href={project.projectDetails.liveDemoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition"
            >
              View Live Site
            </a>
          )}
          {project.projectDetails?.githubRepo && (
            <a 
              href={project.projectDetails.githubRepo} 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium rounded-lg transition"
            >
              Source Code (GitHub)
            </a>
          )}
        </div>

      </div>
    </main>
  );
}