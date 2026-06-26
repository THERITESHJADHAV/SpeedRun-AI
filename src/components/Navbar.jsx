import React from 'react';
import { Cube16Solid } from './Icons';

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Cube16Solid className="text-forsythia text-2xl" />
        <span className="font-mono font-bold tracking-tight text-xl text-arctic">SpeedRun AI</span>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-mystic">
        <a href="#features" className="hover:text-forsythia transition-colors duration-200 ease-out">Platform</a>
        <a href="#pricing" className="hover:text-forsythia transition-colors duration-200 ease-out">Pricing</a>
        <a href="#customers" className="hover:text-forsythia transition-colors duration-200 ease-out">Customers</a>
      </div>
      <div>
        <button className="bg-forsythia text-oceanic font-semibold py-2 px-5 rounded-md hover:bg-saffron transition-all duration-200 ease-out shadow-[0_0_15px_rgba(255,200,1,0.3)]">
          Get Started
        </button>
      </div>
    </nav>
  );
};
