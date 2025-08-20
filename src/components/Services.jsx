import { 
  BrainCircuit,
  Bot,
  Cpu,
  Zap,
  Layers,
  Network,
  RefreshCw,
  Database,
  Shield,
  MessageSquare,
  TrendingUp,
  GitMerge,
  Users,
  Cloud,
  BarChart3,
  Globe,
  Lock,
  Code2,
  Server,
  Workflow
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "ai-consulting",
      aliases: ["ai-strategy", "strategy"],
      title: "AI Strategy Consulting",
      shortTitle: "AI Consulting",
      description: "Develop a tailored AI roadmap aligned with your business objectives and technical capabilities.",
      icon: BrainCircuit,
      features: [
        { icon: Zap, text: "Strategic feasibility analysis" },
        { icon: Layers, text: "Technology stack selection" },
        { icon: Network, text: "System architecture design" },
        { icon: RefreshCw, text: "Process automation planning" }
      ],
      details: "Our AI consulting service helps organizations navigate the complex landscape of artificial intelligence. We assess your current infrastructure, identify high-impact AI opportunities, and create a phased implementation plan that aligns with your business goals.",
      useCases: [
        "Enterprise digital transformation",
        "Competitive AI capability assessment",
        "AI investment prioritization",
        "Regulatory compliance planning"
      ]
    },
    {
      id: "rag-chatbots",
      aliases: ["chatbots", "rag"],
      title: "Custom RAG Chatbots",
      shortTitle: "RAG Chatbots",
      description: "Intelligent chatbots powered by your proprietary data for accurate, context-aware responses.",
      icon: Bot,
      features: [
        { icon: Database, text: "Enterprise data integration" },
        { icon: Shield, text: "Secure knowledge retrieval" },
        { icon: MessageSquare, text: "Natural conversation flows" },
        { icon: TrendingUp, text: "Continuous learning" }
      ],
      details: "Our Retrieval-Augmented Generation (RAG) chatbots combine the power of large language models with your proprietary data to deliver accurate, context-aware responses.",
      useCases: [
        "Customer support automation",
        "Internal knowledge management",
        "Regulatory compliance assistance",
        "Personalized customer interactions"
      ]
    },
    {
      id: "ai-agents",
      aliases: ["agents", "automation"],
      title: "AI Agent Development",
      shortTitle: "AI Agents",
      description: "Custom autonomous agents that automate complex tasks and decision-making processes.",
      icon: Cpu,
      features: [
        { icon: RefreshCw, text: "Workflow automation" },
        { icon: GitMerge, text: "System integration" },
        { icon: Users, text: "Customer engagement" },
        { icon: Cloud, text: "Scalable deployment" }
      ],
      details: "Our AI agents are sophisticated systems capable of autonomous operation, making decisions, and executing complex workflows without human intervention.",
      useCases: [
        "Automated financial analysis",
        "Supply chain optimization",
        "Personalized recommendation engines",
        "Predictive maintenance systems"
      ]
    },
    {
      id: "data-platform",
      aliases: ["data", "analytics"],
      title: "Data Intelligence Platform",
      shortTitle: "Data Platform",
      description: "End-to-end data solutions that transform raw information into actionable insights.",
      icon: BarChart3,
      features: [
        { icon: Database, text: "Data pipeline architecture" },
        { icon: Workflow, text: "ETL/ELT processes" },
        { icon: Server, text: "Data warehousing solutions" },
        { icon: TrendingUp, text: "Predictive analytics" }
      ],
      details: "Our data intelligence platform integrates disparate data sources into a unified view, enabling advanced analytics and business intelligence.",
      useCases: [
        "Business performance dashboarding",
        "Customer behavior analysis",
        "Operational efficiency tracking",
        "Market trend identification"
      ]
    },
    {
      id: "cybersecurity-ai",
      aliases: ["security", "cybersecurity"],
      title: "Cybersecurity AI",
      shortTitle: "Cybersecurity",
      description: "Advanced threat detection and prevention systems powered by artificial intelligence.",
      icon: Shield,
      features: [
        { icon: Lock, text: "Anomaly detection" },
        { icon: Globe, text: "Network security" },
        { icon: Code2, text: "Vulnerability assessment" },
        { icon: Server, text: "Incident response" }
      ],
      details: "Our cybersecurity AI solutions leverage machine learning to identify and respond to threats in real-time.",
      useCases: [
        "Real-time threat detection",
        "Fraud prevention systems",
        "Compliance monitoring",
        "Security posture assessment"
      ]
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

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash) {
        // Find service by ID or alias
        const serviceIndex = services.findIndex(service => 
          service.id === hash || (service.aliases && service.aliases.includes(hash))
        );
        
        if (serviceIndex !== -1) {
          setActiveService(serviceIndex);
          
          // Scroll to services section
          setTimeout(() => {
            const element = document.getElementById('services');
            if (element) {
              const yOffset = -80; // Adjust for fixed header if needed
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [services]);

  // Get the current service to avoid bracket notation in JSX
  const currentService = services[activeService];
  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation
          </p>
        </div>

        {/* Service Navigation Tabs - Fixed with equal sizing */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 px-2">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  window.location.hash = service.id;
                }}
                className={`flex-1 min-w-[140px] md:flex-none md:min-w-0 px-3 py-2 rounded-lg font-medium transition-all flex items-center justify-center text-sm md:text-base md:px-5 md:py-3 ${
                  activeService === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <ServiceIcon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                {/* Show short title on mobile, full title on desktop */}
                <span className="hidden md:inline">{service.title}</span>
                <span className="md:hidden">{service.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Main Service Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700 mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mr-3 md:mr-4">
                    <CurrentIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{currentService.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                  {currentService.description}
                </p>
                
                <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                  {currentService.details}
                </p>
                
                <div className="mb-6 md:mb-8">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Key Use Cases</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {currentService.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center bg-slate-700/50 rounded-lg p-2 md:p-3">
                        <div className="bg-blue-900/20 rounded-lg p-1 md:p-1.5 mr-2 md:mr-3">
                          <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-xs md:text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <button 
                    onClick={handleContactNavigation}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-2.5 px-4 md:px-6 rounded-lg transition duration-300 flex items-center text-sm md:text-base"
                  >
                    Request Consultation
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  <button className="border border-blue-600 text-blue-400 hover:bg-blue-900/20 font-medium py-2 md:py-2.5 px-4 md:px-6 rounded-lg transition duration-300 text-sm md:text-base">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-slate-900 rounded-lg p-4 md:p-6 h-full">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Service Features</h4>
                  <div className="space-y-2 md:space-y-4">
                    {currentService.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={idx} className="flex items-start">
                          <div className="bg-blue-900/20 rounded-lg p-1 md:p-1.5 mr-2 md:mr-3 flex-shrink-0">
                            <FeatureIcon className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                          </div>
                          <span className="text-gray-300 text-xs md:text-sm">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-700">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Delivery Timeline</h4>
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="text-gray-400 text-xs md:text-sm">Strategy Phase</span>
                      <span className="text-blue-400 text-xs md:text-sm">2-4 weeks</span>
                    </div>
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="text-gray-400 text-xs md:text-sm">Development</span>
                      <span className="text-blue-400 text-xs md:text-sm">4-12 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs md:text-sm">Deployment</span>
                      <span className="text-blue-400 text-xs md:text-sm">2-3 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* All Services Grid */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">All Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                      <ServiceIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
                    
                    <button 
                      onClick={() => {
                        setActiveService(index);
                        window.location.hash = service.id;
                      }}
                      className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium inline-flex items-center"
                    >
                      Learn More
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Why Choose GV Prime AI Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">95%</div>
                <div className="text-gray-400 text-xs md:text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">150+</div>
                <div className="text-gray-400 text-xs md:text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">40%</div>
                <div className="text-gray-400 text-xs md:text-sm">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">24/7</div>
                <div className="text-gray-400 text-xs md:text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}