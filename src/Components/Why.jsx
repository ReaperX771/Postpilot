import React from 'react'
import chart from '../assets/images/chart.png'

function Why() {
  return (
   <section className='bg-[#f3fafa] py-8 md:py-12"'>
       <div className='flex flex-col mt-14 md:mt-20 gap-13'>
          <div className='text-3xl font-semibold sm:text-3xl text-center md:text-5xl md:font-bold'>
            <h1>Why use direct mail? <br/> It <span  className="font-grace font-light text-[#009387]">works</span> like crazy.</h1>
          </div>

          <div className='w-[60%] mx-auto flex flex-col gap-15 justify-center items-center md:flex-row md:justify-between '>
            <div className='text-center flex flex-col gap-3'>
              <h1 className='text-5xl font-bold'>28X</h1>
              <p className='text-[#58595D] text-sm'>Higher response rate than email<br/> & digital</p>
            </div>

            <div className='flex flex-col gap-3'>
               <img className='w-40' src={chart}/>
               <p className='text-[#58595D] text-sm text-center'>Your messages get read</p>
            </div>

            <div className='text-center flex flex-col gap-3'>
              <h1 className='text-5xl font-bold'>17 Days</h1>
              <p className='text-[#58595D] text-sm'>Lifespan of a postcard vs.<br/> seconds for email or SMS</p>
            </div>
          </div>
       </div>
   </section>
  )
}

export default Why