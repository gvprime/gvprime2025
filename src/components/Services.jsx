import { BrainCircuit, Bot, Cpu } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <BrainCircuit size={36} className="text-white" />,
      title: "AI Strategy Consulting",
      description: "Custom AI roadmaps for your business objectives",
      features: ["Feasibility analysis", "Technology selection", "ROI forecasting"]
    },
    {
      icon: <Bot size={36} className="text-white" />,
      title: "RAG Chatbots",
      description: "Intelligent chatbots powered by your data",
      features: ["Enterprise data integration", "Natural conversations", "Continuous learning"]
    },
    {
      icon: <Cpu size={36} className="text-white" />,
      title: "AI Agents",
      description: "Autonomous agents for business automation",
      features: ["Workflow automation", "System integration", "24/7 availability"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-gray-300 text-center mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}