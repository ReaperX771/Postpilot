import React from 'react';
import logof from '../assets/images/logof.png';
import mail from '../assets/images/mail.png';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <section>
      <div className="w-[90%] mx-auto flex flex-col gap-7 py-7 md:py-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Centered logo on mobile */}
          <div className="flex justify-center font-medium  md:justify-start flex-col gap-3">
            <img className="w-20 mx-auto md:mx-0" src={logof} alt="Footer logo" />
            <p className="text-[#58595D] text-center md:text-left">
              Our paper is sourced from FSC-certified<br />
              mills. We plant enough trees to more than<br />
              double our paper usage.
            </p>
          </div>

          {/* Grid container for Company and Pricing on mobile */}
          <div className="grid grid-cols-2 gap-15 ml-10 md:ml-0 mt-10 items-center md:mt-0 md:flex md:gap-30">
            <div className="text-[#2E2F35] flex flex-col gap-1 font-medium">
              <h1 className="font-bold mb-3">Company</h1>
              <p>About Us</p>
              <p>Partner program</p>
              <p>Career</p>
              <p>Contact us</p>
              <p>Privacy policy</p>
            </div>

            <div className="text-[#2E2F35] flex flex-col mt-5 justify-center md:mt-10 gap-1 font-medium">
              <p>Pricing</p>
              <p>Reviews</p>
              <p>Direct Mail Academy</p>
              <p>Success stories</p>
              <p>Terms & conditions</p>
            </div>
          </div>

          <div className="text-[#2E2F35] flex flex-col justify-center md:items-start md:justify-start items-center gap-1 mt-10 md:mt-0 font-medium">
            <h1 className="font-bold mb-3">Contact</h1>
            <div className="flex gap-3 r">
              <img src={mail} alt="Mail icon" />
              <p>@support@postpilot.com</p>
            </div>
            <p className='text-center md:text-start'>
              Printed with <span>❤️️</span> at our facility in South<br/> Carolina.
            </p>
          </div>
        </div>

        <hr className="text-black/10" />

        <div className="flex flex-col md:flex-row gap-7 md:gap-0 justify-between">
          <div className="flex flex-col justify-center items-center md:items-start  gap-3">
            <img className="w-40" src={logo} alt="Main logo" />
            <p className="text-[#58595D]">
              © 2022 PostPilot, Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="border-2 px-6 py-2 hover:border-[#009387] hover:bg-[#009387] duration-700 rounded-xl shadow-md shadow-black">
              Login
            </button>
            <button className="border-2 border-black px-7 py-2 rounded-xl shadow-md bg-[#FF6D2C] hover:bg-[#e55f24] hover:border-[#e55f24] transition duration-500  text-white shadow-black">
              Try it for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;