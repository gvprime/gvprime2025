// ServicesSection.jsx
import React, { useState } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Prime Brokerage",
      icon: "📊",
      description: "Comprehensive prime brokerage services for institutional clients and professional traders.",
      features: [
        "Global market access",
        "Advanced trading technology",
        "Securities lending",
        "Capital introduction",
        "Risk management solutions",
        "Custom reporting"
      ],
      details: "Our prime brokerage division provides sophisticated clients with a full suite of services including trade execution, clearing, settlement, and custody across global markets. We offer competitive financing rates and advanced risk management tools."
    },
    {
      id: 2,
      title: "Trading Technology",
      icon: "💻",
      description: "Cutting-edge trading platforms and infrastructure for optimal performance.",
      features: [
        "Low-latency execution",
        "FIX/API connectivity",
        "Custom platform development",
        "Co-location services",
        "Real-time analytics",
        "Algorithmic trading"
      ],
      details: "Leverage our high-performance trading infrastructure with direct market access, redundant connectivity, and institutional-grade platforms. Our technology solutions are designed for scalability and reliability."
    },
    {
      id: 3,
      title: "Risk Management",
      icon: "🛡️",
      description: "Sophisticated risk management tools and consulting services.",
      features: [
        "Portfolio stress testing",
        "Real-time risk monitoring",
        "Margin system integration",
        "Counterparty risk assessment",
        "Regulatory compliance",
        "Custom risk solutions"
      ],
      details: "Our risk management services help institutional clients identify, measure, and mitigate financial risks. We provide comprehensive tools for monitoring exposure across asset classes and jurisdictions."
    },
    {
      id: 4,
      title: "Advisory Services",
      icon: "👥",
      description: "Strategic consulting for financial institutions and trading firms.",
      features: [
        "Market structure analysis",
        "Technology optimization",
        "Operational efficiency",
        "Regulatory guidance",
        "Business development",
        "Competitive intelligence"
      ],
      details: "Our advisory team consists of industry veterans with deep expertise across trading, technology, and regulation. We provide tailored solutions to enhance your competitive advantage."
    }
  ];

  // Function to handle contact navigation
  const handleContactNavigation = () => {
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      window.location.hash = 'contact';
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on services page, navigate to home with contact hash
      window.location.href = '/#contact';
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            GV Prime provides comprehensive financial services and technology solutions for institutional clients and professional traders worldwide.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`mx-2 mb-4 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
              }`}
              onClick={() => setActiveService(index)}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{services[activeService].icon}</span>
                <h3 className="text-2xl font-bold text-gray-800">{services[activeService].title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                {services[activeService].description}
              </p>
              
              <p className="text-gray-600 mb-8">
                {services[activeService].details}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleContactNavigation}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <button 
                  onClick={handleContactNavigation}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Contact Sales
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-24 h-24 mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-4">Advanced Solutions</h3>
                <p className="mb-6 opacity-90">Our {services[activeService].title} service is trusted by top financial institutions worldwide.</p>
                <div className="bg-blue-500 inline-flex items-center py-2 px-4 rounded-full">
                  <span className="mr-2">98%</span>
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
            <div className="text-gray-600">Institutional Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-gray-600">Global Markets</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.1B+</div>
            <div className="text-gray-600">Daily Volume</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;