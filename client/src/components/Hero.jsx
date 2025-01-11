import React, { useState, useEffect } from 'react'
import vw from '../assets/vw.png'
import Hero2 from './Hero2';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Hero = () => {
    const navigate = useNavigate();
  
    const searchForCar = () => {
      navigate("/carSearch");
    }
  
    return (
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604505297763-88cd7705316b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1463&q=80")' }}>
        <div className="h-full w-full bg-black/30 backdrop-brightness-75 flex justify-center items-center">
          <div className="w-4/5 max-w-md p-4 rounded-md bg-white/50 backdrop-blur-md sm:p-6">
            <h1 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Find Your Dream Car</h1>
            <SearchBar searchFunction={searchForCar} />
            <p className="text-base text-white mt-4 sm:text-lg">Search from thousands of cars and find the one that suits your needs.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;