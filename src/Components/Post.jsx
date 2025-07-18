import React from 'react';
import quote from '../assets/images/quote.png';
import obvi from '../assets/images/obvi.png';
import over from '../assets/images/overlander.png';
import paragon from '../assets/images/paragon.png';

function Post() {
  return (
    <section id='create' className='bg-[#fdf3ea]'>
      <div className='pt-10 md:pt-20 w-[90%] mx-auto py-7 max-w-7xl'>
        <div className='text-2xl font-semibold sm:text-3xl text-center md:text-5xl md:font-bold mb-12'>
          <h1>
            PostPilot makes it a <span className="font-grace text-[#009387] font-light">cinch</span> to<br /> send personalized, profit-<br />generating postcards.
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          {/* First Box */}
          <div className='flex flex-col p-6 rounded-lg shadow-md'>
            <h1 className='text-3xl md:text-5xl tracking-tighter font-bold mb-4'>
              <span className="font-grace text-[#009387] font-light">Powerful</span><br /> acquisition<br /> & retention
            </h1>
            <p className='text-[#58595D] mb-6'>
              Send one-off or triggered campaigns to customers<br /> & prospects. Target email leads with MailMatch™.
            </p>
            <div className='border border-[#D1C7BE] p-4 rounded-md'>
              <img src={quote} alt='quote icon' className='mb-2' />
              <p className='text-[#58595D] italic text-sm mb-4'>
                It’s like Klaviyo for direct mail. The results are<br /> absolutely insane.
              </p>
              <div className='flex justify-between items-center'>
                <p className='text-[#A89B90] text-sm'>Ash Melwani, CMO</p>
                <img className='w-10' src={obvi} alt='obvi logo' />
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className='flex flex-col p-6 rounded-lg shadow-md'>
            <h1 className='text-3xl md:text-5xl tracking-tighter font-bold mb-4'>
              <span className="font-grace text-[#009387] font-light">Fight back </span>against iOS<br /> updates, jacked-up<br /> CPCs & spam folders
            </h1>
            <p className='text-[#58595D] mb-6'>
              Deliver your message to all of your customers — for less than the<br /> cost of a click.
            </p>
            <div className='border border-[#D1C7BE] p-4 rounded-md'>
              <img src={quote} alt='quote icon' className='mb-2' />
              <p className='text-[#58595D] italic text-sm mb-4'>
                PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have
                been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.
              </p>
              <div className='flex justify-between items-center'>
                <p className='text-[#A89B90] text-sm'>Leah Keith, GM</p>
                <img className='w-10' src={over} alt='overlander logo' />
              </div>
            </div>
          </div>

          {/* Third Box - Centered Below */}
          <div className='md:col-span-2 flex justify-center mt-8'>
            <div className='flex flex-col p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3'>
              <h1 className='text-3xl md:text-5xl tracking-tighter font-bold mb-4'>
                Done for <span className="font-grace font-light text-[#009387]">you</span>
              </h1>
              <p className='text-[#58595D] mb-6'>
                From design & strategy to stamp-licking, our ecom<br /> experts help you every step of the way.
              </p>
              <div className='border border-[#D1C7BE] p-4 rounded-md'>
                <img src={quote} alt='quote icon' className='mb-2 mx-auto' />
                <p className='text-[#58595D] italic text-sm mb-4'>
                  The team is so knowledgeable and beyond helpful.<br />
                  I’m blown away by their communication, detail, and<br />
                  attentiveness and always feel like they have our best interest in mind. Definitely worth a try.
                </p>
                <div className='flex justify-between items-center'>
                  <p className='text-[#A89B90] text-sm'>Holly Davies, Marketing Director</p>
                  <img className='w-20' src={paragon} alt='paragon logo' />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Button */}
          <div className='md:col-span-2 flex justify-center mt-8'>
            <button className="w-l sm:w-auto px-6 py-3 md:px-7 md:py-2 bg-[#FF6D2C] duration-700 hover:border-[#e55f24] text-white text-base md:text-lg font-medium rounded-xl border-2 border-black hover:bg-[#e55f24] transition">
              Try It Risk-Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;