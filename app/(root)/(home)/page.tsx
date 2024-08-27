import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

const getProjects = async () => {
  const projects = await prisma.project.findMany();

  return projects;
};

export const metadata: Metadata = {
  title: "Code With Credo",
  description: "Hi there! I'm Szakacs Tamas a Frontend Developer! Get to know me!",
  keywords: [
    "Frontend",
    "Developer",
    "Frontend Developer",
    "Szakacs Tamas",
    "Szakács Tamás",
    "web application",
    "website",
    "next.js developer",
    "react developer",
    "code with credo",
  ],
  icons: {
    icon: "https://code-with-credo.vercel.app/images/logo.png",
  },
  openGraph: {
    title: "Code With Credo",
    description: "Hi there! I'm Szakacs Tamas a Frontend Developer! Get to know me!",
    url: "https://code-with-credo.vercel.app/",
    siteName: "Code With Credo",
    images: [
      {
        url: "https://code-with-credo.vercel.app/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Home() {
  return (
    <>
      {/* <BackgroundBeams /> */}
      <Hero />
      <AboutMe />
      <Projects projects={await getProjects()} />
    </>
  );
}
