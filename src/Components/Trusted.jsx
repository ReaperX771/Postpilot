import React from 'react'
import run from '../assets/images/rungumg.png'
import gum from '../assets/images/rungum.png'
import beard from '../assets/images/beardbrandg.png'
import band from '../assets/images/beardbrand.png'
import pro from '../assets/images/promixg.png'
import mix from '../assets/images/promix.png'
import scotch from '../assets/images/scotchg.png'
import porter from '../assets/images/scotch.png'

function Trusted() {
  return (
    <section id='company' className='py-8 md:py-15'>
        <div className='flex flex-col gap-15'>
            <div className='text-3xl font-semibold sm:text-3xl text-center md:text-5xl md:font-bold'>
               <h1>Trusted by thousands <br/> of top DTC <span  className="font-grace font-light text-[#009387]">brands.</span></h1>
            </div>

            <div className='flex flex-col gap-12 items-center md:flex md:flex-row md:gap-7 justify-center'>
               <div className='flex flex-col gap-5 justify-center items-center'>
                 <img className='' src={run}/>
                 <img className='w-40 ' src={gum}/>
               </div>

                <div className='flex flex-col gap-5 justify-center items-center'>
                  <img src={beard}/>
                  <img className='w-50' src={band}/>
                </div>
             
                <div className='flex flex-col gap-5 justify-center items-center'>
                  <img src={pro}/>
                  <img  className='w-40' src={mix}/>
                </div>

                 <div className='flex flex-col gap-5 justify-center items-center'>
                  <img src={scotch}/>
                  <img className='w-14' src={porter}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trusted