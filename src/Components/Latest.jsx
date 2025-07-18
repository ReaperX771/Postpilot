import React from 'react'
import three from '../assets/images/three.png'
import post from '../assets/images/post.jpg'
import the from '../assets/images/the.jpg'

function Latest() {
  return (
    <section className='bg-[#F3FAFA]'>
        <div className='py-8 md:py-15'>
            <div className="text-3xl font-semibold sm:text-3xl text-center md:text-5xl md:font-bold">
                <h1>Latest trends & <span  className="font-grace font-light text-[#009387]">insights</span></h1>
            </div>

            <div className='flex flex-col md:flex-row gap-7 p-10 md:p-0 md:mt-10 md:w-[80%] mx-auto'>
                <div className='flex flex-col gap-3'>
                    <img className='rounded-2xl' src={three}/>
                    <p className='text-xl font-bold'>3 Low-Cost Campaigns<br/> You Must Run to Win BFCM</p>
                </div>

                <div  className='flex flex-col gap-3'>
                    <img className='rounded-2xl' src={post}/>
                    <p className='text-xl font-bold'>Postcard Marketing: The<br/> Definitive Guide to High<br/> ROI [2022]</p>
                </div>

                <div  className='flex flex-col gap-3'>
                    <img className='rounded-2xl' src={the}/>
                    <p  className='text-xl font-bold'>The Ultimate Guide to Thank<br/> You Notes for Ecommerce</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Latest