import React from "react";
import Card from "./CardBox";
import WorldGlobe from "./WorldGlobe";
import SectionTitle from "./SectionTitle";

const Description = ({ text, bold }: { text: string; bold?: boolean }) => {
  return (
    <h2 className={`text-base md:text-xl tracking-wide w-fit ${bold && "font-bold"}`}>{text}</h2>
  );
};

const WhoAmICard = () => {
  return (
    <div className="h-fit md:h-[700px] w-[100%] grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex h-[100%] flex-col gap-5">
        <Card className="h-[150px] md:h-[65%] flex flex-col justify-center items-center relative">
          <h1 className="xxxs:text-3xl md:text-6xl tracking-[0.2rem] w-fit text-center text-balance">
            Who Am I?
          </h1>
        </Card>
        <Card className="h-[200px] md:h-[35%] flex flex-col justify-center items-center gap-5 md:py-0">
          <SectionTitle text="Sometimes" />
          <Description text="Overzealous" />
          <Description text="Guilty of overthinking" />
        </Card>
      </div>
      <Card className="h-[600px] md:h-[100%] flex flex-col justify-start items-center gap-5 relative text-center overflow-hidden">
        <SectionTitle text="Always" />
        <Description text="Adding value as a team player" />
        <Description text="Passionate about what I do" />
        <Description text="Focused on growth" />
        <Description text="Proactive and reliable" />
        <Description text="Flexible in all aspects" bold />
        <WorldGlobe />
      </Card>
    </div>
  );
};

export default WhoAmICard;
