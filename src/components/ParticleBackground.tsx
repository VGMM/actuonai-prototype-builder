import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMouseMove = useRef<number>(0);
  const frameId = useRef<number | null>(null);

  const colors = ['#3E92CC', '#0A2463', '#6A87A5', '#8FB8DE'];
  
  // Generate a random particle
  const createParticle = (x: number, y: number): Particle => {
    return {
      id: Math.random(),
      x, 
      y,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 3 + 2
    };
  };

  useEffect(() => {
    // Initial particles
    const initialParticles: Particle[] = Array.from({ length: 10 }, () => {
      const x = Math.random() * (window.innerWidth - 20);
      const y = Math.random() * (window.innerHeight - 20);
      return createParticle(x, y);
    });
    
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only add particles occasionally to avoid too many
      const now = Date.now();
      if (now - lastMouseMove.current > 100) {
        lastMouseMove.current = now;
        
        // Add a new particle at mouse position with 30% chance
        if (Math.random() > 0.7) {
          setParticles(prev => {
            const newParticle = createParticle(e.clientX, e.clientY);
            // Keep only the latest 30 particles
            const updatedParticles = [...prev, newParticle];
            if (updatedParticles.length > 30) {
              return updatedParticles.slice(updatedParticles.length - 30);
            }
            return updatedParticles;
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none opacity-20"
          initial={{ 
            x: particle.x, 
            y: particle.y,
            opacity: 0.1
          }}
          animate={{
            x: particle.x + (Math.random() * 100 - 50),
            y: particle.y + (Math.random() * 100 - 50),
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
