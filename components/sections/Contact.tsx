import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center max-xxs:gap-6 xxs:gap-10 md:gap-8 flex-col mt-sectionGap max-md:mt-mobileSectionGap"
    >
      <SectionTitle text="Feel free to contact" className="text-balance text-center">
        {" "}
        <strong>
          <span className="text-primary dark:text-primary">me</span>
        </strong>
        !
      </SectionTitle>
      <Link href={"mailto:s.tamaska39@gmail.com"}>
        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#3B82F6,#E2CBFF_100%)]" />
          <span className="max-xs:text-sm inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-3 py-1 font-medium  backdrop-blur-3xl">
            Send a message
          </span>
        </button>
      </Link>
    </section>
  );
};

export default Contact;
