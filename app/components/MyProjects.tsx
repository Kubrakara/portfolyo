import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectsCard";

export default function MyProjects() {
  return (
    <section className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mx-40">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
