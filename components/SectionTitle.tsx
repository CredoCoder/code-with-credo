import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

type Props = {
  text: string;
  children?: ReactNode;
  className?: string;
};
const SectionTitle: FC<Props> = ({ text, children, className = "" }) => {
  return (
    <h2 className={cn("text-xl xxs:text-3xl md:text-4xl tracking-[0.2rem] w-fit", className)}>
      <strong>{text}</strong>
      {children}
    </h2>
  );
};

export default SectionTitle;
