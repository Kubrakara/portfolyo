import type { Metadata } from "next";
import MyProjects from "../components/MyProjects";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Kübra Kara tarafından geliştirilen web, mobil ve yapay zeka projeleri.",
};

export default function ProjectsPage() {
  return <MyProjects />;
}
