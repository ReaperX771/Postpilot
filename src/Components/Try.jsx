import React from "react";
import starw from '../assets/images/starw.png'
import hand from '../assets/images/hand.png'

function Try() {
  return (
    <section id="login" className="bg-[#FF6D2C]">
        <div className="flex  flex-col-reverse md:flex-row justify-between md:w-[80%] mx-auto">
      <div className="flex mb-10 flex-col gap-5 text-center md:text-start">
        <div className="">
          <h1 className="text-3xl justify-start mt-10 md:mt-20 text-white flex flex-col gap-2 font-semibold sm:text-3xl md:text-6xl md:font-bold mb-12">
            Try PostPilot
            <br /> Risk-Free
          </h1>
        <p className="text-white font-medium">No contracts. No commitments. Guaranteed results.*</p>
        </div>


        <div className="flex flex-col sm:flex-col md:flex-row gap-4 items-center">
          <button className="w-l sm:w-auto px-6 py-3 md:px-7 md:py-2 bg-white duration-700 text-base md:text-lg font-medium rounded-xl border-2 border-black hover:bg-[#EEECFF] hover:border-[#EEECFF] transition">
            Try It Risk-Free
          </button>
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <img src={starw} alt="Star" className="w-5 h-5" />
              <img src={starw} alt="Star" className="w-5 h-5" />
              <img src={starw} alt="Star" className="w-5 h-5" />
              <img src={starw} alt="Star" className="w-5 h-5" />
              <img src={starw} alt="Star" className="w-5 h-5" />
            </div>
            <p className="text-sm font-extralight tracking-tighter md:text-base md:font-extralight text-white mt-1">
              5.0 Shopify Rating
            </p>
          </div>
        </div>

        <p className="text-white/70 font-medium tracking-normal md:text-[13px]">* for qualified brands with over $1m annual Shopify revenue.</p>
      </div>

      <div>
        <img className="md:w-md w-sm" src={hand}/>
      </div>
      </div>
    </section>
  );
}

export default Try;
