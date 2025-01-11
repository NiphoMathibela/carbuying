import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
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
          <ul>
            <li className="text-sm mb-2"><a href="#" className="text-white hover:text-gray-400">Facebook</a></li>
            <li className="text-sm mb-2"><a href="#" className="text-white hover:text-gray-400">Twitter</a></li>
            <li className="text-sm mb-2"><a href="#" className="text-white hover:text-gray-400">Instagram</a></li>
            <li className="text-sm mb-2"><a href="#" className="text-white hover:text-gray-400">LinkedIn</a></li>
            <li className="text-sm mb-2"><a href="#" className="text-white hover:text-gray-400">YouTube</a></li>
          </ul>
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