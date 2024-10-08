import React from "react";
import WhoAmICard from "../WhoAmICard";
import { AnimatedCard } from "../AnimatedCard";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full flex items-start justify-center max-xxs:gap-6 xxs:gap-10 md:gap-5 flex-col mt-sectionGap max-md:mt-mobileSectionGap"
    >
      <WhoAmICard />
      <AnimatedCard />
    </section>
  );
};

export default AboutMe;
