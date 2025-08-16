import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
                src="https://gvprime-assets-2025.s3.us-west-2.amazonaws.com/gvprime-Logo-Flat-2017.png" 
                alt="GV Prime" 
                className="h-8 w-auto" // Changed from just h-8 to preserve aspect ratio
                width={154}  // Exact width from original design
                height={34}   // Exact height to match production
                loading="eager"
            />
        </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="group relative">
              <button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 flex items-center">
                <span>Services</span>
                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-slate-900 border border-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white">AI Consulting</a>
                <a href="#services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white">RAG Chatbots</a>
                <a href="#services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white">AI Agents</a>
              </div>
            </div>

            <a href="#about" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800">About</a>
            <a href="#journey" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800">Process</a>
            <a href="#faq" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800">FAQ</a>
            <a href="#contact" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mobile-dropdown">
                <button 
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen && (
                  <div className="pl-4">
                    <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-slate-800">AI Consulting</a>
                    <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-slate-800">RAG Chatbots</a>
                    <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-slate-800">AI Agents</a>
                  </div>
                )}
              </div>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">About</a>
              <a href="#journey" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Process</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">FAQ</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Contact</a>
              <div className="pt-4 border-t border-slate-800">
                <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-600">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}