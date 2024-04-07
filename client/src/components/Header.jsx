import React from 'react';
import travelGuideLogo from '../../Public/travelGuideLogo.jpeg';

function Header() {
  return (
    <nav className="p-3">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={travelGuideLogo} className="h-10 sm:h-10 rounded-full" alt="Travel Guide Logo" /> 
            <span className="text-black text-2xl font-semibold ml-2">Travel Guide</span>
          </a>
        </div>
      
        <div className="flex items-center mx-4 space-x-8"> 
          <ul className="flex space-x-8 text-black">
            <li><a href="#" className="hover:text-green-900 font-semibold">Home</a></li>
            <li><a href="" className="hover:text-green-900 font-semibold" >About</a></li>
            <li><a href="#" className="hover:text-green-900 font-semibold">Services</a></li>
            <li><a href="#" className="hover:text-green-900 font-semibold">Pricing</a></li>
            <li><a href="#" className="hover:text-green-900 font-semibold">ContactFAQs</a></li>
            <li><a href="#" className="hover:text-green-900 font-semibold">Features</a></li>
          </ul>
          <div className="mr-4"> 
            <button className="bg-green-600 text-white   px-3 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out font-semibold">Get started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
