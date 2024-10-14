import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">T4C2</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/art" className="hover:text-gray-300">Art Gallery</Link>
          <Link to="/music" className="hover:text-gray-300">Music Studio</Link>
          <Link to="/digital" className="hover:text-gray-300">Digital Workshop</Link>
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;