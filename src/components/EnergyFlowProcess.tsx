import { motion } from "framer-motion";
import { Package, Droplets, FlaskConical, Flame, Fuel, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const processStages = [
  {
    icon: Package,
    title: "Non-Recyclable Plastic Waste",
    color: "#00e5c2",
  },
  {
    icon: Droplets,
    title: "Washing and Shredding",
    color: "#00e5c2",
  },
  {
    icon: FlaskConical,
    title: "Melting & Contaminant Removal",
    subtitle: "Proprietary Technology",
    badge: ">850°C controlled pyrolysis",
    color: "#00e5c2",
  },
  {
    icon: Flame,
    title: "Pyrolysis & Energy Recovery",
    color: "#00e5c2",
  },
  {
    icon: Fuel,
    title: "Premium Fuel Output",
    subtitle: "PlastiNaphtha, PlastiSAF, PlastiDiesel",
    badge: "ASTM D7566 compliant SAF",
    color: "#00e5c2",
  },
];

export const EnergyFlowProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #00332f 0%, #00403a 100%)',
      }}
    >
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="text-sm font-bold tracking-[0.3em] mb-3 uppercase"
            style={{ color: '#00e5c2' }}
          >
            From waste to specialized clean fuel fractions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Energy Flow Process
          </h2>
        </motion.div>

        {/* Process Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 mb-12">
          {processStages.map((stage, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
              {/* Stage Card */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex flex-col items-center text-center max-w-[220px]">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-50 blur-xl"
                      style={{ backgroundColor: stage.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: '#004d47',
                        boxShadow: `0 0 30px rgba(0, 229, 194, 0.3), 0 10px 25px rgba(0, 0, 0, 0.4)`,
                        border: '3px solid rgba(0, 229, 194, 0.3)',
                      }}
                      whileHover={{
                        boxShadow: '0 0 50px rgba(0, 229, 194, 0.5), 0 15px 35px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      <stage.icon 
                        className="transition-all duration-300 group-hover:scale-110" 
                        size={48}
                        style={{ color: stage.color, strokeWidth: 2 }}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-tight">
                    {stage.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {stage.subtitle && (
                    <p 
                      className="text-xs font-medium mb-2"
                      style={{ color: '#00e5c2' }}
                    >
                      {stage.subtitle}
                    </p>
                  )}

                  {/* Badge */}
                  {stage.badge && (
                    <div 
                      className="mt-3 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(0, 229, 194, 0.1)',
                        border: '1px solid rgba(0, 229, 194, 0.3)',
                        color: '#00e5c2',
                      }}
                    >
                      {stage.badge}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Arrow */}
              {index < processStages.length - 1 && (
                <motion.div
                  className="hidden lg:block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight 
                      size={36}
                      style={{ 
                        color: '#00e5c2',
                        filter: 'drop-shadow(0 0 8px rgba(0, 229, 194, 0.6))',
                      }}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </motion.div>
              )}

              {/* Mobile Arrow */}
              {index < processStages.length - 1 && (
                <motion.div
                  className="lg:hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight 
                      size={32}
                      className="rotate-90"
                      style={{ 
                        color: '#00e5c2',
                        filter: 'drop-shadow(0 0 8px rgba(0, 229, 194, 0.6))',
                      }}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Continuous, closed-loop system with {'>'} 94% carbon efficiency and zero toxic emissions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
