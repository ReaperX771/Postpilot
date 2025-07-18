import React from 'react';
import star from '../assets/images/star.png';
import hero from '../assets/images/hero.png';
import heroo from '../assets/images/heroo.png';

function Hero() {
  return (
    <section className="bg-[#e0f8f2] py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-27 md:gap-12">
          {/* Image Section - On top for mobile */}
          <div className="relative w-full md:w-1/2 max-w-lg order-first md:order-last">
            <img className="w-lg" src={hero} alt="Hero" />
            <img
              className="object-contain absolute top-[4%] -left-[3.55%] w-lg z-1"
              src={heroo}
              alt="Hero Overlay"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 order-last md:order-first">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              Meet your<br />
              <span className="font-grace font-light text-[#009387]">favorite</span> new (old)<br />
              marketing channel.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Remarkable results. Easier than email. Postcard marketing<br />
              reinvented for modern ecommerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-l sm:w-auto px-6 py-3 md:px-7 md:py-2 bg-[#FF6D2C] text-white text-base md:text-lg font-medium rounded-xl border-2 border-black hover:bg-[#e55f24] duration-700 hover:border-[#e55f24] transition">
                Try It Risk-Free
              </button>
              <div className="flex flex-col items-center">
                <div className="flex">
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold md:text-base md:font-bold text-gray-600 mt-1">5.0 Shopify Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;