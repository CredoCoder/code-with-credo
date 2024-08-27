"use client";
import React, { FC } from "react";
import { PinContainer } from "../ui/PinContainer";
import SectionTitle from "../SectionTitle";
import { Project } from "@prisma/client";
import Image from "next/image";
import { LogoContainer } from "../AnimatedCard";
import { DiGithub } from "react-icons/di";
import Link from "next/link";

type Props = {
  projects: Project[];
};
const Projects: FC<Props> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="w-full flex items-center justify-center max-xxs:gap-6 xxs:gap-10 md:gap-5 flex-col mt-sectionGap max-md:mt-mobileSectionGap text-center text-balance mb-sectionGap"
    >
      <SectionTitle text="A quick look at" className="md:mb-10">
        {" "}
        <strong>
          <span className="text-primary dark:text-primary">recent projects</span>
        </strong>
      </SectionTitle>
      <div className="h-fit w-full grid items-center grid-cols-1 md:grid-cols-2 gap-5">
        {projects
          .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
          .map((item) => {
            const isPrivateRepository = item.github.includes("private");
            return (
              <PinContainer
                key={item.id}
                title={item.link}
                href={item.link}
                className="pin-container h-full"
              >
                <div className="flex flex-col justify-center items-center p-1 md:p-2 tracking-tight w-full h-full">
                  <div className="h-full w-full rounded-lg relative overflow-hidden">
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base pt-2">{item.title}</h3>
                  <div className="text-sm md:text-base !m-0 !p-0 font-normal flex flex-col gap-3 justify-center items-center">
                    <span className="text-slate-400 dark:text-slate-300">{item.description}</span>
                    <div className="flex gap-3 items-center justify-center">
                      <LogoContainer className="w-fit h-fit p-3">
                        <p className="text-sm font-bold">
                          {isPrivateRepository ? "Private" : "Public"}
                        </p>
                      </LogoContainer>
                      <LogoContainer>
                        <Link
                          href={item.github}
                          className={`${isPrivateRepository && "pointer-events-none"}`}
                          aria-label="GitHub repository"
                        >
                          <DiGithub
                            className={`h-8 w-8 cursor-pointer ${
                              isPrivateRepository && "opacity-50 "
                            }`}
                          />
                        </Link>
                      </LogoContainer>
                      <LogoContainer className="w-fit h-fit p-3">
                        <p className="text-sm font-bold">
                          {item.isDeployed ? "Deployed" : "Not Deployed"}
                        </p>
                      </LogoContainer>
                    </div>
                  </div>
                </div>
              </PinContainer>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
