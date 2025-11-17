import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Target, Flag, ArrowRight, Beaker, Factory, Rocket, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import mountainImage from "@/assets/journey-mountain.png";

interface TRLLevel {
  level: number;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: any;
  achievements?: string[];
}

const trlLevels: TRLLevel[] = [
  {
    level: 4,
    title: "Lab Validation",
    subtitle: "Proof of concept established",
    description: "Successfully validated the core technology in laboratory conditions. Demonstrated the chemical process works with controlled plastic waste streams.",
    status: 'completed',
    icon: Beaker,
    achievements: [
      "Core chemical process validated",
      "Initial conversion rates confirmed",
      "Proof of concept established"
    ]
  },
  {
    level: 5,
    title: "Pilot Scale",
    subtitle: "Technology validated in relevant environment",
    description: "Scaled up to pilot plant operations. Validated technology with real-world plastic waste streams in a controlled industrial setting.",
    status: 'completed',
    icon: Factory,
    achievements: [
      "Pilot plant operations successful",
      "Real waste stream processing",
      "Process parameters optimized"
    ]
  },
  {
    level: 6,
    title: "Industrial Demo",
    subtitle: "Full-scale prototype in operational environment",
    description: "Currently operating at industrial scale. Full-scale prototype running in actual operational environment, processing diverse plastic waste streams at commercial volumes.",
    status: 'current',
    icon: Target,
    achievements: [
      "Industrial scale operations active",
      "Multi-stream capability proven",
      "Commercial volume processing",
      "Ready for deployment"
    ]
  },
  {
    level: 7,
    title: "Pre-Commercial",
    subtitle: "System prototype demonstration",
    description: "Next phase: Deploy complete system prototype for extended commercial demonstration. Fine-tune operations for full market readiness.",
    status: 'upcoming',
    icon: ArrowRight,
    achievements: [
      "Extended prototype testing",
      "Commercial partnerships",
      "Market validation"
    ]
  },
  {
    level: 8,
    title: "First Commercial",
    subtitle: "Actual system completed and qualified",
    description: "Launch first fully commercial facility. System proven, qualified, and ready for widespread deployment.",
    status: 'upcoming',
    icon: Rocket,
    achievements: [
      "First commercial plant online",
      "Full system qualification",
      "Operational excellence proven"
    ]
  },
  {
    level: 9,
    title: "Full Deployment",
    subtitle: "Actual system proven in operational environment",
    description: "Full commercial deployment across multiple sites. Technology proven at scale with sustained operational success.",
    status: 'upcoming',
    icon: Flag,
    achievements: [
      "Multiple facilities operational",
      "Technology proven globally",
      "Industry standard established"
    ]
  }
];

