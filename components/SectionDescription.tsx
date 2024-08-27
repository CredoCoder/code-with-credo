import React, { FC } from "react";

type Props = {
  text: string;
  bold?: boolean;
};

const Description: FC<Props> = ({ text, bold }) => {
  return (
    <h2 className={`text-base md:text-xl tracking-wide w-fit ${bold && "font-bold"}`}>{text}</h2>
  );
};

export default Description;
