import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-7">
      <div className="text-4xl font-bold mb-4 lg:mb-0">Accounting</div>
      {/* Navigation Links */}
      <ul
        className={`font-bold gap-7 md:flex ${
          isMenuOpen ? "flex flex-col" : "hidden"
        } 
           lg:flex `}
      >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>CASE STUDY</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>

      <div className="flex">
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none ml-3"
          >
            &#8801;{" "}
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border-gray border-[1px] p-2 pr-8"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
