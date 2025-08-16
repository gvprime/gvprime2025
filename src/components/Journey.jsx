import { ClipboardList, Code, Settings, BarChart, Rocket } from 'lucide-react'

export default function Journey() {
  const steps = [
    {
      icon: <ClipboardList className="text-blue-400" size={24} />,
      title: "Discovery Workshop",
      description: "We analyze your business needs and identify AI opportunities",
      color: "border-blue-500"
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "Solution Design",
      description: "Our architects create a customized AI implementation plan",
      color: "border-purple-500"
    },
    {
      icon: <Settings className="text-cyan-400" size={24} />,
      title: "Development",
      description: "We build and train your AI models with iterative feedback",
      color: "border-cyan-500"
    },
    {
      icon: <BarChart className="text-emerald-400" size={24} />,
      title: "Testing & Optimization",
      description: "Rigorous testing ensures peak performance before launch",
      color: "border-emerald-500"
    },
    {
      icon: <Rocket className="text-orange-400" size={24} />,
      title: "Deployment & Scaling",
      description: "We deploy your solution and plan for future growth",
      color: "border-orange-500"
    }
  ]

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Your AI Transformation Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven 5-phase process for successful AI implementation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative p-6 bg-slate-800/50 border-t-4 ${step.color} rounded-lg shadow-lg transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-slate-700 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
