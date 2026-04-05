import { getProjects } from "@/src/lib/projects";
import BasicPortfolio from "@/src/components/portfolio/BasicPortfolio";
import { getExperiences } from "@/src/lib/experiences";

export default async function PortfolioPage() {
  const projects = await getProjects();
  const experiences = await getExperiences();
  return <BasicPortfolio projects={projects} experiences={experiences}/>;
}