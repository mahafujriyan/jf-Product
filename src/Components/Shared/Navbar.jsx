import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaSearch, FaUser, FaMoon, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import Logo from './Logo';
import { AuthContext } from '../../Pages/Context/AuthContext';
import CartProvider, { useCart } from '../../Pages/Context/CartProvider';
const Navbar = () => {
       const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
const { cartItems } = useCart() 
  const handleLogout = async () => {
    await signOutUser();
    navigate('/login');
  };
     const navLinks = 
     <>
     <li><NavLink to='/'>Home </NavLink></li>
     <li><NavLink>Shop</NavLink></li>
     <li> <NavLink>Blog </NavLink></li>
       <li> <NavLink to='/contact'>Contact</NavLink></li>
     </>
    return (
      <div className="shadow-md border-b sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left  */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks}
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Right side */}
        <div className="hidden md:flex gap-4 items-center text-gray-600 text-lg relative">
          <button title="Search"><FaSearch /></button>
          <Link to="/cart" className="relative" title="Cart">
          <FaShoppingCart className="text-xl" />
          {cartItems?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>


          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <img
                src={user.photoURL || '/default-avatar.png'}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300"
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded-md py-2 z-50">
                  <p className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.displayName || 'User'}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" title="Login"><FaUser /></Link>
          )}
        </div>

       
        <button
          className="md:hidden text-xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>


      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            {navLinks}
          </ul>
          <div className="flex gap-4 mt-3 text-lg text-gray-700 items-center">
            <button><FaSearch /></button>
            <Link to="/cart" className="relative text-xl">
              <FaShoppingCart />
              {cartItems?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2"
                />
                <span className="text-sm">{user.displayName}</span>
                <button onClick={handleLogout} className="text-sm text-red-600">Logout</button>
              </div>
            ) : (
              <Link to="/login"><FaUser /></Link>
            )}
          </div>
        </div>
      )}
    </div>
    );
};

export default Navbar;