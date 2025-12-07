import { motion } from 'framer-motion';

const PlasticCrisisInfographic = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      {/* Concentric Ripple Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          viewBox="0 0 800 800" 
          className="w-[1200px] h-[1200px] opacity-100"
        >
          {[100, 180, 260, 340, 420, 500, 580, 660].map((radius, index) => (
            <circle
              key={index}
              cx="400"
              cy="400"
              r={radius}
              fill="none"
              stroke="hsl(174, 100%, 29%)"
              strokeWidth="1"
              opacity={0.06 - index * 0.005}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center tracking-tight mb-16"
        >
          THE GLOBAL PLASTIC CRISIS IS REAL.
        </motion.h2>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Progress Bar */}
          <div className="relative w-full h-6 md:h-8 rounded-full overflow-hidden bg-gray-200 shadow-inner">
            {/* Lost Section - 91% */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '91%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-300 to-gray-200 rounded-l-full"
            />
            {/* Recycled Section - 9% */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '9%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.7, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full rounded-r-full"
              style={{ 
                background: 'linear-gradient(90deg, hsl(174, 100%, 35%) 0%, hsl(174, 100%, 42%) 100%)'
              }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-start mt-4">
            <div className="text-left">
              <p className="text-sm md:text-base font-semibold text-gray-500 tracking-wide">
                91% LOST
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                (Landfilled / Incinerated)
              </p>
            </div>
            <div className="text-right">
              <p 
                className="text-sm md:text-base font-bold tracking-wide"
                style={{ color: 'hsl(174, 100%, 35%)' }}
              >
                9% RECYCLED
              </p>
            </div>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-sm md:text-base mb-10"
        >
          Global Breakdown: 50% Landfilled • 22% Mismanaged • 19% Incinerated.
        </motion.p>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xl md:text-2xl font-bold"
          style={{ color: 'hsl(174, 100%, 35%)' }}
        >
          Sansevieria Technology transforms the 91% lost into value.
        </motion.p>
      </div>
    </section>
  );
};

export default PlasticCrisisInfographic;
