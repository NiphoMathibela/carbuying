import React, { useContext } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { appContext } from '../context/AppContext'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaCar, FaSearch, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {

  const {menuIsOpen, setIsMenuOpen, isLoggedIn, LogOut} = useContext(appContext);
  let navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", icon: FaCar, label: "Home" },
    { path: "/carSearch", icon: FaSearch, label: "Search Cars" },
    { path: "/post-car", icon: FaPlus, label: "Post Car" },
    { path: "/sellCar", icon: FaCar, label: "Sell a car" },
    { path: "/dashboard", icon: FaCar, label: "Dashboard" },
  ];

  //Setting isMneuOpen to false to open menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev )
  }
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCar className="text-blue-600 text-2xl" />
            <span className="font-bold text-xl text-gray-800">UpWheel</span>
          </Link>

          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-md flex items-center space-x-2 transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link
                to="/"
                onClick={LogOut}
                className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                Sign Out
              </Link>
            ) : (
              <>
                <Link
                  to="/loginUser"
                  className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/registerUser"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className='cursor-pointer sm:hidden' onClick={toggleMenu}>
            {
              menuIsOpen ? <IoCloseSharp size={30} color='#3563E9'/> : <IoMenu size={30} color='#3563E9'/> 
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar