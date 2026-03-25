import React from "react";
import bgImg from "../../../assets/bg-shadow.png"

const Newsletter = () => {
  return (
    <div className="container mx-auto border-2 bg-white/10 border-white/50  rounded-2xl p-3  ">
      <div
        className="hero  bg-white rounded-2xl  py-10 "
        style={{
          backgroundImage:
           `url(${bgImg})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold text-black">
              Subscribe to our Newsletter
            </h1>
            <p className="mb-5 text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col md:flex-row  text-black  justify-center items-center gap-4 ">
              <input
                className="bg-white rounded-lg p-2 pl-4 border border-gray-400"
                type="text"
                placeholder="Enter your gmail"
              />
              <button className=" bg-[#E7FE29] btn rounded-lg  ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
