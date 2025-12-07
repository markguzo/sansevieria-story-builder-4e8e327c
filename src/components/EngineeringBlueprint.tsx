import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  // Satellite data
  const satellites = [
    { value: "300M+", label: "TONNES / YR", angle: 210, delay: 0.2 },
    { value: "$600-800", label: "PROFIT / TONNE", angle: 330, delay: 0.4 },
    { value: "85%", label: "GHG REDUCTION", angle: 90, delay: 0.6 },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Concentric Rings Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          className="w-full h-full max-w-5xl" 
          viewBox="0 0 800 800"
          style={{ opacity: 0.08 }}
        >
          {[100, 180, 260, 340, 420].map((r, i) => (
            <circle
              key={i}
              cx="400"
              cy="400"
              r={r}
              fill="none"
              stroke="#00BFA5"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: '#00BFA5', fontFamily: '"Roboto Mono", monospace' }}
          >
            THE CIRCULAR ECONOMY ENGINE
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#1A1A1A' }}
          >
            Closing the Loop
          </h2>
        </motion.div>

        {/* Orbital System */}
        <div className="relative w-full max-w-3xl mx-auto aspect-square">
          
          {/* SVG for orbital paths and connections */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 600"
          >
            {/* Orbital Ring */}
            <motion.circle
              cx="300"
              cy="300"
              r="200"
              fill="none"
              stroke="#00BFA5"
              strokeWidth="1"
              strokeDasharray="8 4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            />

            {/* Connection Lines to Satellites */}
            {satellites.map((sat, i) => {
              const rad = (sat.angle * Math.PI) / 180;
              const x2 = 300 + Math.cos(rad) * 200;
              const y2 = 300 + Math.sin(rad) * 200;
              return (
                <motion.line
                  key={i}
                  x1="300"
                  y1="300"
                  x2={x2}
                  y2={y2}
                  stroke="#00BFA5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={isInView ? { opacity: 0.4, pathLength: 1 } : {}}
                  transition={{ duration: 0.6, delay: sat.delay }}
                />
              );
            })}
          </svg>

          {/* Central Core - $180B+ */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div 
              className="w-40 h-40 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center shadow-2xl"
              style={{ 
                background: 'linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
            >
              <span 
                className="text-4xl md:text-5xl font-black text-white leading-none"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                $180B+
              </span>
              <span 
                className="text-xs uppercase tracking-[0.2em] mt-2"
                style={{ color: '#00BFA5', fontFamily: '"Roboto Mono", monospace' }}
              >
                GLOBAL VALUE
              </span>
            </div>
          </motion.div>

          {/* Orbiting Satellites */}
          {satellites.map((sat, i) => {
            const rad = (sat.angle * Math.PI) / 180;
            // Position on the orbital path (radius ~33% from center)
            const orbitRadius = 33; // percentage
            const left = 50 + Math.cos(rad) * orbitRadius;
            const top = 50 + Math.sin(rad) * orbitRadius;

            return (
              <motion.div
                key={i}
                className="absolute z-10"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: sat.delay,
                  type: "spring",
                  stiffness: 120
                }}
              >
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center backdrop-blur-sm"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '2px solid #00BFA5',
                    boxShadow: '0 10px 40px -10px rgba(0, 191, 165, 0.3)'
                  }}
                >
                  <span 
                    className="text-lg md:text-2xl font-black leading-none"
                    style={{ color: '#1A1A1A', fontFamily: '"Inter", sans-serif' }}
                  >
                    {sat.value}
                  </span>
                  <span 
                    className="text-[8px] md:text-[10px] uppercase tracking-wider mt-1 text-center px-2"
                    style={{ color: '#666666', fontFamily: '"Roboto Mono", monospace' }}
                  >
                    {sat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Outer Arc - Break the Cycle */}
        <motion.div
          className="mt-16 md:mt-24 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Arc Progress Visualization */}
          <div className="relative flex justify-center mb-6">
            <svg 
              width="400" 
              height="120" 
              viewBox="0 0 400 120"
              className="w-full max-w-md"
            >
              {/* Background Arc - 91% Lost (Grey) */}
              <path
                d="M 30 100 A 170 170 0 0 1 370 100"
                fill="none"
                stroke="#E5E5E5"
                strokeWidth="16"
                strokeLinecap="round"
              />
              
              {/* Teal Arc - 9% Recycled (on the right side) */}
              <motion.path
                d="M 338 85 A 170 170 0 0 1 370 100"
                fill="none"
                stroke="#00BFA5"
                strokeWidth="16"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />

              {/* Labels */}
              <text 
                x="80" 
                y="70" 
                fill="#888888" 
                fontSize="11" 
                fontFamily="'Roboto Mono', monospace"
                textAnchor="middle"
              >
                91% LOST
              </text>
              
              <text 
                x="340" 
                y="70" 
                fill="#00BFA5" 
                fontSize="11" 
                fontFamily="'Roboto Mono', monospace"
                textAnchor="middle"
                fontWeight="bold"
              >
                9%
              </text>
            </svg>
          </div>

          {/* Caption */}
          <p 
            className="text-center text-base md:text-lg"
            style={{ color: '#444444' }}
          >
            <span style={{ color: '#00BFA5', fontWeight: 600 }}>Closing the loop</span> on global mismanagement
          </p>
          <p 
            className="text-center text-sm mt-2"
            style={{ color: '#888888' }}
          >
            We capture what others waste—turning liability into value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
