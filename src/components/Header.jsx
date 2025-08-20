import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Function to handle navigation with hash links
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    
    // If we're already on the home page, just scroll to section
    if (window.location.pathname === '/') {
      window.location.hash = hash;
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/${hash}`;
    }
  };

  // Function to handle regular page navigation
  const handlePageNavigation = (path) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    
    // Navigate to the page
    window.location.href = path;
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              handlePageNavigation('/');
            }}
            className="flex items-center"
          >
            <img 
              src="https://gvprime-assets-2025.s3.us-west-2.amazonaws.com/gvprime-Logo-Flat-2017.png" 
              alt="GV Prime" 
              className="h-8 w-auto"
              width={154}
              height={34}
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
                <a 
                  href="#ai-consulting" 
                  onClick={(e) => handleNavClick(e, '#ai-consulting')}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  AI Consulting
                </a>
                <a 
                  href="#rag-chatbots" 
                  onClick={(e) => handleNavClick(e, '#rag-chatbots')}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  RAG Chatbots
                </a>
                <a 
                  href="#ai-agents" 
                  onClick={(e) => handleNavClick(e, '#ai-agents')}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  AI Agents
                </a>
              </div>
            </div>

            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800"
            >
              About
            </a>
            <a 
              href="#journey" 
              onClick={(e) => handleNavClick(e, '#journey')}
              className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800"
            >
              Process
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, '#faq')}
              className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
            >
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
                    <a 
                      href="#ai-consulting" 
                      onClick={(e) => handleNavClick(e, '#ai-consulting')}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
                    >
                      AI Consulting
                    </a>
                    <a 
                      href="#rag-chatbots" 
                      onClick={(e) => handleNavClick(e, '#rag-chatbots')}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
                    >
                      RAG Chatbots
                    </a>
                    <a 
                      href="#ai-agents" 
                      onClick={(e) => handleNavClick(e, '#ai-agents')}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
                    >
                      AI Agents
                    </a>
                  </div>
                )}
              </div>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
              >
                About
              </a>
              <a 
                href="#journey" 
                onClick={(e) => handleNavClick(e, '#journey')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
              >
                Process
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleNavClick(e, '#faq')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
              >
                Contact
              </a>
              <div className="pt-4 border-t border-slate-800">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-600"
                >
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