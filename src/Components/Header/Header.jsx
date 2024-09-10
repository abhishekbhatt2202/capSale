import React from "react";
import Logo from "../Logo";
import { Search } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

function Header() {
  return (
    <>
      <div>
        <div className="text-center bg-black py-2 text-gray-300 font-black tracking-widest">
          FREE SHIPPING WORLDWIDE
        </div>
        <div className="flex justify-between h-10 mx-16 my-4">
          <div>
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="flex h-8 w-44 hover:border-b-2 border-solid border-black mx-4"><Search /><span className="px-2">Search...</span></div>
            <div className="mx-4">CART <span className="bg-black rounded-[50px] text-white px-[6px]">0</span></div>
            <div className="flex mx-4"><CircleUserRound />Login</div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-16 h-screen bg-[url('https://static.wixstatic.com/media/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg/v1/fill/w_1402,h_739,al_tl,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_88d59da2f5a844e9850ee580ab0c8b8d~mv2_d_4000_1782_s_2.jpg')]">
        <div className="text-white text-center">
          <h2 className="text-6xl w-96 oswald font-black text-center my-3">ALWAYS BE ORIGINAL</h2>
          <h6>NEW ARRIVALS ARE HERE</h6>
          <button className="border border-solid border-white px-3 py-2 my-4 hover:bg-white hover:text-black">Shop Now</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Header;
