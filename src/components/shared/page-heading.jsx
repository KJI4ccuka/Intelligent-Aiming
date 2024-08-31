"use client";
import { Fade, Slide } from "react-awesome-reveal";

const PageHeading = ({ subtitle, title }) => {
  return (
    <div className="my-10 md:my-20  flex flex-col justify-center items-center w-full text-center">
      <Slide direction="down" triggerOnce={true}>
        <h1 className="font-bold text-2xl  md:text-5xl">{title}</h1>
      </Slide>
      <div className="text-primary text-sm px-10 md:text-lg mt-3 md:px-3 font-secondary hidden lg:inline-block">
        <Fade delay={500} cascade damping={0.05} triggerOnce={true}>
          {subtitle}
        </Fade>
      </div>
      <div className="text-primary text-sm px-10 md:text-lg mt-3 md:px-3 font-secondary lg:hidden">
        <Fade delay={500} triggerOnce={true}>
          {subtitle}
        </Fade>
      </div>
    </div>
  );
};

export default PageHeading;
