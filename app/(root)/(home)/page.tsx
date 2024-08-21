import AboutMe from "@/components/sections/AboutMe";
import { BackgroundBeams } from "@/components/BeamsBackground";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import prisma from "@/lib/prisma";

const getProjects = async () => {
  const projects = await prisma.project.findMany();

  return projects;
};

export default async function Home() {
  return (
    <>
      <BackgroundBeams />
      <Hero />
      <AboutMe />
      <Projects projects={await getProjects()} />
    </>
  );
}
