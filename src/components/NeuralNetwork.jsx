export default function NeuralNetwork() {
  // Node positions [x, y] in percentages
  const nodes = [
    [10, 50],  // Input layer
    [30, 30],  // Hidden layer 1
    [30, 70],
    [50, 50],  // Hidden layer 2
    [70, 30],
    [70, 70],
    [90, 50]   // Output layer
  ];

  // Connection paths (simplified quadratic curves)
  const connections = [
    'M10,50 Q30,30 50,50',
    'M10,50 Q30,70 50,50',
    'M50,50 Q70,30 90,50',
    'M50,50 Q70,70 90,50'
  ];

  return (
    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800">
      {/* SVG Connections */}
      <svg className="absolute inset-0 h-full w-full">
        {connections.map((d, i) => (
          <path
            key={`path-${i}`}
            stroke="#3b82f6"
            strokeWidth={i % 2 ? 1 : 1.5}
            strokeOpacity={i % 2 ? 0.4 : 0.8}
            fill="none"
            d={d}
            className="animate-draw [stroke-dasharray:1000] [stroke-dashoffset:1000]"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </svg>

      {/* Animated Nodes */}
      {nodes.map(([x, y], i) => (
        <div
          key={`node-${i}`}
          className={`
            absolute h-3 w-3 rounded-full
            ${
              i === 0 || i === nodes.length - 1 
                ? 'bg-blue-500 shadow-blue-500/50'  // Input/Output nodes
                : 'bg-indigo-500 shadow-indigo-500/50'  // Hidden nodes
            }
            shadow-lg animate-pulse
          `}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s'
          }}
        />
      ))}
    </div>
  );
}