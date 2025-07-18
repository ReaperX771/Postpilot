import React from 'react';
import plug from '../assets/images/plug.png';
import run from '../assets/images/run.png';
import real from '../assets/images/real.png';
import deliver from '../assets/images/deliver.png';
import predict from '../assets/images/predict.png';
import compliment from '../assets/images/compliment.png';

function Every() {
  return (
    <section id='resources' className=''>
      <div className='mt-14 md:mt-20 py-7 w-[90%] mx-auto max-w-7xl'>
        <div className='text-3xl flex flex-col gap-2 font-semibold sm:text-3xl text-center md:text-5xl md:font-bold mb-12'>
          <h1 className='tracking-tighter'>Everything your brand needs to</h1>
          <h1 className="font-grace font-light text-[#009387]">make your brand unforgettable</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7'>
          {/* First Item - Plug-and-play */}
          <div className='bg-[#FDF3EA] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={plug} alt='plug icon' className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Plug-and-play with<br /> your stack
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              Native integrations provide seamless<br /> segmentation, automation & tracking. No<br /> clunky spreadsheets.
            </p>
          </div>

          {/* Second Item - Run campaigns */}
          <div className='bg-[#E0F8F2] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={run} alt='campaign icon' className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Run campaigns<br /> on autopilot
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              Ink profits while you sleep: Just set it and<br /> forget it.
            </p>
          </div>

          {/* Third Item - Real-time ROI dashboard */}
          <div className='bg-[#EEECFF] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={real} alt='roi dashboard icon' className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Real-time ROI dashboard
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              Track performance of every postcard by<br /> customer or discount code. Your CFO will<br /> love it.
            </p>
          </div>

          {/* Fourth Item - Deliver WOW */}
          <div className='bg-[#D9F2F7] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={deliver} alt='handwritten card icon' className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Deliver WOW with *real*<br /> handwritten cards
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              Our proprietary robots use real pens and<br /> ink for an unforgettable VIP touch.
            </p>
          </div>

          {/* Fifth Item - Predictable pricing */}
          <div className='bg-[#FAEDED] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={predict} alt='predict icon'  className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Predictable pricing
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              Unlike CPCs, postage rates don’t change<br /> based on competition or who you’re<br /> targeting.
            </p>
          </div>

          {/* Sixth Item - Complimentary concierge */}
               <div className='bg-[#F1F1F1] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center'>
            <img src={compliment} alt='compliment icon'  className='mb-7 w-62 h-auto' />
            <h1 className='text-xl md:text-2xl font-bold mb-3'>
              Complimentary<br /> concierge service
            </h1>
            <p className='text-[#58595D] text-sm md:text-base'>
              DTC is in our DNA. Our pros will build your<br /> strategy and custom designs using battle-<br /> tested best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Every;