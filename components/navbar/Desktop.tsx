import React from "react";
import { ModeToggle } from "../ModeToggle";
import { sectionLinks } from "@/constants";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LanguageToggle from "../LanguageToggle";

const DesktopNavbar = () => {
  return (
    <nav className="max-sm:hidden w-full flex justify-center h-20 bg-card sticky top-0 z-50 border-b-2 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex justify-evenly items-center h-full max-w-7xl w-full">
        {sectionLinks.map((item) => {
          return (
            <Link key={item.section} href={item.section} className={"opacity-80 hover:opacity-100"}>
              {item.text}
              {item.image && (
                <Avatar>
                  <AvatarImage src={item.image} />
                  <AvatarFallback>CEO</AvatarFallback>
                </Avatar>
              )}
            </Link>
          );
        })}
        <div className="flex gap-3">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
