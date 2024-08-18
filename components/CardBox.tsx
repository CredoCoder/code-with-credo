import React, { FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className: string;
  children: React.ReactNode;
};
const Card: FC<Props> = ({ className, children }) => (
  <div
    className={cn(
      "p-8 rounded-xl border border-[rgba(255,255,255,0.25)] bg-card shadow-[2px_4px_16px_0px_rgba(248,248,248,0.25)_inset] group",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
