import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center p-7'>
      <div className='text-4xl font-bold'>Accounting</div>
      {/* Hamburger Menu Button */}
      <div className='lg:hidden'>
        <button
          onClick={toggleMenu}
          className='text-2xl focus:outline-none'
        >
          &#8801; {/* Unicode character for hamburger menu */}
        </button>
      </div>
      {/* Navigation Links */}
      <ul
        className={`font-bold gap-7 md:flex ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex`}
      >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>CASE STUDY</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      
      <div className=''>
        <input
          type='text'
          placeholder='Search'
          className='border-gray border-[1px] p-2'
        />
      </div>
    </div>
  );
};

export default Navbar;