export const TRLJourney = () => {
  const [selectedTRL, setSelectedTRL] = useState<number | null>(6); // Start with TRL 6 selected

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%)' }}>
      <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1400px' }}>
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6" style={{
            background: 'linear-gradient(90deg, #FFFFFF, hsl(150 100% 50%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our Journey to the Summit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Climbing the mountain of innovation, one milestone at a time. Click each camp to explore our progress.
          </p>
        </motion.div>

        {/* Mountain with Interactive Camps */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            <img 
              src={mountainImage} 
              alt="Mount Everest - Our Journey" 
              className="w-full h-auto"
              style={{ minHeight: '500px', objectFit: 'cover' }}
            />
            
            {/* Overlay gradient for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Interactive Camp Markers */}
            <div className="absolute inset-0">
              {/* TRL 4 - Bottom Left */}
              <motion.button
                className="absolute bottom-[15%] left-[20%] group"
                onClick={() => setSelectedTRL(4)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 4 
                    ? 'bg-primary border-primary shadow-[0_0_30px_rgba(0,255,136,0.6)]' 
                    : 'bg-primary/80 border-primary/60 shadow-[0_0_20px_rgba(0,255,136,0.4)]'
                }`}>
                  <Check className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 4
                </div>
              </motion.button>

              {/* TRL 5 - Bottom Right */}
              <motion.button
                className="absolute bottom-[25%] right-[25%] group"
                onClick={() => setSelectedTRL(5)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 5 
                    ? 'bg-primary border-primary shadow-[0_0_30px_rgba(0,255,136,0.6)]' 
                    : 'bg-primary/80 border-primary/60 shadow-[0_0_20px_rgba(0,255,136,0.4)]'
                }`}>
                  <Check className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 5
                </div>
              </motion.button>

              {/* TRL 6 - Middle Left (CURRENT - Most Prominent) */}
              <motion.button
                className="absolute top-[50%] left-[15%] group"
                onClick={() => setSelectedTRL(6)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0, 255, 136, 0.6)',
                    '0 0 50px rgba(0, 255, 136, 0.8)',
                    '0 0 30px rgba(0, 255, 136, 0.6)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 6 
                    ? 'bg-primary border-primary shadow-[0_0_40px_rgba(0,255,136,0.8)]' 
                    : 'bg-primary border-primary shadow-[0_0_30px_rgba(0,255,136,0.6)]'
                }`}>
                  <Target className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary px-4 py-2 rounded-lg text-sm font-bold text-black">
                  YOU ARE HERE
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 6
                </div>
              </motion.button>

              {/* TRL 7 - Middle Right */}
              <motion.button
                className="absolute top-[45%] right-[20%] group"
                onClick={() => setSelectedTRL(7)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 7 
                    ? 'bg-accent border-accent shadow-[0_0_30px_rgba(153,102,255,0.6)]' 
                    : 'bg-accent/60 border-accent/40 shadow-[0_0_15px_rgba(153,102,255,0.3)]'
                }`}>
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 7
                </div>
              </motion.button>

              {/* TRL 8 - Top Left */}
              <motion.button
                className="absolute top-[25%] left-[25%] group"
                onClick={() => setSelectedTRL(8)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 8 
                    ? 'bg-accent border-accent shadow-[0_0_30px_rgba(153,102,255,0.6)]' 
                    : 'bg-accent/60 border-accent/40 shadow-[0_0_15px_rgba(153,102,255,0.3)]'
                }`}>
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 8
                </div>
              </motion.button>

              {/* TRL 9 - Summit */}
              <motion.button
                className="absolute top-[8%] left-[50%] -translate-x-1/2 group"
                onClick={() => setSelectedTRL(9)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedTRL === 9 
                    ? 'bg-accent border-accent shadow-[0_0_30px_rgba(153,102,255,0.6)]' 
                    : 'bg-accent/60 border-accent/40 shadow-[0_0_15px_rgba(153,102,255,0.3)]'
                }`}>
                  <Flag className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  TRL 9
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Selected TRL Details */}
        <AnimatePresence mode="wait">
          {selectedTRL && (
            <motion.div
              key={selectedTRL}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              {trlLevels.map(trl => trl.level === selectedTRL && (
                <Card key={trl.level} className="relative overflow-hidden" style={{
                  background: trl.status === 'current' 
                    ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(30, 36, 51, 0.9))'
                    : 'rgba(30, 36, 51, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: trl.status === 'current' 
                    ? '2px solid hsl(150 100% 50%)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: trl.status === 'current'
                    ? '0 0 40px rgba(0, 255, 136, 0.3)'
                    : '0 4px 16px rgba(0, 0, 0, 0.4)'
                }}>
                  <div className="p-8">
                    <button
                      onClick={() => setSelectedTRL(null)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        trl.status === 'completed' ? 'bg-primary/20' :
                        trl.status === 'current' ? 'bg-primary/30' :
                        'bg-accent/20'
                      }`}>
                        <trl.icon className={`w-8 h-8 ${
                          trl.status === 'completed' ? 'text-primary' :
                          trl.status === 'current' ? 'text-primary' :
                          'text-accent'
                        }`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-3xl font-bold">TRL {trl.level}: {trl.title}</h3>
                          {trl.status === 'current' && (
                            <span className="px-4 py-1 rounded-full bg-primary text-black text-sm font-bold">
                              CURRENT STAGE
                            </span>
                          )}
                          {trl.status === 'completed' && (
                            <span className="px-4 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm font-bold">
                              ✓ COMPLETED
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-primary mb-4">{trl.subtitle}</p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {trl.description}
                        </p>

                        {trl.achievements && (
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-muted-foreground">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {trl.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                    trl.status === 'current' || trl.status === 'completed' 
                                      ? 'bg-primary/20' 
                                      : 'bg-accent/20'
                                  }`}>
                                    <Check className={`w-3 h-3 ${
                                      trl.status === 'current' || trl.status === 'completed' 
                                        ? 'text-primary' 
                                        : 'text-accent'
                                    }`} />
                                  </div>
                                  <span className="text-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl" style={{
            background: 'linear-gradient(90deg, hsl(150 100% 50% / 0.2), hsl(180 100% 50% / 0.2))',
            border: '1px solid hsl(150 100% 50% / 0.3)'
          }}>
            <p className="text-2xl font-bold" style={{
              background: 'linear-gradient(90deg, hsl(150 100% 50%), hsl(180 100% 50%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Proven at Industrial Scale — Ready to Deploy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
