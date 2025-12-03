import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, Beaker, Fuel } from "lucide-react";

export const EcoForgePipeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  
  // Scroll progress for arrow animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const arrowProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 bg-gradient-to-br from-[hsl(162,36%,20%)] via-[hsl(162,36%,15%)] to-[hsl(180,100%,15%)] overflow-hidden min-h-[800px]"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(180,100%,40%)] mb-4">
            EcoForge Pipeline: From Waste to Wealth
          </h2>
          <p className="text-[hsl(0,0%,70%)] max-w-4xl mx-auto text-base md:text-lg">
            Our proprietary transformation process converts non-recyclable plastics into premium outputs
          </p>
        </motion.div>

        {/* Pipeline Layout - Desktop */}
        <div className="hidden md:block relative h-[400px]">
          {/* Curved SVG Arrows that arc OVER the black box */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="tealArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(180, 100%, 40%)" />
                <stop offset="100%" stopColor="hsl(45, 100%, 50%)" />
              </linearGradient>
              <linearGradient id="goldArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(45, 100%, 50%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(45, 100%, 60%)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Main teal flow arrow - arcs OVER the box */}
            <motion.path
              d="M 150 250 C 300 50, 900 50, 1050 250"
              fill="none"
              stroke="url(#tealArrowGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />
            
            {/* Gold dashed energy hint arrow */}
            <motion.path
              d="M 160 240 C 310 70, 890 70, 1040 240"
              fill="none"
              stroke="url(#goldArrowGrad)"
              strokeWidth="2"
              strokeDasharray="8,8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
            />
            
            {/* Arrow head at end */}
            <motion.polygon
              points="1050,250 1030,235 1030,265"
              fill="hsl(45, 100%, 50%)"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 2.8 }}
            />
          </svg>

          {/* Left Input Node */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center z-20"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-[hsl(180,100%,40%)] flex items-center justify-center mb-4 shadow-lg"
              animate={isInView ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Package className="w-8 h-8 text-[hsl(0,0%,60%)]" />
            </motion.div>
            <h3 className="text-base font-semibold text-[hsl(162,36%,50%)] mb-1">Non-Recyclable Plastic Waste</h3>
            <p className="text-sm text-[hsl(0,0%,55%)] italic max-w-[180px]">
              300M+ tonnes annually awaiting transformation
            </p>
          </motion.div>

          {/* Central Long Black Box - THE MAGIC CONDUIT */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-32 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            aria-label="Proprietary EcoForge conduit—sealed transformation process, details confidential"
          >
            {/* The Black Box - COMPLETE VOID */}
            <div className="relative w-full h-full bg-black rounded-lg border border-[hsl(180,100%,40%,0.3)] shadow-2xl overflow-hidden">
              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  boxShadow: '0 0 30px hsl(180, 100%, 40%, 0.2), inset 0 0 20px hsl(180, 100%, 40%, 0.05)'
                }}
                animate={isInView ? { 
                  boxShadow: [
                    '0 0 20px hsl(180, 100%, 40%, 0.1), inset 0 0 10px hsl(180, 100%, 40%, 0.02)',
                    '0 0 40px hsl(180, 100%, 40%, 0.3), inset 0 0 30px hsl(180, 100%, 40%, 0.08)',
                    '0 0 20px hsl(180, 100%, 40%, 0.1), inset 0 0 10px hsl(180, 100%, 40%, 0.02)'
                  ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Energy Veins along bottom edge */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-[hsl(180,100%,50%)] to-transparent"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={isInView ? { x: '100%', opacity: [0, 0.5, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </div>
              
              {/* Secondary energy vein */}
              <div className="absolute bottom-1 left-0 w-full h-[1px] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-[hsl(45,100%,50%)] to-transparent"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={isInView ? { x: '100%', opacity: [0, 0.3, 0] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                />
              </div>
              
              {/* Top edge energy vein */}
              <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-[hsl(180,100%,45%)] to-transparent"
                  initial={{ x: '100%', opacity: 0 }}
                  animate={isInView ? { x: '-100%', opacity: [0, 0.3, 0] } : {}}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />
              </div>
              
              {/* Golden Particle Wisps along perimeter - NEVER ENTER */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-[hsl(45,100%,50%)] rounded-full"
                  style={{
                    boxShadow: '0 0 6px hsl(45, 100%, 50%)',
                    top: i % 2 === 0 ? '-3px' : 'auto',
                    bottom: i % 2 === 1 ? '-3px' : 'auto',
                  }}
                  initial={{ left: '-5%', opacity: 0 }}
                  animate={isInView ? { 
                    left: '105%', 
                    opacity: [0, 0.8, 0.8, 0]
                  } : {}}
                  transition={{ 
                    duration: 4 + i * 0.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.8
                  }}
                />
              ))}
              
              {/* Subtle vibration/hum effect */}
              <motion.div
                className="absolute inset-0"
                animate={isInView ? { 
                  x: [0, 0.5, -0.5, 0]
                } : {}}
                transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right Output Nodes */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center z-20"
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex gap-4 mb-4">
              {/* Petrochemical node */}
              <motion.div 
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-[hsl(45,100%,45%)] flex items-center justify-center shadow-lg"
                animate={isInView ? { 
                  rotate: 360,
                  boxShadow: [
                    '0 0 10px hsl(45, 100%, 50%, 0.2)',
                    '0 0 25px hsl(45, 100%, 50%, 0.4)',
                    '0 0 10px hsl(45, 100%, 50%, 0.2)'
                  ]
                } : {}}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Beaker className="w-8 h-8 text-[hsl(45,100%,50%)]" />
              </motion.div>
              
              {/* Sustainable fuel node */}
              <motion.div 
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-[hsl(145,100%,40%)] flex items-center justify-center shadow-lg"
                animate={isInView ? { 
                  rotate: -360,
                  boxShadow: [
                    '0 0 10px hsl(145, 100%, 40%, 0.2)',
                    '0 0 25px hsl(145, 100%, 40%, 0.4)',
                    '0 0 10px hsl(145, 100%, 40%, 0.2)'
                  ]
                } : {}}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <Fuel className="w-8 h-8 text-[hsl(145,100%,45%)]" />
              </motion.div>
            </div>
            <h3 className="text-base font-semibold text-[hsl(45,100%,50%)] mb-1">Premium Petrochemicals & Sustainable Fuels</h3>
            <p className="text-sm text-[hsl(0,0%,55%)] italic max-w-[200px]">
              High-value outputs meeting industry standards
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {/* Input Node */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/10 border-2 border-[hsl(180,100%,40%)] flex items-center justify-center mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Package className="w-6 h-6 text-[hsl(0,0%,60%)]" />
            </motion.div>
            <h3 className="text-sm font-semibold text-[hsl(162,36%,50%)]">Non-Recyclable Plastic Waste</h3>
            <p className="text-xs text-[hsl(0,0%,55%)] italic">300M+ tonnes annually</p>
          </motion.div>

          {/* Mobile Arrow Down */}
          <motion.svg 
            className="w-6 h-12 text-[hsl(180,100%,40%)]"
            viewBox="0 0 24 48"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <path d="M12 0 L12 40 M4 32 L12 44 L20 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Mobile Black Box */}
          <motion.div
            className="w-full max-w-xs h-24 bg-black rounded-lg border border-[hsl(180,100%,40%,0.3)] shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Proprietary EcoForge conduit—sealed transformation process"
          >
            {/* Energy veins */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[hsl(180,100%,50%)] to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            {/* Golden particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[hsl(45,100%,50%)] rounded-full"
                style={{ top: i % 2 === 0 ? '-2px' : 'auto', bottom: i % 2 === 1 ? '-2px' : 'auto' }}
                animate={{ left: ['-5%', '105%'], opacity: [0, 0.8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
              />
            ))}
          </motion.div>

          {/* Mobile Arrow Down */}
          <motion.svg 
            className="w-6 h-12 text-[hsl(45,100%,50%)]"
            viewBox="0 0 24 48"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <path d="M12 0 L12 40 M4 32 L12 44 L20 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Output Nodes */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex gap-3 mb-3">
              <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-[hsl(45,100%,45%)] flex items-center justify-center">
                <Beaker className="w-5 h-5 text-[hsl(45,100%,50%)]" />
              </div>
              <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-[hsl(145,100%,40%)] flex items-center justify-center">
                <Fuel className="w-5 h-5 text-[hsl(145,100%,45%)]" />
              </div>
            </div>
            <h3 className="text-sm font-semibold text-[hsl(45,100%,50%)]">Premium Outputs</h3>
            <p className="text-xs text-[hsl(0,0%,55%)] italic">High-value petrochemicals & fuels</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
