import React from "react";
import IEEESBLogo from "../../assets/Poster-Items/Asset 1@4x.png";
import IEEELogo from "../../assets/Poster-Items/Asset 2@4x.png";
import IEEESBSocial from "../../assets/Poster-Items/Asset 3@4x.png";
import IEEESBWeb from "../../assets/Poster-Items/Asset 4@4x.png";
import BgTexture from "../../assets/Poster-Items/Asset 5@4x.png";
import Incept from "../../assets/Poster-Items/Asset 6@4x.png";
import { Divider } from "@nextui-org/react";

const Poster = () => {
  return (
    <div className="relative flex items-center justify-center md:min-w-[540px] md:min-h-[540px] min-h-[300px] min-w-[300px] p-5 border-1">
      <div>
        {/* Top Left */}
        <div className="absolute top-5 left-5">
          <img src={IEEESBLogo} className="md:w-[50px] w-[25px]" alt="" />
        </div>
        {/* Top Right */}
        <div className="absolute top-5 right-5">
          <img src={IEEELogo} className="md:w-[80px] w-[40px]" alt="" />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-5 left-5">
          <img src={IEEESBSocial} className="md:w-[150px] w-[75px]" alt="" />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-5 right-5">
          <img src={IEEESBWeb} className="md:w-[150px] w-[75px]" alt="" />
        </div>
      </div>
      <div className="md:w-[540px] md:h-[540px] h-[300px] w-[300px]">
        <img
          src={Incept}
          className="absolute z-10 md:left-24 md:top-10 left-20 top-6 md:w-[350px] w-[150px]"
          alt=""
        />
        <div className="flex flex-col justify-center md:pl-3 md:pt-48 pt-20 h-full">
          <h2 className="md:text-4xl text-2xl font-bold">Inception '22</h2>
          <Divider className="md:w-[200px] w-[100px]" />
          <p>DESIGN WORKSHOP</p>
          <div className="md:pt-10 pt-2 md:text-sm text-tiny">
            <h4 className="font-semibold">Perks</h4>
            <ul className="md:max-w-[320px] max-w-[180px]">
              <li><span className="font-bold">•</span> Exclusive for MESCE Students.</li>
              <li>
              <span className="font-bold">•</span> Top Performers will be selected to
                IEEE SB MESCE Design Team.
              </li>
            </ul>
          </div>
          <div className="md:pt-10 pt-2 md:text-sm text-tiny">
            <p>Register Now:</p>
            <div className="bg-black text-white md:p-2 p-1 w-fit">
              <p>bit.ly/INCEPTION_22</p>
            </div>
          </div>
        </div>
        <div className="absolute md:top-20 md:right-7 top-14 right-5 text-right">
          <p className="absolute right-3 top-3">
            <span className="font-semibold md:text-6xl text-3xl">21</span>{" "}
            <br />
            <span className="md:text-sm text-tiny flex flex-col">
              September <br />
              Onwards
            </span>
          </p>
          <img src={BgTexture} className="md:w-[350px] w-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Poster;
