import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Neural nodes
    const nodes = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
      radius: Math.random() * 3 + 1
    }))

    // Animate function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = '#3b82f6'
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
        
        // Update position with bounds checking
        node.x += node.vx
        node.y += node.vy
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      // Add glowing particles
      ctx.fillStyle = 'rgba(139, 92, 246, 0.8)'
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 3
        ctx.beginPath()
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          size, 0, Math.PI * 2
        )
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/30 z-1"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Transform Your Business with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Cutting-edge AI solutions that drive real business impact through machine learning and automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors flex items-center justify-center"
          >
            Get Started <ArrowRight className="ml-2" size={18} />
          </a>
          <a
            href="#journey"
            className="px-8 py-3 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-lg font-medium transition-colors"
          >
            Our Process
          </a>
        </div>
      </div>
    </header>
  )
}