import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaSearch, FaUser, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
     const navLinks = 
     <>
     <li><NavLink to='/'>Home </NavLink></li>
     <li><NavLink>Shop</NavLink></li>
     <li> <NavLink>Blog </NavLink></li>
       <li> <NavLink>Contact</NavLink></li>
     </>
    return (
       <div className="shadow-md border-b sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left  */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks}
        </ul>

        {/* logo */}
        <div className="flex-shrink-0">
         <Logo></Logo>
        </div>

        {/* right */}
        <div className="hidden md:flex gap-4 items-center text-gray-600 text-lg">
          <Link to="/login" title="Login"><FaUser /></Link>
          <button title="Search"><FaSearch /></button>
          <button title="Dark Mode"><FaMoon /></button>
        </div>

        {/* mobile  */}
        <button
          className="md:hidden text-xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            {navLinks}
          </ul>
          <div className="flex gap-4 mt-3 text-lg text-gray-700">
            <Link to="/login"><FaUser /></Link>
            <button><FaSearch /></button>
            <button><FaMoon /></button>
          </div>
        </div>
      )}
    </div>
    );
};

export default Navbar;