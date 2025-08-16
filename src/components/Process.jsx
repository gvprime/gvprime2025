import { Mail, Search, Code, Rocket, RefreshCw } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Mail size={20} />,
      title: "Initial Consultation",
      description: "We begin with a discovery session to understand your business challenges.",
      color: "text-blue-400"
    },
    // Add other steps
  ];

  return (
    <section id="journey" className="section bg-gradient-to-b from-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Your AI Transformation Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven process for delivering successful AI solutions
          </p>
        </div>

        <div className="timeline relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="timeline-step relative mb-10 pl-16">
              <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 z-10"></div>
              <div className={`timeline-content bg-card-bg p-6 rounded-xl transition-all hover:translate-x-2 ${step.color}`}>
                <h4 className="flex items-center font-semibold mb-3">
                  {step.icon}
                  <span className="ml-2">{step.title}</span>
                </h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}