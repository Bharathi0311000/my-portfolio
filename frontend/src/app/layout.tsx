// myportfolio/fed/src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Full-Stack & GenAI Portfolio',
  description: 'Built with Next.js, TypeScript, Tailwind CSS, and Headless WordPress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}