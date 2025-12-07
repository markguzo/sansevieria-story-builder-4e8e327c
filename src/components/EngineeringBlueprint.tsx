import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  // Data nodes positioned on the orbital track
  const dataNodes = [
    { 
      value: "300M+", 
      label: "TONNES AVAILABLE / YR", 
      context: "Continuous Global Feedstock",
      angle: 270, // Top
      delay: 0.4 
    },
    { 
      value: "85%", 
      label: "GHG REDUCTION", 
      context: "Cleaner than virgin fossil fuels",
      angle: 150, // Bottom-Left
      delay: 0.6 
    },
    { 
      value: "$800", 
      label: "PROFIT / TONNE", 
      context: "High-yield asset conversion",
      angle: 30, // Bottom-Right
      delay: 0.8 
    },
  ];

  const orbitRadius = 160;
  const coreRadius = 70;
  const spokeWidth = 12;

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Faint Concentric Ripples Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          className="w-full h-full max-w-5xl" 
          viewBox="0 0 1000 1000"
          style={{ opacity: 0.04 }}
        >
          {[100, 200, 300, 400, 500, 600, 700].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="#00BFA5"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            style={{ 
              color: '#0A0A0A',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            The Global Opportunity
          </h2>
          <p 
            className="text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: '#666666' }}
          >
            Turning a global waste problem into a $180B advantage.
          </p>
        </motion.div>

        {/* Industrial Centrifuge Visualization */}
        <div className="relative w-full max-w-2xl mx-auto" style={{ height: '480px' }}>
          
          {/* SVG Layer - Orbital Track, Spokes, Core Ring */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 480"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Gradient for teal glow */}
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="70%" stopColor="#0A0A0A" />
                <stop offset="100%" stopColor="#00BFA5" stopOpacity="0.3" />
              </radialGradient>
              
              {/* Drop shadow filter */}
              <filter id="coreShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="8" stdDeviation="15" floodColor="#000000" floodOpacity="0.25"/>
              </filter>

              {/* Glass card shadow */}
              <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
              </filter>
            </defs>

            {/* LAYER A: Orbital Track - Dashed Grey Ring */}
            <motion.circle
              cx="250"
              cy="220"
              r={orbitRadius}
              fill="none"
              stroke="#CCCCCC"
              strokeWidth="4"
              strokeDasharray="16 8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            />

            {/* LAYER C: Structural Spokes - Thick Rectangular Arms */}
            {dataNodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const cx = 250;
              const cy = 220;
              
              // Calculate spoke path from core edge to orbit
              const startX = cx + Math.cos(rad) * coreRadius;
              const startY = cy + Math.sin(rad) * coreRadius;
              const endX = cx + Math.cos(rad) * orbitRadius;
              const endY = cy + Math.sin(rad) * orbitRadius;
              
              // Perpendicular offset for thickness
              const perpX = Math.cos(rad + Math.PI / 2) * (spokeWidth / 2);
              const perpY = Math.sin(rad + Math.PI / 2) * (spokeWidth / 2);

              return (
                <motion.polygon
                  key={`spoke-${i}`}
                  points={`
                    ${startX + perpX},${startY + perpY}
                    ${endX + perpX},${endY + perpY}
                    ${endX - perpX},${endY - perpY}
                    ${startX - perpX},${startY - perpY}
                  `}
                  fill="#B0B0B0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: node.delay - 0.2 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              );
            })}

            {/* Crosshair Markers at spoke-track intersections */}
            {dataNodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const crossX = 250 + Math.cos(rad) * orbitRadius;
              const crossY = 220 + Math.sin(rad) * orbitRadius;

              return (
                <g key={`cross-${i}`}>
                  <motion.line
                    x1={crossX - 8}
                    y1={crossY}
                    x2={crossX + 8}
                    y2={crossY}
                    stroke="#00BFA5"
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: node.delay + 0.1 }}
                  />
                  <motion.line
                    x1={crossX}
                    y1={crossY - 8}
                    x2={crossX}
                    y2={crossY + 8}
                    stroke="#00BFA5"
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: node.delay + 0.1 }}
                  />
                </g>
              );
            })}

            {/* LAYER B: Reactor Core - Black Circle with Teal Glow Ring */}
            <motion.circle
              cx="250"
              cy="220"
              r={coreRadius + 4}
              fill="none"
              stroke="#00BFA5"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.circle
              cx="250"
              cy="220"
              r={coreRadius}
              fill="#0A0A0A"
              filter="url(#coreShadow)"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            />

            {/* Core Text - $180B+ */}
            <motion.text
              x="250"
              y="210"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="28"
              fontWeight="900"
              fontFamily="Inter, sans-serif"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              $180B+
            </motion.text>
            
            <motion.text
              x="250"
              y="235"
              textAnchor="middle"
              fill="#888888"
              fontSize="8"
              fontFamily="'Roboto Mono', monospace"
              letterSpacing="0.1em"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ANNUAL VALUE UNLOCKED
            </motion.text>
          </svg>

          {/* Data Nodes - Glassmorphism Cards */}
          {dataNodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            // Position on orbital track
            const left = 50 + (Math.cos(rad) * orbitRadius) / 2.5;
            const top = (220 + Math.sin(rad) * orbitRadius) / 480 * 100;

            return (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: node.delay,
                  type: "spring",
                  stiffness: 120
                }}
              >
                <div 
                  className="px-5 py-4 md:px-6 md:py-5 rounded-2xl text-center min-w-[140px] md:min-w-[160px]"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(200, 200, 200, 0.4)',
                    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.12), 0 2px 8px -2px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <span 
                    className="block text-2xl md:text-3xl font-black leading-none"
                    style={{ color: '#0A0A0A', fontFamily: '"Inter", sans-serif' }}
                  >
                    {node.value}
                  </span>
                  <span 
                    className="block text-[9px] md:text-[10px] uppercase tracking-[0.1em] mt-2 font-medium"
                    style={{ color: '#666666', fontFamily: '"Roboto Mono", monospace' }}
                  >
                    {node.label}
                  </span>
                  <span 
                    className="block text-[10px] md:text-xs mt-1.5"
                    style={{ color: '#888888' }}
                  >
                    {node.context}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Technical annotation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p 
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#AAAAAA', fontFamily: '"Roboto Mono", monospace' }}
            >
              PRECISION ENGINEERING • CIRCULAR EFFICIENCY
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
