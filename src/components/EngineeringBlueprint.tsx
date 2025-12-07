import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EngineeringBlueprint = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${(i + 1) * 8.33}%`,
              backgroundColor: '#E5E5E5'
            }}
          />
        ))}
        {/* Horizontal Lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i + 1) * 12.5}%`,
              backgroundColor: '#E5E5E5'
            }}
          />
        ))}
        {/* Grid Intersection Markers */}
        {[...Array(12)].map((_, vi) =>
          [...Array(8)].map((_, hi) => (
            <span
              key={`marker-${vi}-${hi}`}
              className="absolute text-xs font-light select-none"
              style={{
                left: `calc(${(vi + 1) * 8.33}% - 4px)`,
                top: `calc(${(hi + 1) * 12.5}% - 6px)`,
                color: '#00BFA5',
                fontSize: '10px',
                lineHeight: 1
              }}
            >
              +
            </span>
          ))
        )}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* HERO CELL - $180B+ (Spans 2 rows on desktop) */}
          <motion.div
            className="lg:row-span-2 flex flex-col justify-center p-8 md:p-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p 
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ 
                fontFamily: '"Roboto Mono", "Courier New", monospace',
                color: '#555555'
              }}
            >
              GLOBAL VALUE UNLOCK
            </p>
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                color: '#0A0A0A'
              }}
            >
              $180B+
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: '#444444' }}
            >
              Plastic waste isn't a problem—it's a goldmine. Economic transformation meets environmental restoration at scale.
            </p>
          </motion.div>

          {/* TOP RIGHT - 300M+ */}
          <motion.div
            className="lg:col-span-2 p-8 md:p-10 border-l-0 lg:border-l"
            style={{ borderColor: '#E5E5E5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p 
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ 
                fontFamily: '"Roboto Mono", "Courier New", monospace',
                color: '#555555'
              }}
            >
              TONNES AVAILABLE / YR
            </p>
            <h3 
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                color: '#0A0A0A'
              }}
            >
              300M+
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed max-w-lg"
              style={{ color: '#666666' }}
            >
              Global plastic production creates a continuous stream of feedstock ready for conversion.
            </p>
          </motion.div>

          {/* MIDDLE RIGHT - $600-800 */}
          <motion.div
            className="p-8 md:p-10 border-l-0 lg:border-l border-t lg:border-t-0"
            style={{ borderColor: '#E5E5E5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p 
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ 
                fontFamily: '"Roboto Mono", "Courier New", monospace',
                color: '#555555'
              }}
            >
              PROFIT PER TONNE
            </p>
            <h3 
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                color: '#0A0A0A'
              }}
            >
              $600-800
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: '#666666' }}
            >
              Turning liability into high-yield assets. Premium value created from waste.
            </p>
          </motion.div>

          {/* BOTTOM RIGHT - 85% */}
          <motion.div
            className="p-8 md:p-10 border-l-0 lg:border-l border-t lg:border-t-0"
            style={{ borderColor: '#E5E5E5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p 
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ 
                fontFamily: '"Roboto Mono", "Courier New", monospace',
                color: '#555555'
              }}
            >
              GHG REDUCTION
            </p>
            <h3 
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                color: '#0A0A0A'
              }}
            >
              85%
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: '#666666' }}
            >
              Equivalent to removing 1M+ cars from roads yearly. Cleaner air, bolder future.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM FULL-WIDTH STRIP - Break the Cycle */}
        <motion.div
          className="mt-16 md:mt-20 pt-12 border-t"
          style={{ borderColor: '#E5E5E5' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p 
            className="text-xs uppercase tracking-[0.2em] mb-8 text-center"
            style={{ 
              fontFamily: '"Roboto Mono", "Courier New", monospace',
              color: '#555555'
            }}
          >
            CURRENT INDUSTRY STATUS: BREAK THE CYCLE
          </p>

          {/* Progress Bar Chart */}
          <div className="max-w-4xl mx-auto">
            <div className="flex h-12 md:h-16 rounded-sm overflow-hidden">
              {/* Lost Segment - 91% */}
              <div 
                className="relative flex items-center justify-center"
                style={{ 
                  width: '91%',
                  background: 'repeating-linear-gradient(45deg, #D1D5DB, #D1D5DB 4px, #E5E7EB 4px, #E5E7EB 8px)'
                }}
              >
                <span 
                  className="text-xs md:text-sm font-medium px-2 text-center"
                  style={{ color: '#374151' }}
                >
                  91% LOST (Landfilled / Incinerated)
                </span>
              </div>
              
              {/* Recycled Segment - 9% */}
              <div 
                className="relative flex items-center justify-center"
                style={{ 
                  width: '9%',
                  backgroundColor: '#00BFA5'
                }}
              >
                <span 
                  className="text-xs md:text-sm font-bold text-white hidden md:block"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  9%
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-between mt-4 text-xs" style={{ color: '#666666' }}>
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm"
                  style={{ 
                    background: 'repeating-linear-gradient(45deg, #D1D5DB, #D1D5DB 2px, #E5E7EB 2px, #E5E7EB 4px)'
                  }}
                />
                <span style={{ fontFamily: '"Roboto Mono", monospace' }}>LOST</span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: '#00BFA5' }}
                />
                <span style={{ fontFamily: '"Roboto Mono", monospace' }}>CURRENTLY RECYCLED</span>
              </div>
            </div>

            {/* Caption */}
            <p 
              className="text-center mt-8 text-sm md:text-base max-w-2xl mx-auto"
              style={{ color: '#444444' }}
            >
              We capture what others waste—closing the loop on global mismanagement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
