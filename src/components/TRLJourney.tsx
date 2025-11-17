import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Check, Target, Flag, Beaker, Factory, Rocket, X, TrendingUp, Building2, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mountainImage from "@/assets/journey-mountain.png";

interface TRLLevel {
  level: number;
  title: string;
  subtitle: string;
  campName: string;
  elevation: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: any;
  achievements: string[];
  challenges?: string[];
  quote?: string;
  duration?: string;
  position: { top: string; left: string };
}

const trlLevels: TRLLevel[] = [
  {
    level: 4,
    title: "Lab Validation",
    campName: "Base Camp",
    elevation: "5,364m (17,598 ft)",
    subtitle: "Proof of concept established",
    description: "Every legendary journey begins with a single step. At Base Camp, we established our foundation through rigorous laboratory validation. Our core technology proved viable in controlled conditions, earning the confidence needed to attempt this climb.",
    status: 'completed',
    icon: Beaker,
    achievements: [
      "Laboratory feasibility confirmed",
      "Core algorithms validated",
      "Initial safety protocols established",
      "Team assembled and trained"
    ],
    challenges: ["Skepticism from industry veterans", "Limited initial funding"],
    quote: "The hardest part of any journey is deciding to begin.",
    duration: "6 months",
    position: { top: '75%', left: '15%' }
  },
  {
    level: 5,
    title: "Pilot Scale",
    campName: "Camp 1",
    elevation: "6,065m (19,900 ft)",
    subtitle: "Technology validated in relevant environment",
    description: "Successfully scaled from lab to pilot environment. Real-world conditions tested. Acclimatization complete.",
    status: 'completed',
    icon: Factory,
    achievements: [
      "Pilot plant operations successful",
      "Real waste stream processing",
      "Process parameters optimized",
      "Supply chain secured"
    ],
    duration: "8 months",
    position: { top: '60%', left: '70%' }
  },
  {
    level: 6,
    title: "Industrial Demo",
    campName: "Camp 2 - YOU ARE HERE",
    elevation: "6,400m (21,000 ft)",
    subtitle: "Full-scale prototype in operational environment",
    description: "Currently demonstrating full operational capabilities. Industrial-scale validation in progress. The Death Zone awaits above.",
    status: 'current',
    icon: Target,
    achievements: [
      "Industrial scale operations active",
      "Multi-stream capability proven",
      "Commercial volume processing",
      "Ready for next phase"
    ],
    quote: "We stand at the threshold of greatness.",
    duration: "In Progress",
    position: { top: '42%', left: '25%' }
  },
  {
    level: 7,
    title: "Pre-Commercial",
    campName: "Camp 3",
    elevation: "7,162m (23,500 ft)",
    subtitle: "System prototype demonstration",
    description: "Entering the Death Zone. System-level prototype demonstration planned. Oxygen required beyond this point.",
    status: 'upcoming',
    icon: TrendingUp,
    achievements: [
      "Extended prototype testing",
      "Commercial partnerships established",
      "Market validation complete"
    ],
    position: { top: '28%', left: '65%' }
  },
  {
    level: 8,
    title: "First Commercial",
    campName: "Camp 4 (South Col)",
    elevation: "7,920m (26,000 ft)",
    subtitle: "Actual system completed and qualified",
    description: "The final camp before summit push. Full commercial system qualification. Summit attempt launches from here.",
    status: 'upcoming',
    icon: Building2,
    achievements: [
      "First commercial plant online",
      "Full system qualification",
      "Operational excellence proven"
    ],
    position: { top: '15%', left: '35%' }
  },
  {
    level: 9,
    title: "Full Deployment",
    campName: "The Summit",
    elevation: "8,849m (29,032 ft)",
    subtitle: "Proven system in full operational environment",
    description: "The summit of innovation. System fully deployed and operational worldwide. The view from the top of the world.",
    status: 'upcoming',
    icon: Crown,
    achievements: [
      "Multiple facilities operational",
      "Technology proven globally",
      "Industry standard established",
      "Summit conquered"
    ],
    quote: "From here, we can see the future.",
    position: { top: '3%', left: '50%' }
  }
];

