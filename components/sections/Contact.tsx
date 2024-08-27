import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { LogoContainer } from "../AnimatedCard";
import { DiGithub } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center max-xxs:gap-6 xxs:gap-10 md:gap-8 flex-col mt-sectionGap max-md:mt-mobileSectionGap "
    >
      <SectionTitle text="Feel free to contact" className="text-balance text-center mt-5">
        {" "}
        <strong>
          <span className="text-primary dark:text-primary">me</span>
        </strong>
        !
      </SectionTitle>
      <div className="flex flex-row items-center justify-center gap-7">
        <LogoContainer>
          <Link
            href={"https://github.com/CredoCoder?tab=repositories"}
            className="flex w-full items-center justify-center"
            target="_blank"
            aria-label="GitHub repository"
          >
            <DiGithub className="h-8 w-8 cursor-pointer" />
          </Link>
        </LogoContainer>
        <Link href={"mailto:s.tamaska39@gmail.com"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#3B82F6,#E2CBFF_100%)]" />
            <span className="max-xs:text-sm inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-3 py-1 font-medium  backdrop-blur-3xl">
              Send a message
            </span>
          </button>
        </Link>
        <LogoContainer>
          <Link
            href="https://www.linkedin.com/in/szak%C3%A1cs-tam%C3%A1s-8a855a1b9/"
            className="flex w-full items-center justify-center"
            aria-label="LinkedIn profile"
            target="_blank"
          >
            <BsLinkedin className="h-6 w-6 cursor-pointer" />
          </Link>
        </LogoContainer>
      </div>
      <p className="text-sm text-slate-400 dark:text-slate-300 mb-5">
        Copyright &copy; {new Date().getFullYear()} Szakács Tamás
      </p>
    </section>
  );
};

export default Contact;
