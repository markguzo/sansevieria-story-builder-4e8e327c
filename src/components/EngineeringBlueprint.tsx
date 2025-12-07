import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  // Data points positioned on the orbital ring
  const dataPoints = [
    {
      position: "top",
      headline: "300M+",
      subtext: "Tonnes",
      label: "Available / YR",
      detail: "Continuous global feedstock.",
      delay: 0.4
    },
    {
      position: "bottom-left",
      headline: "70-85%",
      subtext: "",
      label: "GHG Reduction",
      detail: "Cleaner than virgin fossil fuels.",
      delay: 0.6
    },
    {
      position: "bottom-right",
      headline: "$600-800",
      subtext: "",
      label: "Profit / Tonne",
      detail: "High-yield asset conversion.",
      delay: 0.8
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Faint Concentric Ripples Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          className="w-full h-full max-w-6xl" 
          viewBox="0 0 1000 1000"
          style={{ opacity: 0.03 }}
        >
          {[120, 200, 280, 360, 440, 520, 600].map((r, i) => (
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
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            style={{ 
              color: '#0A0A0A',
              fontFamily: '"Inter", system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            The Global Opportunity
          </h2>
          <p 
            className="text-lg md:text-xl mt-4 max-w-xl mx-auto"
            style={{ color: '#666666' }}
          >
            Turning a global waste problem into a{' '}
            <span style={{ color: '#00BFA5', fontWeight: 700 }}>$180B advantage</span>.
          </p>
        </motion.div>
        
        {/* Main Orbital System */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* The Orbital Ring Container */}
          <div className="relative" style={{ paddingTop: '100%' /* 1:1 aspect ratio */ }}>
            
            {/* SVG Ring Layer */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Teal gradient for top-right quadrant */}
                <linearGradient id="ringGradient" x1="50%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#00BFA5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00BFA5" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Main Ring - Light Grey */}
              <motion.circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="#E5E5E5"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              />

              {/* Teal Accent Arc - Top Right Quadrant */}
              <motion.path
                d="M 250 50 A 200 200 0 0 1 450 250"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
              />

              {/* Anchor Dots on Ring */}
              {/* Top */}
              <motion.circle
                cx="250"
                cy="50"
                r="4"
                fill="#00BFA5"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              {/* Bottom Left */}
              <motion.circle
                cx="77"
                cy="350"
                r="4"
                fill="#00BFA5"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 }}
              />
              {/* Bottom Right */}
              <motion.circle
                cx="423"
                cy="350"
                r="4"
                fill="#00BFA5"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
            </svg>

            {/* LAYER A: Gravitational Center - $180B+ */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none"
                style={{ 
                  color: '#0A0A0A',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  letterSpacing: '-0.03em'
                }}
              >
                $180B+
              </h2>
              <p 
                className="text-xs md:text-sm uppercase tracking-[0.25em] mt-4"
                style={{ color: '#888888', fontFamily: '"Inter", sans-serif' }}
              >
                GLOBAL VALUE UNLOCK
              </p>
              <p 
                className="text-sm md:text-base mt-3 max-w-xs text-center"
                style={{ color: '#666666' }}
              >
                Economic transformation meets environmental restoration.
              </p>
            </motion.div>

            {/* LAYER C: Orbital Data Points */}
            
            {/* Position 1: Top Center - Supply */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-center"
              style={{ top: '-20px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p 
                className="text-3xl md:text-4xl font-black leading-none"
                style={{ color: '#0A0A0A', fontFamily: '"Inter", sans-serif' }}
              >
                300M+ <span className="text-xl md:text-2xl font-bold">Tonnes</span>
              </p>
              <p 
                className="text-xs uppercase tracking-[0.15em] mt-1"
                style={{ color: '#888888' }}
              >
                Available / YR
              </p>
              <p 
                className="text-xs mt-1 max-w-[200px] mx-auto hidden md:block"
                style={{ color: '#AAAAAA' }}
              >
                Continuous global feedstock.
              </p>
            </motion.div>

            {/* Position 2: Bottom Left - Impact */}
            <motion.div
              className="absolute text-center md:text-left"
              style={{ 
                left: '0',
                bottom: '12%',
                transform: 'translateX(-10%)'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p 
                className="text-3xl md:text-4xl font-black leading-none"
                style={{ color: '#0A0A0A', fontFamily: '"Inter", sans-serif' }}
              >
                70-85%
              </p>
              <p 
                className="text-xs uppercase tracking-[0.15em] mt-1"
                style={{ color: '#888888' }}
              >
                GHG Reduction
              </p>
              <p 
                className="text-xs mt-1 max-w-[180px] hidden md:block"
                style={{ color: '#AAAAAA' }}
              >
                Cleaner than virgin fossil fuels.
              </p>
            </motion.div>

            {/* Position 3: Bottom Right - Profit */}
            <motion.div
              className="absolute text-center md:text-right"
              style={{ 
                right: '0',
                bottom: '12%',
                transform: 'translateX(10%)'
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p 
                className="text-3xl md:text-4xl font-black leading-none"
                style={{ color: '#0A0A0A', fontFamily: '"Inter", sans-serif' }}
              >
                $600-800
              </p>
              <p 
                className="text-xs uppercase tracking-[0.15em] mt-1"
                style={{ color: '#888888' }}
              >
                Profit / Tonne
              </p>
              <p 
                className="text-xs mt-1 max-w-[180px] ml-auto hidden md:block"
                style={{ color: '#AAAAAA' }}
              >
                High-yield asset conversion.
              </p>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM ANCHOR: Break the Cycle */}
        <motion.div
          className="mt-20 md:mt-28 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Section Label */}
          <p 
            className="text-center text-xs uppercase tracking-[0.25em] mb-6"
            style={{ color: '#888888' }}
          >
            CURRENT STATUS: BREAK THE CYCLE
          </p>

          {/* Modern Progress Bar */}
          <div className="relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: '#F0F0F0' }}>
            {/* Lost Segment - 91% */}
            <div 
              className="absolute left-0 top-0 bottom-0 rounded-l-full"
              style={{ 
                width: '91%',
                backgroundColor: '#E0E0E0'
              }}
            />
            
            {/* Recycled Segment - 9% */}
            <motion.div 
              className="absolute right-0 top-0 bottom-0 rounded-r-full"
              style={{ 
                width: '9%',
                background: 'linear-gradient(90deg, #00A896, #00BFA5)'
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 text-xs" style={{ color: '#888888' }}>
            <span>91% LOST</span>
            <span style={{ color: '#00BFA5', fontWeight: 600 }}>9% RECYCLED</span>
          </div>

          {/* Simplified Caption */}
          <p 
            className="text-center text-sm md:text-base mt-6"
            style={{ color: '#666666' }}
          >
            We capture what others waste—
            <span style={{ color: '#00BFA5', fontWeight: 600 }}>closing the loop</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
