"use client";
import React, { FC } from "react";
import { PinContainer } from "../ui/PinContainer";
import SectionTitle from "../SectionTitle";
import { Project } from "@prisma/client";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner";

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
      <div className="h-fit w-full grid items-center grid-cols-1 md:grid-cols-2 gap-5">
        {projects
          .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
          .map((item) => {
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
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{item.description}</span>
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
