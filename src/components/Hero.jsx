import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    // Generate neural network paths
    const generatedPaths = [
      {
        d: 'M15,20 Q50,50 85,30',
        delay: 0,
        color: '#3b82f6'
      },
      {
        d: 'M25,40 Q50,60 75,80',
        delay: 0.5,
        color: '#3b82f6'
      },
      // Add more paths for a richer network
      {
        d: 'M10,30 Q40,70 90,40',
        delay: 0.7,
        color: '#6366f1'
      },
      {
        d: 'M30,20 Q60,30 80,70',
        delay: 0.3,
        color: '#6366f1'
      }
    ];
    setPaths(generatedPaths);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#020617] to-[#0f172a]">
      {/* Neural Network Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full opacity-80">
          {paths.map((path, index) => (
            <path
              key={`path-${index}`}
              stroke={path.color}
              strokeWidth="1.5"
              fill="none"
              d={path.d}
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{
                animation: `draw 2.5s ease-out forwards ${path.delay}s`
              }}
            />
          ))}
        </svg>

        {/* Animated Nodes */}
        {[
          { x: 15, y: 20, type: 'input' },
          { x: 25, y: 40, type: 'hidden' },
          { x: 50, y: 50, type: 'hidden' },
          { x: 75, y: 80, type: 'hidden' },
          { x: 85, y: 30, type: 'output' },
          // Additional nodes
          { x: 10, y: 30, type: 'input' },
          { x: 30, y: 20, type: 'hidden' },
          { x: 90, y: 40, type: 'output' },
          { x: 80, y: 70, type: 'output' }
        ].map((node, index) => (
          <div 
            key={`node-${index}`}
            className={`
              absolute w-3 h-3 rounded-full
              ${node.type === 'input' ? 'bg-cyan-400' : 
                node.type === 'output' ? 'bg-emerald-400' : 
                'bg-indigo-500'}
              animate-pulse
            `}
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${index * 0.15}s`,
              filter: 'drop-shadow(0 0 8px currentColor)',
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Binary Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[5, 15, 25, 35, 45, 55, 65, 75, 85, 95].map((xPos, index) => (
          <div 
            key={`binary-${index}`}
            className="absolute top-0 h-[200%] w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent"
            style={{
              left: `${xPos}%`,
              animation: `binaryFall ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
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
          className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
          <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''} group-hover:translate-x-1`} />
        </a>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes binaryFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </section>
  );
}