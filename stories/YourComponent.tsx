import React from "react";
import "../styles/global.css";

interface YourComponentProps {
  // A section will be created with a certain background color
  backgroundColor?: string;

  // What will be said inside the section
  text: string;
}

export const YourComponent = ({
  backgroundColor,
  text,
  ...props
}: YourComponentProps) => {
  return (
    <section
      className="h-full w-full m-0 p-0"
      style={{ backgroundColor }}
      {...props}
    >
      <p className="text-white p-10 whitespace-pre">{text}</p>
    </section>
  );
};
