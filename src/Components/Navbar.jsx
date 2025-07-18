import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  return (
    <>
      <section className="fixed w-full top-0 left-0 z-50 backdrop-blur-3xl shadow-md">
        <div className="max-w-[1200px] mx-auto px-4 py-5 flex justify-between items-center">
          <div className="z-20">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden cursor-pointer z-20">
            {isOpen ? (
              <IoClose size={30} onClick={toggleMenu} />
            ) : (
              <HiMenu size={30} onClick={toggleMenu} />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-20 items-center  font-medium text-[15px] ">
            <div className='flex gap-10'>
               <AnchorLink className='hover:text-[#009387] duration-500' offset={50} href="#resources">Resources</AnchorLink>
            <AnchorLink className='hover:text-[#009387] duration-500' offset={50} href="#success-stories">Success Stories</AnchorLink>
            <AnchorLink className='hover:text-[#009387] duration-500' offset={50} href="#company">Company</AnchorLink>
            <AnchorLink className='hover:text-[#009387] duration-500' offset={50} href="#pricing">Pricing</AnchorLink>
            </div>
           
            <div className="flex gap-4 items-center">
              <AnchorLink offset={50} href="#login">
                <button className="border-2 px-6 py-2 hover:bg-[#009387] duration-1000 hover:border-[#009387]  rounded-xl shadow-md shadow-black">Login</button>
              </AnchorLink>
              <AnchorLink offset={50} href="#create">
                <button className="border-2 border-black px-7 py-2  rounded-xl bg-[#FF6D2C] hover:bg-[#e55f24] hover:border-[#e55f24] transition duration-700 text-white shadow-md shadow-black">
                  Create free account
                </button>
              </AnchorLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white  text-black flex flex-col items-center justify-center gap-10 text-xl font-semibold transform transition-transform duration-700 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-10`}
        >
          <AnchorLink offset={50} href="#resources" onClick={toggleMenu} className='hover:text-[#009387] duration-500'>Resources</AnchorLink>
          <AnchorLink offset={50} href="#success-stories" onClick={toggleMenu} className='hover:text-[#009387] duration-500'>Success Stories</AnchorLink>
          <AnchorLink offset={50} href="#company" onClick={toggleMenu} className='hover:text-[#009387] duration-500'>Company</AnchorLink>
          <AnchorLink offset={50} href="#pricing" onClick={toggleMenu} className='hover:text-[#009387] duration-500'>Pricing</AnchorLink>
          <AnchorLink offset={50} href="#login" onClick={toggleMenu}>
            <button className="border-2 px-6 py-2 rounded-xl shadow-md hover:bg-[#009387] hover:border-[#009387] duration-1000 shadow-black">Login</button>
          </AnchorLink>
          <AnchorLink offset={50} href="#create" onClick={toggleMenu}>
            <button className="border-2 border-black px-7 py-2 rounded-xl bg-[#FF6D2C] hover:bg-[#e55f24] hover:border-[#e55f24] duration-700 transition text-white shadow-md shadow-black">
              Create free account
            </button>
          </AnchorLink>
        </div>
      </section>

      {/* Prevent content from hiding behind navbar */}
      <div className="h-[80px] md:h-[80px]"></div>
    </>
  );
}

export default Navbar;
