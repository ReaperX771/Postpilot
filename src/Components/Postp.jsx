import React from 'react';
import helen from '../assets/images/helen.png';
import twit from '../assets/images/twit.png';
import natha from '../assets/images/natha.png';
import chris from '../assets/images/chris.png';
import Marquee from 'react-fast-marquee';

function Postp() {
  return (
    <section id='success-stories' className='bg-white overflow-hidden'>
      <div className='mt-14 md:mt-20 py-7 w-[90%] mx-auto max-w-7xl'>
        <div className='text-3xl flex flex-col gap-2 font-semibold sm:text-3xl text-center md:text-5xl md:font-bold mb-12'>
          <h1>PostPilot is 🔥 for <span className='text-[#FF6D2C]'>DTC</span></h1>
        </div>


        <div className='flex flex-nowrap overflow-x-hidden w-[150%] mx-auto transform  -translate-x-1/8 left-1/2'>
          {/* First Testimonial*/}
          <Marquee speed={10}> 
          <div className='border-2 border-[#2E2F35] rounded-xl p-4 ml-10 bg-white shadow-md mr-6 flex-grow max-w-sm '>
            <div className='flex justify-between items-center mb-4 '>
              <div className='flex items-center gap-2'>
                <img src={helen} alt='Jon Tucker' className='w-10 h-10 rounded-full' />
                <div>
                  <p className='text-sm font-semibold text-[#2E2F35]'>Jon Tucker</p>
                  <p className='text-sm text-gray-500'>@JonTuckerUSA</p>
                </div>
              </div>
              <img src={twit} alt='Twitter logo' className='w-5 h-5' />
            </div>
            <div className='text-sm text-[#2E2F35]'>
              <Marquee speed={30}>
              <p>
                Email is a killer channel, but if you layer in<br /> postal mail you can really supercharge<br /> results. The team at @getpostpilot will<br /> spark ideas for ya.
              </p>
              </Marquee>
              <p>@getpostpilot. Killer tool.</p>
            </div>
          </div>

          {/* Second Testimonial  */}
          <div className='border-2 border-[#2E2F35] rounded-xl p-4 bg-white shadow-md mr-6 flex-grow max-w-sm'>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center gap-2'>
                <img src={helen} alt='Helen Guo' className='w-10 h-10 rounded-full' />
                <div>
                  <p className='text-sm font-semibold text-[#2E2F35]'>Helen Guo</p>
                  <p className='text-sm text-gray-500'>@HelenGuo_</p>
                </div>
              </div>
              <img src={twit} alt='Twitter logo' className='w-5 h-5' />
            </div>
            <div className='text-sm text-[#2E2F35]'>
              <Marquee speed={30}>
              <p>
                Been using PostPilot for years. Good for re-<br />engagement. And you can get creative with<br /> your messaging.
              </p>
              </Marquee>
            </div>
          </div>

          {/* Third Testimonial */}
          <div className='border-2 border-[#2E2F35] rounded-xl p-4 bg-white shadow-md mr-6 flex-grow max-w-sm'>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center gap-2'>
                <img src={natha} alt='Nathan Woods' className='w-10 h-10 rounded-full' />
                <div>
                  <p className='text-sm font-semibold text-[#2E2F35]'>Nathan Woods</p>
                  <p className='text-sm text-gray-500'>@HeisNathan</p>
                </div>
              </div>
              <img src={twit} alt='Twitter logo' className='w-5 h-5' />
            </div>
            <div className='text-sm text-[#2E2F35]'>
               <Marquee speed={30}>
              <p>
                We have done some rad winbacks to<br /> 360-720 days since purchase that have<br /> rocked. PostPilot team is one of my favs.
              </p>
              </Marquee>
            </div>
          </div>

          {/* Fourth Testimonial */}
          <div className='border-2 border-[#2E2F35] rounded-xl p-4 bg-white shadow-md flex-grow max-w-sm'>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center gap-2'>
                <img src={chris} alt='Chris Lander' className='w-10 h-10 rounded-full' />
                <div>
                  <p className='text-sm font-semibold text-[#2E2F35]'>Chris Lander</p>
                  <p className='text-sm text-gray-500'>@chris_basis</p>
                </div>
              </div>
              <img src={twit} alt='Twitter logo' className='w-5 h-5' />
            </div>
            <div className='text-sm text-[#2E2F35]'>
               <Marquee speed={30}>
              <p>
                Another +1 for PostPilot. Have only done<br /> winbacks, but it's been wonderful. Their team<br /> is also top notch. Super helpful every time we set<br /> something up.
              </p>
              </Marquee>
            </div>
          </div>
          </Marquee>
        </div>

        <div className='flex justify-center mt-10'>
          <button className='px-7 py-2 bg-[#FF6D2C] duration-700 hover:border-[#e55f24] text-white text-lg font-medium rounded-xl border-2 shadow-md shadow-black border-black hover:bg-[#e55f24] transition'>
            Try It Risk-Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Postp; 