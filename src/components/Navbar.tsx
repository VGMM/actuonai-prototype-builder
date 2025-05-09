
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-navy">Actuon<span className="text-electric">AI</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-electric font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-electric font-medium transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-electric font-medium transition-colors">
              About Us
            </Link>
            <Link to="/consultation">
              <Button className="bg-electric hover:bg-electric/90">Book Consultation</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-navy focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 px-4 border-t">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-electric font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-gray-700 hover:text-electric font-medium"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-electric font-medium"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="block"
                  onClick={toggleMenu}
                >
                  <Button className="w-full bg-electric hover:bg-electric/90">Book Consultation</Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
