import React from "react";
import { ModeToggle } from "../ModeToggle";
import LanguageToggle from "../LanguageToggle";
import { sectionLinks } from "@/constants";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <nav className="sm:hidden w-full flex justify-center h-16 bg-card sticky top-0 z-50 border-b-2 backdrop-blur supports-[backdrop-filter]:bg-background/80 px-5">
      <div className="flex justify-between items-center sectionLinks[0]s-center h-full max-w-7xl w-full">
        <ModeToggle />
        <Link
          key={sectionLinks[0].section}
          href={sectionLinks[0].section}
          className={"opacity-100"}
        >
          {sectionLinks[0].text}
        </Link>
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default MobileNavbar;
