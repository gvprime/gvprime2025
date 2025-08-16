import { 
  Mail,
  Search,
  Code,
  Rocket,
  RefreshCw,
  ChevronRight
} from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We begin with a discovery session to understand your business challenges, goals, and technical environment.",
      icon: Mail,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20"
    },
    {
      title: "Solution Design",
      description: "Our architects create a customized AI solution blueprint, including technology recommendations and roadmap.",
      icon: Search,
      color: "text-cyan-400",
      bgColor: "bg-cyan-900/20"
    },
    {
      title: "Development Phase",
      description: "We build and train your AI models using your data, with regular checkpoints for alignment.",
      icon: Code,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20"
    },
    {
      title: "Deployment",
      description: "After rigorous testing, we deploy your AI solution with minimal disruption, including staff training.",
      icon: Rocket,
      color: "text-green-400",
      bgColor: "bg-green-900/20"
    },
    {
      title: "Ongoing Optimization",
      description: "We continuously monitor performance and refine your AI systems to adapt to evolving needs.",
      icon: RefreshCw,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Your AI Transformation Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven process for delivering successful AI solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - now properly connected to icons */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent z-0" 
               style={{ marginLeft: '18px' }}></div>

          {/* Timeline steps */}
          <div className="relative z-10 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-16">
                {/* Icon container - now perfectly centered on the line */}
                <div className={`absolute left-0 top-0 flex items-center justify-center w-9 h-9 rounded-full ${step.bgColor} ${step.color}`}
                     style={{ marginLeft: '8px' }}>
                  <step.icon className="w-5 h-5" />
                </div>

                {/* Content card */}
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/30 transition-colors">
                  <h3 className={`text-xl font-semibold mb-3 ${step.color}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                {/* Connector arrow - now properly aligned */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full transform translate-y-6 -translate-x-1/2">
                    <ChevronRight className="w-5 h-5 rotate-90 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors group"
          >
            <span>Start Your AI Journey</span>
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}