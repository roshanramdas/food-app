import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/foodlogo.jpeg" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-xl font-bold">Eat Fresh!</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
