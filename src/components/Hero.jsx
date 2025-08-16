import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#020617] to-[#0f172a]">
      {/* Animated Nodes */}
      {[15, 25, 75, 85, 50].map((xPos, index) => (
        <div 
          key={index}
          className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse"
          style={{
            top: `${[20, 40, 30, 60, 80][index]}%`,
            left: `${xPos}%`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}

      {/* Binary Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[5, 25, 45, 65, 85].map((xPos, index) => (
          <div 
            key={index}
            className="absolute top-0 h-[200%] w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{
              left: `${xPos}%`,
              animation: `binaryFall ${15 + index * 5}s linear infinite`,
              animationDelay: `${index}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Transform Your Business with Intelligent AI Solutions
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
          Harness the power of artificial intelligence with our expert consulting, custom RAG chatbots, and intelligent agent development tailored to your business needs.
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
          <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
        </a>
      </div>

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes binaryFall {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}