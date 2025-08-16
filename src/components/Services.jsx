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
  Cloud
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: "Develop a tailored AI roadmap aligned with your business objectives and technical capabilities.",
      icon: BrainCircuit,
      features: [
        { icon: Zap, text: "Strategic feasibility analysis" },
        { icon: Layers, text: "Technology stack selection" },
        { icon: Network, text: "System architecture design" },
        { icon: RefreshCw, text: "Process automation planning" }
      ]
    },
    {
      title: "Custom RAG Chatbots",
      description: "Intelligent chatbots powered by your proprietary data for accurate, context-aware responses.",
      icon: Bot,
      features: [
        { icon: Database, text: "Enterprise data integration" },
        { icon: Shield, text: "Secure knowledge retrieval" },
        { icon: MessageSquare, text: "Natural conversation flows" },
        { icon: TrendingUp, text: "Continuous learning" }
      ]
    },
    {
      title: "AI Agent Development",
      description: "Custom autonomous agents that automate complex tasks and decision-making processes.",
      icon: Cpu,
      features: [
        { icon: RefreshCw, text: "Workflow automation" },
        { icon: GitMerge, text: "System integration" },
        { icon: Users, text: "Customer engagement" },
        { icon: Cloud, text: "Scalable deployment" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to solve your business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)] hover:border-blue-400/40 transition-colors hover:translate-y-[-8px]"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-center text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6 space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-blue-900/10 rounded-lg p-1.5 mr-3 flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className="block text-center text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}