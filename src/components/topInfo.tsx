"use client";
import Marquee from "react-fast-marquee";
import Popover from "./popover";
export default function TopInfo() {
  return (
    <>
      <div className="description bg-dividers flex  flex-nowrap whitespace-nowrap justify-around overflow-hidden p-2 text-personal h-[8%] items-center">
        <Marquee speed={100} className="pointer-events-none" gradient={false}>
          JOEL CASTILLO - FULL STACK WEB DEVELOPER - JOEL CASTILLO - FULL STACK WEB DEVELOPER -{" "}
        </Marquee>
      </div>
      <div className="info flex justify-around lg:justify-between px-6 py-2 h-[2%]">
        <a className="animate-pulse" download href="https://amethyst-renelle-62.tiiny.site/" target="_blank">
          RESUME
        </a>
        <div className="">OPEN TO WORK</div>
        <a className="date animate-pulse" href="mailto:joelecastilloj@gmail.com">
          CONTACT
        </a>
        <div className="">
          <Popover text="I'm Joel Castillo a Full stack web developer based on the US, inspired by minimalism and creating products that connect the world" />
        </div>
        <div>
          {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase().replace(/,/g, "")}
        </div>
      </div>
    </>
  );
}
