import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client sites, community builds, a personal tool and concept studies by Nicklaus Vega, with screenshots, stacks and live links.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
