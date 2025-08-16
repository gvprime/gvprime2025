import { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="https://gvprime-assets-2025.s3.us-west-2.amazonaws.com/gvprime-Logo-Flat-2017.png" 
              alt="GV Prime" 
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 py-4">
            <a href="#services" className="block py-2 px-4 text-gray-300 hover:text-white">Services</a>
            <a href="#about" className="block py-2 px-4 text-gray-300 hover:text-white">About</a>
            <a href="#contact" className="block py-2 px-4 text-gray-300 hover:text-white">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}