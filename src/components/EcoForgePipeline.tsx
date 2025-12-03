import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Package, Beaker, Fuel } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const EcoForgePipeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            EcoForge Pipeline: From Waste to Wealth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proprietary transformation process converts non-recyclable plastics into premium outputs
          </p>
        </motion.div>

        {/* Pipeline Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          
          {/* Left - Waste Input */}
          <motion.div
            className="flex flex-col items-center text-center flex-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 shadow-lg">
              <Package className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Non-Recyclable Plastic Waste</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              300M+ tonnes annually awaiting transformation
            </p>
          </motion.div>

          {/* Left Arrow */}
          <motion.svg
            className="hidden md:block w-24 h-8 flex-shrink-0"
            viewBox="0 0 100 30"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <defs>
              <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#808080" />
                <stop offset="100%" stopColor="#008080" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 15 L80 15 L70 5 M80 15 L70 25"
              fill="none"
              stroke="url(#arrowGradient1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.svg>

          {/* Mobile Arrow Down */}
          <motion.div
            className="md:hidden text-teal-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <svg className="w-8 h-12" viewBox="0 0 30 50">
              <path d="M15 0 L15 35 L5 25 M15 35 L25 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Center - Black Box Chamber */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="relative flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Chamber Orb */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 cursor-pointer">
                    {/* Pulsing Energy Rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-teal-500/20 to-transparent animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-2 rounded-full bg-gradient-radial from-emerald-500/15 to-transparent animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                    
                    {/* Main Chamber */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 shadow-2xl flex items-center justify-center border-2 border-teal-500/30">
                      {/* Golden Particle Orbit */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-amber-400 rounded-full shadow-lg"
                            style={{
                              top: '50%',
                              left: '50%',
                              boxShadow: '0 0 8px #FFD700'
                            }}
                            animate={isHovered ? {
                              x: [0, Math.cos((i / 8) * Math.PI * 2) * 70, 0],
                              y: [0, Math.sin((i / 8) * Math.PI * 2) * 70, 0],
                              opacity: [0.5, 1, 0.5]
                            } : {
                              x: Math.cos((i / 8) * Math.PI * 2 + Date.now() / 2000) * 60,
                              y: Math.sin((i / 8) * Math.PI * 2 + Date.now() / 2000) * 60,
                            }}
                            transition={{
                              duration: isHovered ? 2 : 8,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Chamber Label */}
                      <div className="text-center z-10">
                        <span className="text-amber-400 font-bold text-lg md:text-xl tracking-wide">EcoForge</span>
                        <br />
                        <span className="text-amber-300/80 text-sm">Chamber</span>
                      </div>
                    </div>

                    {/* Tech Badges - Fade on Hover */}
                    <motion.div
                      className="absolute -top-2 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium">TRL 6 Scale</span>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">100% Premium</span>
                    </motion.div>
                    <motion.div
                      className="absolute top-1/2 -right-4 -translate-y-1/2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">Multi-Plastic</span>
                    </motion.div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs bg-emerald-900 text-white border-teal-500/50">
                <p className="text-sm">
                  Our patented, zero-toxic process: &gt;94% carbon efficiency, industrial-scale ready, processes multi-plastic streams—details confidential.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Right Arrow */}
          <motion.svg
            className="hidden md:block w-24 h-8 flex-shrink-0"
            viewBox="0 0 100 30"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <defs>
              <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008080" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 15 L80 15 L70 5 M80 15 L70 25"
              fill="none"
              stroke="url(#arrowGradient2)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.svg>

          {/* Mobile Arrow Down */}
          <motion.div
            className="md:hidden text-amber-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <svg className="w-8 h-12" viewBox="0 0 30 50">
              <path d="M15 0 L15 35 L5 25 M15 35 L25 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Right - Premium Outputs */}
          <motion.div
            className="flex flex-col items-center text-center flex-1"
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shadow-lg">
                <Beaker className="w-8 h-8 text-amber-600" />
              </div>
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center shadow-lg">
                <Fuel className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Premium Petrochemicals & Sustainable Fuels</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              High-value outputs meeting industry standards
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
