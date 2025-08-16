import { 
  ClipboardList,
  Lightbulb,
  Cpu,
  Server,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const processes = [
    {
      title: "Comprehensive Audit",
      description: "We conduct a thorough analysis of your current digital infrastructure, identifying strengths, weaknesses, and opportunities for AI integration.",
      icon: ClipboardList,
      color: "text-blue-400"
    },
    {
      title: "Strategic Planning",
      description: "Our team develops a customized AI roadmap aligned with your business objectives and technical capabilities.",
      icon: Lightbulb,
      color: "text-purple-400"
    },
    {
      title: "Model Development",
      description: "We build and train AI models using your proprietary data, ensuring they meet your specific operational requirements.",
      icon: Cpu,
      color: "text-cyan-400"
    },
    {
      title: "System Integration",
      description: "Seamless implementation of AI solutions into your existing workflows with minimal disruption to operations.",
      icon: Server,
      color: "text-green-400"
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and refinement of AI systems to maximize ROI and adapt to evolving business needs.",
      icon: TrendingUp,
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">AI Implementation</span> Process
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A structured approach to ensure successful AI adoption
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className={`mb-4 overflow-hidden rounded-xl shadow-sm transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-md' : 'bg-white/80 hover:bg-white'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full p-6 text-left ${process.color}`}
              >
                <div className="flex items-center">
                  <process.icon className="w-6 h-6 mr-4" />
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                </div>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-6 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-slate-600 pl-10">{process.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            <span>Begin Your AI Transformation</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}