import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  // Satellite positions in triangle formation
  const satellites = [
    { value: "300M+", label: "TONNES AVAILABLE", angle: 270, delay: 0.3 }, // Top
    { value: "85%", label: "GHG REDUCTION", angle: 150, delay: 0.5 },      // Bottom-Left
    { value: "$600-800", label: "PROFIT / TONNE", angle: 30, delay: 0.7 }, // Bottom-Right
  ];

  const centerRadius = 90; // px - core circle radius
  const satelliteRadius = 50; // px - satellite circle radius
  const orbitDistance = 180; // px - distance from center to satellites

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Concentric Ripple Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '-10%' }}>
        <svg 
          className="w-full h-full max-w-4xl" 
          viewBox="0 0 800 800"
          style={{ opacity: 0.06 }}
        >
          {[80, 160, 240, 320, 400, 480].map((r, i) => (
            <circle
              key={i}
              cx="400"
              cy="400"
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
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: '#00BFA5', fontFamily: '"Roboto Mono", monospace' }}
          >
            THE MOLECULAR SYSTEM
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#1A1A1A' }}
          >
            Connected Ecosystem
          </h2>
        </motion.div>

        {/* Hub & Spoke System */}
        <div className="relative w-full max-w-lg mx-auto" style={{ height: '420px' }}>
          
          {/* SVG Layer for Connector Lines */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 420"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connector Lines from satellites to center */}
            {satellites.map((sat, i) => {
              const rad = (sat.angle * Math.PI) / 180;
              // Center point
              const cx = 200;
              const cy = 180;
              // Satellite center position
              const sx = cx + Math.cos(rad) * orbitDistance;
              const sy = cy + Math.sin(rad) * orbitDistance;
              // Calculate line endpoints (from edge of center to edge of satellite)
              const lineStartX = cx + Math.cos(rad) * (centerRadius * 0.55);
              const lineStartY = cy + Math.sin(rad) * (centerRadius * 0.55);
              const lineEndX = sx - Math.cos(rad) * (satelliteRadius * 0.55);
              const lineEndY = sy - Math.sin(rad) * (satelliteRadius * 0.55);

              return (
                <motion.line
                  key={i}
                  x1={lineStartX}
                  y1={lineStartY}
                  x2={lineEndX}
                  y2={lineEndY}
                  stroke="#CCCCCC"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: sat.delay - 0.2 }}
                />
              );
            })}

            {/* Connection dots at line ends */}
            {satellites.map((sat, i) => {
              const rad = (sat.angle * Math.PI) / 180;
              const cx = 200;
              const cy = 180;
              const dotX = cx + Math.cos(rad) * (centerRadius * 0.55);
              const dotY = cy + Math.sin(rad) * (centerRadius * 0.55);

              return (
                <motion.circle
                  key={`dot-${i}`}
                  cx={dotX}
                  cy={dotY}
                  r="4"
                  fill="#00BFA5"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: sat.delay }}
                />
              );
            })}
          </svg>

          {/* Central Core - $180B+ */}
          <motion.div
            className="absolute left-1/2 z-20"
            style={{ 
              top: '180px',
              transform: 'translate(-50%, -50%)',
              width: `${centerRadius * 2}px`,
              height: `${centerRadius * 2}px`
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div 
              className="w-full h-full rounded-full flex flex-col items-center justify-center"
              style={{ 
                background: 'linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%)',
                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.5)'
              }}
            >
              <span 
                className="text-3xl md:text-4xl font-black text-white leading-none"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                $180B+
              </span>
              <span 
                className="text-[9px] uppercase tracking-[0.15em] mt-1.5 text-center px-2"
                style={{ color: '#00BFA5', fontFamily: '"Roboto Mono", monospace' }}
              >
                GLOBAL VALUE
              </span>
            </div>
          </motion.div>

          {/* Orbiting Satellites */}
          {satellites.map((sat, i) => {
            const rad = (sat.angle * Math.PI) / 180;
            const cx = 50; // center percentage
            const cy = 180 / 420 * 100; // center y percentage
            const left = cx + (Math.cos(rad) * orbitDistance) / 4; // scale to percentage
            const top = (180 + Math.sin(rad) * orbitDistance) / 420 * 100;

            return (
              <motion.div
                key={i}
                className="absolute z-10"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)',
                  width: `${satelliteRadius * 2}px`,
                  height: `${satelliteRadius * 2}px`
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
                  className="w-full h-full rounded-full flex flex-col items-center justify-center"
                  style={{ 
                    background: '#FFFFFF',
                    border: '1.5px solid #DDDDDD',
                    boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <span 
                    className="text-sm md:text-base font-bold leading-none"
                    style={{ color: '#1A1A1A', fontFamily: '"Inter", sans-serif' }}
                  >
                    {sat.value}
                  </span>
                  <span 
                    className="text-[7px] uppercase tracking-wider mt-1 text-center px-1 leading-tight"
                    style={{ color: '#888888', fontFamily: '"Roboto Mono", monospace' }}
                  >
                    {sat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Narrative text below the system */}
          <motion.p
            className="absolute bottom-0 left-0 right-0 text-center text-sm"
            style={{ color: '#666666' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            The inevitable result of circular efficiency
          </motion.p>
        </div>

        {/* Bottom Anchor - Arc Meter */}
        <motion.div
          className="mt-20 md:mt-24 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Label */}
          <p 
            className="text-center text-xs uppercase tracking-[0.2em] mb-6"
            style={{ color: '#888888', fontFamily: '"Roboto Mono", monospace' }}
          >
            CURRENT INDUSTRY STATUS: BREAK THE CYCLE
          </p>

          {/* Arc Gauge */}
          <div className="relative flex justify-center">
            <svg 
              width="320" 
              height="100" 
              viewBox="0 0 320 100"
              className="w-full max-w-xs"
            >
              {/* Background Arc - Full gauge track */}
              <path
                d="M 20 90 A 140 140 0 0 1 300 90"
                fill="none"
                stroke="#E8E8E8"
                strokeWidth="14"
                strokeLinecap="round"
              />
              
              {/* Grey Arc - 91% Lost */}
              <motion.path
                d="M 20 90 A 140 140 0 0 1 275 65"
                fill="none"
                stroke="#C0C0C0"
                strokeWidth="14"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.1 }}
              />
              
              {/* Teal Arc - 9% Recycled */}
              <motion.path
                d="M 280 70 A 140 140 0 0 1 300 90"
                fill="none"
                stroke="#00BFA5"
                strokeWidth="14"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
              />

              {/* Percentage Labels */}
              <text 
                x="70" 
                y="55" 
                fill="#999999" 
                fontSize="11" 
                fontFamily="'Roboto Mono', monospace"
              >
                91% LOST
              </text>
              
              <text 
                x="255" 
                y="40" 
                fill="#00BFA5" 
                fontSize="11" 
                fontFamily="'Roboto Mono', monospace"
                fontWeight="600"
              >
                9%
              </text>
            </svg>
          </div>

          {/* Caption */}
          <p 
            className="text-center text-base mt-6"
            style={{ color: '#444444' }}
          >
            We capture what others waste—
            <span style={{ color: '#00BFA5', fontWeight: 600 }}> closing the loop</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
