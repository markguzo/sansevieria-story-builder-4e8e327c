import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,200,200,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,200,200,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

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
            VALUE FUSION REACTOR
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black"
            style={{ color: '#0A0A0A', letterSpacing: '-0.02em' }}
          >
            The Global Opportunity
          </h2>
        </motion.div>

        {/* FUSION REACTOR STRUCTURE */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Reactor Assembly */}
          <div className="relative" style={{ minHeight: '600px' }}>
            
            {/* SVG Layer for Pipes and Connections */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Teal Glow Gradient */}
                <linearGradient id="pipeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00BFA5" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#00BFA5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00BFA5" stopOpacity="0.3" />
                </linearGradient>
                
                {/* Core Glow */}
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00BFA5" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#00BFA5" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00BFA5" stopOpacity="0" />
                </radialGradient>

                {/* Metal Gradient */}
                <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4A4A4A" />
                  <stop offset="50%" stopColor="#2A2A2A" />
                  <stop offset="100%" stopColor="#1A1A1A" />
                </linearGradient>

                {/* Chrome Accent */}
                <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#666666" />
                  <stop offset="50%" stopColor="#CCCCCC" />
                  <stop offset="100%" stopColor="#666666" />
                </linearGradient>

                {/* Drop Shadow */}
                <filter id="heavyShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="15" stdDeviation="25" floodColor="#000000" floodOpacity="0.3"/>
                </filter>
              </defs>

              {/* CONDUIT PIPES - Top */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Pipe casing */}
                <rect x="385" y="80" width="30" height="100" rx="4" fill="url(#metalGradient)" />
                <rect x="388" y="80" width="24" height="100" rx="2" fill="#3A3A3A" />
                {/* Energy flow */}
                <rect x="392" y="85" width="16" height="90" rx="2" fill="url(#pipeGlow)" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                </rect>
                {/* Flanges */}
                <rect x="375" y="75" width="50" height="10" rx="2" fill="url(#chromeGradient)" />
                <rect x="375" y="175" width="50" height="10" rx="2" fill="url(#chromeGradient)" />
              </motion.g>

              {/* CONDUIT PIPES - Bottom Left */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <rect x="280" y="340" width="80" height="24" rx="4" fill="url(#metalGradient)" transform="rotate(-35, 320, 352)" />
                <rect x="283" y="343" width="74" height="18" rx="2" fill="#3A3A3A" transform="rotate(-35, 320, 352)" />
                <rect x="290" y="347" width="60" height="10" rx="2" fill="url(#pipeGlow)" opacity="0.6" transform="rotate(-35, 320, 352)">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
                </rect>
              </motion.g>

              {/* CONDUIT PIPES - Bottom Right */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <rect x="440" y="340" width="80" height="24" rx="4" fill="url(#metalGradient)" transform="rotate(35, 480, 352)" />
                <rect x="443" y="343" width="74" height="18" rx="2" fill="#3A3A3A" transform="rotate(35, 480, 352)" />
                <rect x="450" y="347" width="60" height="10" rx="2" fill="url(#pipeGlow)" opacity="0.6" transform="rotate(35, 480, 352)">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
                </rect>
              </motion.g>
            </svg>

            {/* CENTRAL REACTOR CORE */}
            <motion.div
              className="absolute left-1/2 z-30"
              style={{ 
                top: '180px',
                transform: 'translateX(-50%)'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            >
              {/* Outer Casing */}
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full"
                style={{
                  background: 'linear-gradient(145deg, #2A2A2A 0%, #0A0A0A 100%)',
                  boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)'
                }}
              >
                {/* Chrome Ring */}
                <div 
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'linear-gradient(145deg, #555555 0%, #333333 50%, #555555 100%)',
                    padding: '3px'
                  }}
                >
                  {/* Glass Viewport */}
                  <div 
                    className="w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(0,191,165,0.3) 0%, rgba(0,191,165,0.1) 50%, rgba(10,10,10,0.95) 100%)',
                      boxShadow: 'inset 0 0 40px rgba(0,191,165,0.4)'
                    }}
                  >
                    {/* Pulsing Core Glow */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(0,191,165,0.4) 0%, transparent 70%)',
                        animation: 'pulse 3s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Glass Reflection */}
                    <div 
                      className="absolute top-4 left-4 w-16 h-8 rounded-full opacity-20"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)'
                      }}
                    />
                    
                    {/* Data Display */}
                    <span 
                      className="relative z-10 text-4xl md:text-5xl font-black text-white leading-none"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,191,165,0.8), 0 0 60px rgba(0,191,165,0.4)'
                      }}
                    >
                      $180B+
                    </span>
                    <span 
                      className="relative z-10 text-[8px] md:text-[9px] uppercase tracking-[0.15em] mt-2 text-center px-4"
                      style={{ color: '#AAAAAA', fontFamily: '"Roboto Mono", monospace' }}
                    >
                      GLOBAL VALUE UNLOCKED
                    </span>
                    <span 
                      className="relative z-10 text-[7px] uppercase tracking-wider mt-1"
                      style={{ color: '#00BFA5', fontFamily: '"Roboto Mono", monospace' }}
                    >
                      ANNUAL OUTPUT
                    </span>
                  </div>
                </div>

                {/* Bolts */}
                {[0, 60, 120, 180, 240, 300].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + Math.cos(rad) * 46;
                  const y = 50 + Math.sin(rad) * 46;
                  return (
                    <div
                      key={angle}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'linear-gradient(145deg, #666666, #333333)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'
                      }}
                    />
                  );
                })}
              </div>

              {/* Technical Label */}
              <p 
                className="text-center mt-4 text-xs md:text-sm max-w-xs mx-auto"
                style={{ color: '#666666' }}
              >
                Economic transformation meets environmental restoration at scale.
              </p>
            </motion.div>

            {/* CONTAINMENT UNIT 1 - Top (Supply) */}
            <motion.div
              className="absolute left-1/2 top-0 z-20"
              style={{ transform: 'translateX(-50%)' }}
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContainmentUnit
                value="300M+"
                label="TONNES AVAILABLE / YR"
                detail="Continuous global feedstock stream ready for conversion."
                techLabel="FLOW RATE"
                status="NOMINAL"
              />
            </motion.div>

            {/* CONTAINMENT UNIT 2 - Bottom Left (Ecology) */}
            <motion.div
              className="absolute left-4 md:left-12 z-20"
              style={{ bottom: '100px' }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ContainmentUnit
                value="70-85%"
                label="GHG REDUCTION / TONNE"
                detail="Equivalent to removing 1M+ cars. Cleaner than fossil fuels."
                techLabel="EMISSIONS"
                status="OPTIMAL"
                icon="leaf"
              />
            </motion.div>

            {/* CONTAINMENT UNIT 3 - Bottom Right (Economics) */}
            <motion.div
              className="absolute right-4 md:right-12 z-20"
              style={{ bottom: '100px' }}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ContainmentUnit
                value="$600-800"
                label="PROFIT / TONNE"
                detail="High-yield asset conversion from waste liability."
                techLabel="YIELD RATE"
                status="ACTIVE"
                icon="currency"
              />
            </motion.div>
          </div>

          {/* FOUNDATION BASE */}
          <motion.div
            className="relative mt-8 md:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Metal Platform */}
            <div 
              className="relative rounded-lg p-6 md:p-8"
              style={{
                background: 'linear-gradient(180deg, #3A3A3A 0%, #2A2A2A 50%, #1A1A1A 100%)',
                boxShadow: '0 20px 50px -15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Engraved Title */}
              <h3 
                className="text-center text-sm md:text-base uppercase tracking-[0.3em] mb-6"
                style={{ 
                  color: '#888888',
                  fontFamily: '"Roboto Mono", monospace',
                  textShadow: '0 1px 0 rgba(0,0,0,0.8), 0 -1px 0 rgba(255,255,255,0.05)'
                }}
              >
                BREAK THE CYCLE
              </h3>

              {/* Industrial Status Bar */}
              <div className="relative h-8 md:h-10 rounded overflow-hidden mb-4" style={{ background: '#1A1A1A' }}>
                {/* 91% Lost - Warning segment */}
                <div 
                  className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
                  style={{ 
                    width: '91%',
                    background: 'linear-gradient(90deg, #4A4A4A 0%, #5A5A5A 50%, #4A4A4A 100%)'
                  }}
                >
                  <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400" style={{ fontFamily: '"Roboto Mono", monospace' }}>
                    91% LOST (LANDFILLED / INCINERATED / MISMANAGED)
                  </span>
                </div>
                
                {/* 9% Recycled - Teal segment */}
                <div 
                  className="absolute right-0 top-0 bottom-0 flex items-center justify-center"
                  style={{ 
                    width: '9%',
                    background: 'linear-gradient(90deg, #00A896 0%, #00BFA5 50%, #00D4AA 100%)',
                    boxShadow: '0 0 20px rgba(0,191,165,0.5)'
                  }}
                >
                  <span className="text-[8px] md:text-[10px] font-bold text-white">9%</span>
                </div>
              </div>

              {/* Data Readout */}
              <p 
                className="text-center text-[10px] md:text-xs"
                style={{ color: '#888888', fontFamily: '"Roboto Mono", monospace' }}
              >
                GLOBAL STATUS: 9% Recycled • 50% Landfilled • 22% Mismanaged • 19% Incinerated
              </p>
              <p 
                className="text-center text-xs md:text-sm mt-2"
                style={{ color: '#00BFA5' }}
              >
                We capture the lost 91%.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

// Containment Unit Component
const ContainmentUnit = ({ 
  value, 
  label, 
  detail, 
  techLabel, 
  status,
  icon 
}: { 
  value: string; 
  label: string; 
  detail: string; 
  techLabel: string;
  status: string;
  icon?: string;
}) => {
  return (
    <div 
      className="relative w-44 md:w-52 rounded-lg overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #3A3A3A 0%, #2A2A2A 100%)',
        boxShadow: '0 15px 40px -10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
    >
      {/* Top Chrome Strip */}
      <div 
        className="h-1.5"
        style={{ background: 'linear-gradient(90deg, #555555, #888888, #555555)' }}
      />
      
      {/* Glass Viewport */}
      <div 
        className="p-4 md:p-5"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Tech Label */}
        <div className="flex items-center justify-between mb-3">
          <span 
            className="text-[8px] uppercase tracking-wider"
            style={{ color: '#666666', fontFamily: '"Roboto Mono", monospace' }}
          >
            {techLabel}
          </span>
          <span 
            className="text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{ 
              color: '#00BFA5', 
              background: 'rgba(0,191,165,0.15)',
              fontFamily: '"Roboto Mono", monospace'
            }}
          >
            {status}
          </span>
        </div>

        {/* Value */}
        <p 
          className="text-2xl md:text-3xl font-black text-white leading-none"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {value}
        </p>
        
        {/* Label */}
        <p 
          className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] mt-2"
          style={{ color: '#888888', fontFamily: '"Roboto Mono", monospace' }}
        >
          {label}
        </p>
        
        {/* Detail */}
        <p 
          className="text-[10px] md:text-xs mt-2 leading-relaxed"
          style={{ color: '#AAAAAA' }}
        >
          {detail}
        </p>
      </div>

      {/* Bottom Bolts */}
      <div className="flex justify-between px-2 py-1" style={{ background: '#1A1A1A' }}>
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'linear-gradient(145deg, #555555, #333333)' }}
          />
        ))}
      </div>
    </div>
  );
};
