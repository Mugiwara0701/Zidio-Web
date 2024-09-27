import React, { useEffect, useState } from 'react';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center px-4 md:px-20'>
      {/* Background Blur */}
      <div className='absolute inset-0 bg-cover bg-center z-[-1] opacity-60' style={{ backgroundImage: "url('https://zidio.in/assets/images/home-2/3430318.jpg')" }} />

      {/* Left Section */}
      <div className={`flex flex-col md:flex-row md:space-x-6 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'} transition-transform duration-700 backdrop-filter backdrop-blur-lg`}>
        <div className='flex items-center mb-2 md:mb-0'>
          <IoLocationOutline className='mr-1' />
          <span className='text-black dark:text-white font-bold cursor-pointer'>Bengaluru, Karnataka, India</span>
        </div>
        <div className='flex items-center mb-2 md:mb-0'>
          <MdEmail className='mr-1' />
          <span className='text-black dark:text-white font-bold cursor-pointer'>support@zidio.in</span>
        </div>
      </div>

      {/* Separator Line */}
      <div className='hidden md:block w-px h-10 bg-black dark:bg-white mx-4' />

      {/* Right Section */}
      <div className={`flex flex-col md:flex-row items-center space-x-0 md:space-x-6 px-4 py-2 backdrop-filter backdrop-blur-lg mt-4 md:mt-0 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'} transition-transform duration-700`}>
        <div className='flex items-center mb-2 md:mb-0'>
          <IoTimeOutline className='mr-1' />
          <span className='text-black dark:text-white font-bold'>9.00 am - 5.30 pm</span>
        </div>
        <div className="flex space-x-4">
          <FaFacebookF className='hover:text-blue-800 transition duration-500 cursor-pointer text-lg'/>
          <FaTwitter className='hover:text-blue-700 transition duration-500 cursor-pointer text-lg'/>
          <FaLinkedinIn className='hover:text-blue-400 transition duration-500 cursor-pointer text-lg'/>
          <FaYoutube className='hover:text-red-700 transition duration-500 cursor-pointer text-lg'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
