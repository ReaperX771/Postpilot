import React from "react";
import obvii from "../assets/images/obvii.png";
import obvi from "../assets/images/obvi.png";
import bullet from "../assets/images/bullet.png";
import boom from "../assets/images/boom.png";
import orbit from "../assets/images/orbit.png";

function How() {
  return (
    <section id="pricing" className="bg-[#EEECFF]">
      <div className="flex flex-col p-5 gap-10 text-center md:text-start md:flex-row justify-between md:p-20 xl:w-[90%] mx-auto">
        <div className="md:min-w-sm xl:max-w-md ">
          <img src={obvii} />
        </div>

        <div className="flex flex-col">
          <div className="text-3xl flex flex-col gap-2 font-semibold sm:text-3xl md:text-5xl md:font-bold mb-12">
            <h1>
              How <span className="font-grace font-light text-[#009387]">Obvi</span> Drives
              <br /> Profits with Hands-
              <br />
              Off Postcard
              <br /> Campaigns
            </h1>
          </div>

          <div className="text-[#58595D] text-sm font-bold tracking-wider">
            <p>
              The 🚀 supplements brand wanted to offset high ad costs
              <br /> and reach dormant customers. They scored 1000%+ ROIs.
            </p>
          </div>

          <div className="flex gap-7 justify-center items-center md:items-start md:justify-start mt-5 md:gap-20">
            <div className="tracking-tighter">
              <h1 className="text-2xl md:text-3xl font-bold">1468%</h1>
              <p className="text-[#58595D] font-medium text-[14px]">RIO</p>
            </div>
            <div className="tracking-tighter">
              <h1 className=" text-2xl md:text-3xl font-bold">8.59%</h1>
              <p className="text-[#58595D]   font-medium text-[14px]">
                Coversion Rate
              </p>
            </div>
            <div className="tracking-tighter">
              <h1 className="text-2xl md:text-3xl font-bold">73,457</h1>
              <p className="text-[#58595D] font-medium text-[14px]">
                Sales Generated
              </p>
            </div>
          </div>

 <div className='flex justify-center md:justify-start mt-5 mb-5 md:mb-10'>
          <button className='px-7 py-2 bg-[#ffffff] hover:border-[#EEECFF] duration-700 text-black text-md font-bold rounded-xl border-2 shadow-md shadow-black border-black hover:bg-[#EEECFF] transition'>
             Read Case Study
          </button>
        </div>

          <div className="flex gap-3 justify-center md:gap-5">
            <img className="w-10 h-5  md:w-[62.28px] md:h-[27.98px]" src={obvi} />
            <img className="w-30 h-5 md:w-[112.89px] md:h-[27.98px]" src={bullet} />
            <img className="w-30 h-7 md:w-[67.02px] md:h-[27.98px]" src={boom} />
            <img className="w-30 h-5 md:w-[135.09px] md:h-[27.98px]" src={orbit} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
