import React from "react";
import heroBg from "../../../assets/bg-shadow.png"
import bannerMain from "../../../assets/banner-main.png"

const Hero = () => {
  return (
    <div
      className="hero h-[50vh] bg-black w-10/12 mx-auto rounded-2xl overflow-hidden mt-10"
      style={{
        backgroundImage:
          `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className=" flex flex-col justify-center items-center space-y-5">
            <img src={bannerMain} alt="" />
          <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5 text-2xl text-gray-400 ">
            Beyond Boundaries Beyond Limits
          </p>
          <span className="border rounded-xl border-[#E7FE29] p-1.5">
            <button className="rounded-lg p-2 text-black  font-bold bg-[#E7FE29]">Claim Free Credit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
