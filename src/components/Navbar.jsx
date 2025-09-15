// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-yellow-500 text-black text-sm px-6 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-center sm:text-left">
        <span>Email: info@andreaconstructionservices.com</span>
        <span>Andrea Richard</span>
        <span>Call: (555) 123-4567</span>
      </div>

      {/* Main Nav */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold">ANDREA CONSTRUCTION INC</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Estimate
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-gray-800 text-white flex flex-col space-y-4 px-6 py-4 md:hidden">
          <a href="#hero" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Estimate
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
