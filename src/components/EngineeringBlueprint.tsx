import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

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
          style={{ opacity: 0.03 }}
        >
          {[100, 180, 260, 340, 420, 500, 580].map((r, i) => (
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
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            style={{ 
              color: '#0A0A0A',
              letterSpacing: '-0.02em'
            }}
          >
            The Global Opportunity
          </h2>
          <p 
            className="text-lg md:text-xl mt-4 max-w-xl mx-auto"
            style={{ color: '#666666' }}
          >
            Turning a global problem into a{' '}
            <span style={{ color: '#00BFA5', fontWeight: 700 }}>$180B advantage</span>.
          </p>
        </motion.div>

        {/* Unified Value Ring System */}
        <div className="relative max-w-3xl mx-auto" style={{ height: '500px' }}>
          
          {/* SVG Layer for Ring and Connections */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Teal Glow */}
              <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main Orbital Ring */}
            <motion.circle
              cx="300"
              cy="230"
              r="180"
              fill="none"
              stroke="#E8E8E8"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            />

            {/* Connection Lines from Ring to Modules */}
            {/* Top */}
            <motion.line
              x1="300" y1="50" x2="300" y2="70"
              stroke="#E0E0E0"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            {/* Bottom Left */}
            <motion.line
              x1="144" y1="386" x2="158" y2="372"
              stroke="#E0E0E0"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            {/* Bottom Right */}
            <motion.line
              x1="456" y1="386" x2="442" y2="372"
              stroke="#E0E0E0"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </svg>

          {/* Central Core - $180B+ */}
          <motion.div
            className="absolute left-1/2 z-20"
            style={{ 
              top: '230px',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Teal Glow Ring */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'transparent',
                boxShadow: '0 0 30px rgba(0, 191, 165, 0.4), 0 0 60px rgba(0, 191, 165, 0.2)',
                transform: 'scale(1.05)'
              }}
            />
            
            {/* Black Core */}
            <div 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%)',
                boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span 
                className="text-3xl md:text-4xl font-black text-white leading-none"
              >
                $180B+
              </span>
              <span 
                className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] mt-2 text-center"
                style={{ color: '#888888' }}
              >
                GLOBAL VALUE UNLOCKED
              </span>
            </div>
          </motion.div>

          {/* Data Module 1: Top - Supply */}
          <motion.div
            className="absolute left-1/2 z-30"
            style={{ 
              top: '0',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div 
              className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span 
                className="text-2xl md:text-3xl font-black leading-none"
                style={{ color: '#0A0A0A' }}
              >
                300M+
              </span>
              <span 
                className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] mt-1"
                style={{ color: '#888888' }}
              >
                TONNES / YR
              </span>
              <span 
                className="text-[10px] md:text-xs mt-2 px-3 leading-tight"
                style={{ color: '#AAAAAA' }}
              >
                Continuous global feedstock.
              </span>
            </div>
          </motion.div>

          {/* Data Module 2: Bottom Left - Impact */}
          <motion.div
            className="absolute z-30"
            style={{ 
              left: '5%',
              bottom: '0'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div 
              className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span 
                className="text-2xl md:text-3xl font-black leading-none"
                style={{ color: '#0A0A0A' }}
              >
                70-85%
              </span>
              <span 
                className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] mt-1"
                style={{ color: '#888888' }}
              >
                GHG REDUCTION
              </span>
              <span 
                className="text-[10px] md:text-xs mt-2 px-3 leading-tight"
                style={{ color: '#AAAAAA' }}
              >
                Cleaner than virgin fossil fuels.
              </span>
            </div>
          </motion.div>

          {/* Data Module 3: Bottom Right - Profit */}
          <motion.div
            className="absolute z-30"
            style={{ 
              right: '5%',
              bottom: '0'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div 
              className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span 
                className="text-2xl md:text-3xl font-black leading-none"
                style={{ color: '#0A0A0A' }}
              >
                $600-800
              </span>
              <span 
                className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] mt-1"
                style={{ color: '#888888' }}
              >
                PROFIT / TONNE
              </span>
              <span 
                className="text-[10px] md:text-xs mt-2 px-3 leading-tight"
                style={{ color: '#AAAAAA' }}
              >
                High-yield asset conversion.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Context Bar */}
        <motion.div
          className="mt-20 md:mt-28 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Section Label */}
          <p 
            className="text-center text-xs uppercase tracking-[0.2em] mb-6"
            style={{ color: '#666666' }}
          >
            CURRENT STATUS: BREAK THE CYCLE
          </p>

          {/* Progress Bar */}
          <div className="relative h-4 rounded-full overflow-hidden" style={{ backgroundColor: '#F0F0F0' }}>
            {/* Lost Segment - 91% */}
            <div 
              className="absolute left-0 top-0 bottom-0 rounded-l-full flex items-center justify-end pr-4"
              style={{ 
                width: '91%',
                backgroundColor: '#E0E0E0'
              }}
            >
              <span className="text-[10px] font-medium" style={{ color: '#888888' }}>91% LOST</span>
            </div>
            
            {/* Recycled Segment - 9% */}
            <motion.div 
              className="absolute right-0 top-0 bottom-0 rounded-r-full flex items-center justify-center"
              style={{ 
                width: '9%',
                background: 'linear-gradient(90deg, #00A896, #00BFA5)'
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-[8px] font-bold text-white">9%</span>
            </motion.div>
          </div>

          {/* Caption */}
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
