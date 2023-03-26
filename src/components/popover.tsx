"use client";
import { useState } from "react";

export default function Popover({ text }: { text: string }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="animate-pulse cursor-pointer " onClick={() => setActive((prev) => !prev)}>
        ABOUT
      </div>
      <p
        className={`${
          active ? "opacity-100" : "opacity-0"
        } about-pop text-[1.5rem] w-[300px] p-2 bg-font text-black absolute -translate-x-48 lg:text-[2rem] translate-y-6  transition-all origin-top-right z-10  `}>
        {text}
      </p>
    </>
  );
}
{
  /* <p
className={`/* ${
  active ? "animate-appear" : "animate-disappear"
}  about-pop text-[1.5rem] w-[300px] p-3 bg-font text-black absolute -translate-x-44 lg:text-[2rem] translate-y-6  transition-all origin-top-right z-10`}>
{text}
</p> */
}
