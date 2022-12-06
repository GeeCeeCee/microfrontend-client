// import LuigiClient from "@luigi-project/client";
import React from "react";
import dynamic from "next/dynamic";

const AboutMe: React.FC = () => {
  const TextBlock = dynamic(() => import("../components/text-block"), {
    ssr: false,
  });

  return (
    <>
      <h1>Hello world bolar chilo, basssss!!</h1>
      <TextBlock />
    </>
  );
};

export default AboutMe;
