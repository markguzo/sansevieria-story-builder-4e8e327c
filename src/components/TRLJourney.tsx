import { motion } from "framer-motion";
import { Check, Circle, Target } from "lucide-react";
import everestBg from "@/assets/everest-mountain.png";

interface TRLLevel {
  level: number;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
}

const trlLevels: TRLLevel[] = [
  { level: 4, title: "Laboratory Testing", status: 'completed' },
  { level: 5, title: "Technology Validation", status: 'completed' },
  { level: 6, title: "INDUSTRIAL SCALE", status: 'current' },
  { level: 7, title: "Pilot Scale", status: 'upcoming' },
  { level: 8, title: "System Complete", status: 'upcoming' },
  { level: 9, title: "Full Commercial Deployment", status: 'upcoming' }
];

export const TRLJourney = () => {
  return (
    <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Everest Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={everestBg} 
          alt="Mount Everest" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-sm md:text-lg font-bold mb-1"
            style={{
              background: 'linear-gradient(90deg, #9966FF 0%, #00C4E4 50%, #00FF9D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            OUR JOURNEY
          </h2>
          <p className="text-[0.6rem] md:text-xs text-accent">
            Climbing the Everest of Industrial Innovation
          </p>
        </motion.div>

        {/* TRL Timeline */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" />
            <div 
              className="absolute left-1/2 top-0 w-px bg-accent -translate-x-1/2"
              style={{ height: '33.33%' }}
            />

            {/* TRL Levels */}
            <div className="space-y-4">
              {trlLevels.map((trl, index) => {
                const isCompleted = trl.status === 'completed';
                const isCurrent = trl.status === 'current';
                const isUpcoming = trl.status === 'upcoming';
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={trl.level}
                    className="relative"
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`flex items-center gap-3 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-2 py-1 rounded-lg border ${
                          isCurrent 
                            ? 'bg-accent/10 border-accent' 
                            : isCompleted
                            ? 'bg-accent/5 border-accent/30'
                            : 'bg-gray-800/50 border-gray-700'
                        }`}>
                          <div className={`text-[0.5rem] font-semibold mb-0 ${
                            isUpcoming ? 'text-gray-500' : 'text-white'
                          }`}>
                            TRL {trl.level}
                          </div>
                          <div className={`text-[0.6rem] md:text-xs font-bold ${
                            isCurrent ? 'text-accent' : isUpcoming ? 'text-gray-500' : 'text-white'
                          }`}>
                            {trl.title}
                          </div>
                          {isCurrent && (
                            <div className="mt-0.5 text-[0.5rem] font-semibold text-accent">
                              ← YOU ARE HERE
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Circle Indicator */}
                      <div className="relative z-10">
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-accent/30"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                          isCurrent 
                            ? 'bg-accent border-accent shadow-lg shadow-accent/50' 
                            : isCompleted
                            ? 'bg-accent/20 border-accent'
                            : 'bg-gray-800 border-gray-600'
                        }`}>
                          {isCompleted && <Check className="w-3 h-3 text-accent" />}
                          {isCurrent && <Target className="w-3 h-3 text-white" />}
                          {isUpcoming && <Circle className="w-3 h-3 text-gray-500" />}
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Text */}
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block px-3 py-1.5 bg-accent/10 border border-accent rounded-full">
              <p className="text-accent font-bold text-[0.5rem] md:text-xs">
                Proven at Industrial Scale — Ready to Deploy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
