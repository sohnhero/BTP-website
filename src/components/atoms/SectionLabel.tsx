import React from "react";

interface SectionLabelProps {
  number?: string;
  text: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, text }) => {
  return (
    <div className="section-label">
      {number && <span>{number}</span>}
      <p>{text}</p>
    </div>
  );
};
