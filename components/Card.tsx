import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface ICard {
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = ({ children, className }) => {
  return (
    <div className={cn("rounded m-4 border border-gray-800", className)}>
      {children}
    </div>
  );
};

export default Card;
