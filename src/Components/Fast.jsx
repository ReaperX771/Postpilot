import React from 'react';
import line from '../assets/images/line.png';

function Fast() {
  return (
    <section className='bg-[#E3F8F8]'>
      <div className='mt-14 pt-14 md:pt-30 py-7 w-[90%] mx-auto max-w-7xl'>
        <div className='text-3xl flex flex-col gap-2 font-semibold sm:text-3xl text-center md:text-5xl md:font-bold mb-12'>
          <h1>
            Fast launch. Fast results.<br />
            <span className="font-grace font-light text-[#009387]">Here's how.</span>
          </h1>
        </div>

        <div className='flex flex-col pl-3 gap-7'>
          {/* Step 01 */}
          <div className='flex items-baseline gap-10 md:gap-11'>
            <h1 className='text-[#00938766] font-grace text-4xl leading-none'>01</h1>
            <p className='text-[#2E2F3566] text-3xl font-bold tracking-tighter leading-none'>Segment</p>
          </div>

          {/* Step 02 */}
          <div className='flex items-baseline gap-7 md:gap-8'>
            <h1 className='text-[#00938766] font-grace text-4xl leading-none'>02</h1>
            <p className='text-[#2E2F3566] text-3xl font-bold tracking-tighter leading-none'>Design</p>
          </div>

          {/* Step 03 */}
          <div className='flex items-baseline gap-8'>
            <div className='relative'>
              <h1 className='text-[#009387] font-grace text-4xl leading-none'>03</h1>
              <img
                src={line}
                alt='vertical line'
                className='absolute left-1/2 transform -translate-x-1/2 h-20'
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-[#2E2F35] text-3xl font-bold tracking-tighter leading-none'>Send</p>
              <p className='text-[#58595D] text-sm md:text-base mt-2'>
                One-off announcements or automatically<br /> triggered flows. Customers receive their<br /> personalized cards within a week.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className='flex items-baseline gap-7'>
            <h1 className='text-[#00938766] font-grace text-4xl leading-none'>04</h1>
            <p className='text-[#2E2F3566] text-3xl font-bold tracking-tighter leading-none'>Convert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fast;