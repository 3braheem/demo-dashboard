import React from "react";
import Card, { ICard } from "./Card";
import { v4 as uuidv4 } from "uuid";
import ScatterPlot from "./ScatterPlot";

interface IInfoCards extends ICard {
  len: number;
}

const InfoCards: React.FC<IInfoCards> = ({ children, className, len }) => {
  return (
    <div className="flex max-md:flex-col max-w-full gap-1 justify-end mx-4">
      <Card className="w-full">
        <ScatterPlot />
      </Card>
      <div className="md:flex md:flex-col my-3">
        {Array.from({ length: len }).map((element) => (
          <Card className={className} key={uuidv4()}>
            {children}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
