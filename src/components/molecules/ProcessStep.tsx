import React from "react";
import { ProcessStepItem } from "@/data/process";

export const ProcessStep: React.FC<ProcessStepItem> = ({
  number,
  title,
  description,
}) => {
  return (
    <div>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
