import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow">
          <p>&copy; 2024 Fresh Food. All rights reserved.</p>
        </div>
        <div className="flex-grow-0">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Feedback</a></li>
          </ul>
        </div>
        <div className="flex-grow text-right">
          <p>Phone: 647-855-5555</p>
          <p>Address: 123 Front Street, Toronto, ON</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
