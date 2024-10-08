import React from "react";
import { TypewriterEffect } from "../TypewriterEffect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const introducerWords = [
    { text: "Hi!" },
    { text: "My" },
    { text: "name" },
    { text: "is" },
    { text: "Szakács", className: "text-primary dark:text-primary" },
    { text: "Tamás", className: "text-primary dark:text-primary" },
  ];

  return (
    <section
      id="hero"
      className="w-full max-xs:h-[calc(100vh-4rem)]  h-[calc(100vh-5rem)] flex items-center justify-evenly max-xxs:gap-6 xxs:gap-10 md:gap-7 flex-col max-xs:pt-2 pt-6"
    >
      <TypewriterEffect words={introducerWords} className="tracking-widest text-balance" />
      <h1 className="max-xs:text-base text-xl sm:text-2xl md:text-3xl text-center !leading-[1.5] tracking-[0.2rem] text-balance">
        Frontend Developer based in Romania
      </h1>
      <Image
        src={"/images/hero.jpg"}
        alt="hero"
        priority
        width={350}
        height={350}
        className="rounded-full max-xs:max-h-[200px] max-xs:max-w-[200px] max-sm:max-h-[250px] max-sm:max-w-[250px] w-auto h-auto"
      />
      <div className="flex flex-col gap-4">
        <h1 className="max-xs:text-base text-xl text-center !leading-[1.5] text-balance uppercase tracking-widest">
          Turning <strong className="text-primary">Ideas</strong> into Smooth User Experiences
        </h1>
      </div>
      <Link href={"/#about"}>
        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#3B82F6,#E2CBFF_100%)]" />
          <span className="max-xs:text-sm inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-3 py-1 font-medium  backdrop-blur-3xl">
            Get to know me
          </span>
        </button>
      </Link>
      <div className="w-10 h-16 border-4 border-solid border-foreground max-sm:rounded-md rounded-full  relative">
        <div className="w-2 h-2 max-sm:w-3 max-sm:h-3 bg-foreground rounded-full absolute top-3 max-sm:left-2/3 left-1/2  transform -translate-x-1/2 opacity-100 animate-wheel"></div>
      </div>
    </section>
  );
};

export default Hero;
