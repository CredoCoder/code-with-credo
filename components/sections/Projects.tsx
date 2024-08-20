"use client";
import React, { FC } from "react";
import { PinContainer } from "../ui/PinContainer";
import SectionTitle from "../SectionTitle";
import { Project } from "@prisma/client";

type Props = {
  projects: Project[];
};
const Projects: FC<Props> = ({ projects }) => {
  return (
    <section className="w-full flex items-center justify-center max-xxs:gap-6 xxs:gap-10 md:gap-5 flex-col mt-sectionGap max-md:mt-mobileSectionGap text-center text-balance mb-sectionGap">
      <SectionTitle text="A quick look at" className="md:mb-10">
        {" "}
        <strong>
          <span className="text-primary dark:text-primary">recent projects</span>
        </strong>
      </SectionTitle>
      <div className="h-fit md:h-[30rem] w-full grid items-center grid-cols-1 md:grid-cols-2 gap-5">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
          className="pin-container h-full"
        >
          <div className="flex flex-col justify-center items-center p-1 md:p-4 tracking-tight text-slate-100/50 w-full h-full md:h-[30rem]">
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {projects[0].title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
          </div>
        </PinContainer>
        {/*  */}
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
          className="pin-container h-full"
        >
          <div className="flex flex-col p-1 md:p-4 tracking-tight text-slate-100/50 w-full h-full md:h-[30rem]">
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
          </div>
        </PinContainer>
      </div>
    </section>
  );
};

export default Projects;
