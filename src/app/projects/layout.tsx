import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Nicklaus Vega',
  description: 'A showcase of my recent work and creative endeavors in web development, UX/UI design, and digital solutions.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 