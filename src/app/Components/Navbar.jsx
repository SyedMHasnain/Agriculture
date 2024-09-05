import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold text-green-600">
              Agriplus
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#home"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </a>
            <a
              href="#investment"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Investment Portal
            </a>
            <a
              href="#contact"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
