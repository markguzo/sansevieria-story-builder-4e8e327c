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
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Everest Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={everestBg} 
          alt="Mount Everest" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{
              background: 'linear-gradient(90deg, #9966FF 0%, #00C4E4 50%, #00FF9D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            OUR JOURNEY
          </h2>
          <p className="text-sm md:text-base text-accent">
            Climbing the Everest of Industrial Innovation
          </p>
        </motion.div>

        {/* TRL Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />
            <div 
              className="absolute left-1/2 top-0 w-0.5 bg-accent -translate-x-1/2"
              style={{ height: '33.33%' }}
            />

            {/* TRL Levels */}
            <div className="space-y-8">
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
                    <div className={`flex items-center gap-5 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
                          isCurrent 
                            ? 'bg-accent/10 border-accent' 
                            : isCompleted
                            ? 'bg-accent/5 border-accent/30'
                            : 'bg-gray-800/50 border-gray-700'
                        }`}>
                          <div className={`text-xs font-semibold mb-0.5 ${
                            isUpcoming ? 'text-gray-500' : 'text-white'
                          }`}>
                            TRL {trl.level}
                          </div>
                          <div className={`text-sm md:text-base font-bold ${
                            isCurrent ? 'text-accent' : isUpcoming ? 'text-gray-500' : 'text-white'
                          }`}>
                            {trl.title}
                          </div>
                          {isCurrent && (
                            <div className="mt-1 text-xs font-semibold text-accent">
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
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                          isCurrent 
                            ? 'bg-accent border-accent shadow-lg shadow-accent/50' 
                            : isCompleted
                            ? 'bg-accent/20 border-accent'
                            : 'bg-gray-800 border-gray-600'
                        }`}>
                          {isCompleted && <Check className="w-5 h-5 text-accent" />}
                          {isCurrent && <Target className="w-5 h-5 text-white" />}
                          {isUpcoming && <Circle className="w-5 h-5 text-gray-500" />}
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
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent rounded-full">
              <p className="text-accent font-bold text-xs md:text-sm">
                Proven at Industrial Scale — Ready to Deploy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
