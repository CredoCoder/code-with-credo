"use client";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiGithub, DiLinux, DiMongodb, DiPostgresql } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiPrisma, SiRedux, SiTypescript, SiVercel } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import Card from "./CardBox";

export function AnimatedCard() {
  return (
    <Card className="w-full">
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle className="max-xs:text-lg max-md:text-xl text-2xl">My tech stack</CardTitle>
      <CardDescription className="max-md:text-base text-lg">
        Here are some of the technologies I utilize in my projects
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const commonAnimation = {
    scale: [1, 1.1, 1],
    transform: ["translateY(0px)", "translateY(-8px)", "translateY(0px)"],
  };

  const sequence = Array.from({ length: 12 }, (_, i) => [
    `.circle-${i + 1}`,
    commonAnimation,
    { duration: 0.8 },
  ]);

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-full relative flex justify-center scrollbar-width-none">
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        <LogoContainer className="circle-1">
          <RiTailwindCssFill className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-2">
          <GrReactjs className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-3">
          <RiNextjsFill className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-4">
          <SiPrisma className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-5">
          <DiMongodb className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-6">
          <DiLinux className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-7">
          <SiRedux className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-8">
          <BsDatabase className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-9">
          <SiTypescript className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-10">
          <SiVercel className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-11">
          <DiPostgresql className="h-6 w-6" />
        </LogoContainer>
        <LogoContainer className="circle-12">
          <DiGithub className="h-8 w-8" />
        </LogoContainer>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white pt-4 pb-2 text-center",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 text-center w-full",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-fit md:h-[12rem] rounded-xl z-40", className, showGradient && "")}>
      {children}
    </div>
  );
};

export const LogoContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
