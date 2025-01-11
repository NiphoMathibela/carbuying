import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#3563E9] text-white p-4 mt-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <p className="text-sm">Welcome to UpWheel, your premier online platform for buying and selling cars. Our mission is to provide a safe, convenient, and hassle-free experience for car enthusiasts to find their dream ride. With a vast selection of cars from trusted sellers, we strive to make the car buying process easier and more enjoyable.</p>
          <p className="text-sm">At UpWheel, we believe that buying a car should be a fun and exciting experience. That's why we've created a platform that allows you to browse, compare, and purchase cars from the comfort of your own home. Our team is dedicated to providing exceptional customer service and ensuring that every transaction is smooth and secure.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">Quick Links</h5>
          <ul>
            <li className="text-sm mb-2"><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
            <li className="text-sm mb-2"><Link to="/about" className="text-white hover:text-gray-400">About Us</Link></li>
            <li className="text-sm mb-2"><Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link></li>
            <li className="text-sm mb-2"><Link to="/faq" className="text-white hover:text-gray-400">FAQ</Link></li>
            <li className="text-sm mb-2"><Link to="/terms" className="text-white hover:text-gray-400">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">Social Media</h5>
          <div className="flex flex-wrap justify-center">
            <a href="#" className="text-white hover:text-gray-400 mr-4 mb-2"><FaFacebook className="mr-2" /> Facebook</a>
            <a href="#" className="text-white hover:text-gray-400 mr-4 mb-2"><FaTwitter className="mr-2" /> Twitter</a>
            <a href="#" className="text-white hover:text-gray-400 mr-4 mb-2"><FaInstagram className="mr-2" /> Instagram</a>
            <a href="#" className="text-white hover:text-gray-400 mr-4 mb-2"><FaLinkedin className="mr-2" /> LinkedIn</a>
            <a href="#" className="text-white hover:text-gray-400 mr-4 mb-2"><FaYoutube className="mr-2" /> YouTube</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center p-4">
        <p className="text-sm">&copy; 2023 UpWheel. All rights reserved.</p>
        <p className="text-sm">Designed and Developed by <a href="#" className="text-white hover:text-gray-400">Nhlakanipho Mathibela</a></p>
      </div>
    </div>
  );
};

export default Footer;