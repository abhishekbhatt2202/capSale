import React from "react";
import { Minus } from "lucide-react";

function Logo() {
  return (
    <>
      <div className="flex">
        <div className="font-black items-stretch  league-gothic">RAW</div>
        <div
          className="border-b-8 border-solid border-black pt-[8px] ml-[5px] pl-[5px] mb-[50px] 
        tracking-[1.5px] font-bold
        "
        >
          ETC
        </div>
      </div>
    </>
  );
}

export default Logo;
