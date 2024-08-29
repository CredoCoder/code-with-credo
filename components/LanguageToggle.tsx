"use client";

import * as React from "react";
import { Earth } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" aria-label="language toggler">
          <Earth className="h-[1.2rem] w-[1.2rem] cursor-not-allowed opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {}}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>HU</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>RO</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