const Particles = ({ intensity = 1, type = 'snow' }: { intensity?: number; type?: 'snow' | 'stars' }) => {
  const count = Math.floor(50 * intensity);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${type === 'snow' ? 'bg-white rounded-full' : 'bg-yellow-200'}`}
          style={{
            width: type === 'snow' ? '3px' : '2px',
            height: type === 'snow' ? '3px' : '2px',
            left: `${Math.random() * 100}%`,
            opacity: type === 'snow' ? 0.6 : 0.8,
          }}
          animate={{
            y: type === 'snow' ? ['-10vh', '110vh'] : ['0vh', '0vh'],
            x: type === 'snow' ? [0, Math.random() * 50 - 25] : [0, 0],
            opacity: type === 'stars' ? [0, 1, 1, 0] : [0.6, 0.6],
          }}
          transition={{
            duration: type === 'snow' ? 10 + Math.random() * 10 : 3,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export const TRLJourney = () => {
  const [selectedTRL, setSelectedTRL] = useState<number | null>(null);
  const [hoveredTRL, setHoveredTRL] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mountainY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const skyOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  const [skyGradient, setSkyGradient] = useState('linear-gradient(180deg, #1a2332 0%, #0f1419 100%)');
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.3) {
        setSkyGradient('linear-gradient(180deg, #1a2332 0%, #0f1419 100%)');
      } else if (latest < 0.6) {
        setSkyGradient('linear-gradient(180deg, #2d1b4e 0%, #1e3a5f 100%)');
      } else {
        setSkyGradient('linear-gradient(180deg, #ff6b35 0%, #f72585 50%, #ffd60a 100%)');
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const completedCount = trlLevels.filter(t => t.status === 'completed').length;
  const currentProgress = ((completedCount + 0.5) / trlLevels.length) * 100;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[300vh] overflow-hidden"
      style={{ background: skyGradient }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: skyOpacity }} />
        
        <motion.div className="absolute inset-0" style={{ opacity: useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 1]) }}>
          <Particles type="stars" intensity={2} />
        </motion.div>

        <motion.div className="absolute inset-0" style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]) }}>
          <Particles type="snow" intensity={1.5} />
        </motion.div>

        <motion.div className="absolute inset-0 flex items-end justify-center" style={{ y: mountainY }}>
          <img src={mountainImage} alt="Mount Everest Journey" className="w-full h-[120vh] object-cover object-bottom" style={{ filter: 'brightness(0.7) contrast(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40" />
        </motion.div>

        <div className="relative h-full flex flex-col">
          <div className="container mx-auto px-6 pt-20 text-center z-20">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <h2 className="text-6xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">Our Journey</h2>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-lg">Climbing the mountain of innovation, one milestone at a time</p>
            </motion.div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-2 h-64 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#00f5ff] to-[#00ff88]" style={{ height: `${currentProgress}%` }} initial={{ height: '0%' }} animate={{ height: `${currentProgress}%` }} transition={{ duration: 1, delay: 1 }} />
              </div>
              <div className="text-white text-sm font-bold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">{completedCount}/6</div>
            </div>
          </div>

          <div className="relative flex-1 container mx-auto px-6">
            {trlLevels.map((trl, index) => {
              const Icon = trl.icon;
              const isCompleted = trl.status === 'completed';
              const isCurrent = trl.status === 'current';
              const isHovered = hoveredTRL === trl.level;
              
              return (
                <motion.div key={trl.level} className="absolute" style={{ top: trl.position.top, left: trl.position.left, transform: 'translate(-50%, -50%)', zIndex: isCurrent ? 15 : 10 }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.2 + 1 }}>
                  {isCurrent && (
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.4) 0%, transparent 70%)', width: '120px', height: '120px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.2, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                  )}

                  <motion.button onClick={() => setSelectedTRL(trl.level)} onMouseEnter={() => setHoveredTRL(trl.level)} onMouseLeave={() => setHoveredTRL(null)} className="relative group cursor-pointer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 backdrop-blur-md transition-all duration-300 ${isCompleted ? 'bg-[#00ff88]/30 border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.5)]' : ''} ${isCurrent ? 'bg-[#00f5ff]/30 border-[#00f5ff] shadow-[0_0_30px_rgba(0,245,255,0.8)]' : ''} ${!isCompleted && !isCurrent ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_15px_rgba(185,153,217,0.3)]' : ''} ${isHovered ? 'shadow-2xl' : ''}`}>
                      {isCompleted ? <Check className="w-8 h-8 text-[#00ff88]" /> : <Icon className={`w-8 h-8 ${isCurrent ? 'text-[#00f5ff]' : 'text-purple-300'}`} />}
                    </div>

                    <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md ${isCurrent ? 'bg-[#00f5ff]/90 text-black' : 'bg-black/70 text-white'} transition-all duration-300`}>
                      TRL {trl.level}
                      {isCurrent && <motion.div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00ff88] rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />}
                    </div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-64 pointer-events-none">
                          <Card className="bg-black/80 backdrop-blur-xl border-white/20 p-4">
                            <div className="text-white">
                              <div className="font-bold text-sm mb-1">{trl.campName}</div>
                              <div className="text-xs text-gray-300 mb-2">{trl.elevation}</div>
                              <div className="text-xs text-gray-400">{trl.subtitle}</div>
                            </div>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 pb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} className="container mx-auto px-6 text-center">
              <div className="inline-block bg-gradient-to-r from-[#00f5ff] to-[#00ff88] text-black font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-2xl">
                Proven at Industrial Scale — Ready to Deploy
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {selectedTRL && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 flex items-center justify-center p-6" onClick={() => setSelectedTRL(null)}>
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <Card className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-white/20 p-8">
                  {(() => {
                    const trl = trlLevels.find(t => t.level === selectedTRL)!;
                    const Icon = trl.icon;
                    
                    return (
                      <>
                        <Button variant="ghost" size="icon" onClick={() => setSelectedTRL(null)} className="absolute top-4 right-4 text-white hover:bg-white/10">
                          <X className="w-5 h-5" />
                        </Button>

                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${trl.status === 'completed' ? 'bg-[#00ff88]/20' : ''} ${trl.status === 'current' ? 'bg-[#00f5ff]/20' : ''} ${trl.status === 'upcoming' ? 'bg-purple-500/20' : ''}`}>
                            <Icon className={`w-8 h-8 ${trl.status === 'completed' ? 'text-[#00ff88]' : trl.status === 'current' ? 'text-[#00f5ff]' : 'text-purple-400'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-400 mb-1">TRL {trl.level}</div>
                            <h3 className="text-3xl font-bold text-white mb-2">{trl.campName}</h3>
                            <div className="text-sm text-gray-300">{trl.elevation}</div>
                          </div>
                          {trl.status === 'current' && <div className="px-3 py-1 bg-[#00f5ff] text-black text-xs font-bold rounded-full">YOU ARE HERE</div>}
                        </div>

                        <div className="text-lg text-gray-300 mb-6 italic">{trl.subtitle}</div>
                        <p className="text-white/90 leading-relaxed mb-6">{trl.description}</p>

                        <div className="mb-6">
                          <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Key Achievements</h4>
                          <div className="space-y-2">
                            {trl.achievements.map((achievement, i) => (
                              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {trl.challenges && (
                          <div className="mb-6">
                            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Challenges Overcome</h4>
                            <div className="space-y-2">{trl.challenges.map((challenge, i) => <div key={i} className="text-gray-400 text-sm">• {challenge}</div>)}</div>
                          </div>
                        )}

                        {trl.quote && (
                          <div className="border-l-4 border-[#00f5ff] pl-4 py-2 mb-6">
                            <p className="text-white italic">"{trl.quote}"</p>
                          </div>
                        )}

                        {trl.duration && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">Duration:</span>
                            <span className="text-white font-semibold">{trl.duration}</span>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};