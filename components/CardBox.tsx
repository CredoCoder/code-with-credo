import React, { FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className: string;
  children: React.ReactNode;
};
const Card: FC<Props> = ({ className, children }) => (
  <div
    className={cn(
      "p-8 rounded-xl border dark:border-dark border-light bg-card dark:shadow-dark shadow-light group",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
