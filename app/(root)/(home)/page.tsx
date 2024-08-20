import AboutMe from "@/components/sections/AboutMe";
import { BackgroundBeams } from "@/components/BeamsBackground";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      {/* <BackgroundBeams /> */}
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}
