import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Droplets, Filter, Zap, ArrowRight, Play, Sparkles, TrendingUp, DollarSign, Factory, Award, Mountain, Flag, CheckCircle2, Flame, Recycle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import CountUpMetric from "@/components/CountUpMetric";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const EnergyParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(160 100% 50% / 0.8), transparent)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(160 100% 50% / 0.5)`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const opportunityRef = useRef(null);
  const energyRef = useRef(null);
  const solutionsRef = useRef(null);
  const economicsRef = useRef(null);
  const journeyRef = useRef(null);
  const videoRef = useRef(null);
  const actionRef = useRef(null);
  const visionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isOpportunityInView = useInView(opportunityRef, { amount: 0.2, once: true });
  const isEnergyInView = useInView(energyRef, { amount: 0.2, once: true });
  const isSolutionsInView = useInView(solutionsRef, { amount: 0.2, once: true });
  const isEconomicsInView = useInView(economicsRef, { amount: 0.2, once: true });
  const isJourneyInView = useInView(journeyRef, { amount: 0.2, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isActionInView = useInView(actionRef, { amount: 0.2, once: true });
  const isVisionInView = useInView(visionRef, { amount: 0.3, once: true });

  return (
    <div ref={containerRef} className="min-h-screen text-foreground relative overflow-x-hidden bg-background">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)' }}
        />
        
        <EnergyParticles />
        
        <div className="absolute inset-0 -z-5 opacity-30">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(160 100% 50% / 0.2), transparent 70%)',
              filter: 'blur(60px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(150 100% 50% / 0.2), transparent 70%)',
              filter: 'blur(60px)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, hsl(160 100% 50%) 50%, hsl(150 100% 50%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Transforming Plastic Waste<br />Into Premium Fuel
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Industrial-scale breakthrough technology that converts any plastic waste stream into high-value petrochemical feedstock
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 font-bold group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
              style={{ boxShadow: 'var(--glow-electric)' }}
              asChild
            >
              <Link to="/about">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 font-bold border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: "Industrial Scale", value: "TRL 6", icon: Factory },
              { label: "Premium Quality", value: "100%", icon: Award },
              { label: "Any Plastic", value: "Multi-Stream", icon: Recycle }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <metric.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE OPPORTUNITY SECTION */}
      <section ref={opportunityRef} className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpportunityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(160 100% 50%), hsl(150 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                THE OPPORTUNITY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Plastic waste represents untapped energy and massive economic value waiting to be unlocked
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: 1.8, suffix: "B", label: "tonnes GHG potential reduction", icon: TrendingUp, showMillionsToBillions: true },
              { value: 390, suffix: "M+", label: "tonnes available yearly", icon: Package, showMillionsToBillions: false },
              { value: 22, suffix: "M+", label: "tonnes untapped ocean resource", icon: Droplets, showMillionsToBillions: false },
              { value: 91, suffix: "%", label: "opportunity yet to capture", icon: Sparkles, showMillionsToBillions: false }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card-hover"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Card 
                  className="p-8 rounded-2xl backdrop-blur-xl relative overflow-hidden min-h-[220px] flex flex-col justify-center items-center border-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(0 0% 12% / 0.8), hsl(0 0% 8% / 0.8))',
                    borderColor: 'hsl(160 100% 50% / 0.3)'
                  }}
                >
                  <stat.icon className="w-12 h-12 mb-4 text-primary" />
                  <div className="text-4xl md:text-5xl font-black mb-2 text-primary">
                    <CountUpMetric end={stat.value} duration={2800} suffix={stat.suffix} showMillionsToBillions={stat.showMillionsToBillions} />
                  </div>
                  <p className="text-sm text-gray-400 text-center font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-12 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isOpportunityInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We don't just deal with waste — <span className="text-primary font-bold">we transform it into high-value products</span>
          </motion.p>
        </div>
      </section>

      {/* NO ENERGY PROBLEM SECTION */}
      <section ref={energyRef} className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isEnergyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(270 80% 70%), hsl(160 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                NO ENERGY PROBLEM<br />ONLY SOLUTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              The fuel isn't good enough? Not with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isEnergyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 rounded-2xl backdrop-blur-xl border-2 h-full" style={{
                background: 'linear-gradient(135deg, hsl(270 80% 70% / 0.1), hsl(0 0% 8% / 0.8))',
                borderColor: 'hsl(270 80% 70% / 0.4)'
              }}>
                <Flame className="w-16 h-16 mb-6 text-accent" />
                <h3 className="text-2xl font-bold mb-4 text-accent">High-Quality Output</h3>
                <p className="text-gray-300 mb-4">
                  Premium petrochemical feedstock and sustainable green fuel
                </p>
                <p className="text-primary font-bold text-xl">From Waste to Prime</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isEnergyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8 rounded-2xl backdrop-blur-xl border-2 h-full" style={{
                background: 'linear-gradient(135deg, hsl(160 100% 50% / 0.1), hsl(0 0% 8% / 0.8))',
                borderColor: 'hsl(160 100% 50% / 0.4)'
              }}>
                <Filter className="w-16 h-16 mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4 text-primary">WE KNOW HOW TO CLEAN</h3>
                <p className="text-gray-300 mb-4">
                  We handle different types of plastic streams:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Mixed plastics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Multiple polymer types
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Contaminated streams
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isEnergyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-8 rounded-2xl backdrop-blur-xl border-2 h-full" style={{
                background: 'linear-gradient(135deg, hsl(150 100% 50% / 0.1), hsl(0 0% 8% / 0.8))',
                borderColor: 'hsl(150 100% 50% / 0.4)'
              }}>
                <Recycle className="w-16 h-16 mb-6 text-secondary" />
                <h3 className="text-2xl font-bold mb-4 text-secondary">Handle ANY Type</h3>
                <p className="text-gray-300 mb-4">
                  Our advanced process handles what others can't
                </p>
                <p className="text-xl font-bold text-secondary">Multi-Stream Capability</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isEnergyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="p-8 rounded-2xl backdrop-blur-xl border-2" style={{
              background: 'linear-gradient(135deg, hsl(0 0% 12% / 0.9), hsl(0 0% 8% / 0.9))',
              borderColor: 'hsl(160 100% 50% / 0.3)'
            }}>
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1 text-center">
                  <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-gray-400 mb-2">INPUT</p>
                  <p className="text-xl font-bold text-foreground">Mixed Plastic Streams</p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex-1 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <p className="text-sm text-gray-400 mb-2">OUR PROCESS</p>
                  <p className="text-xl font-bold text-primary">Advanced Cleaning & Conversion</p>
                </div>
                <ArrowRight className="w-8 h-8 text-primary" />
                <div className="flex-1 text-center">
                  <Flame className="w-12 h-12 mx-auto mb-3 text-accent" />
                  <p className="text-sm text-gray-400 mb-2">OUTPUT</p>
                  <p className="text-xl font-bold text-accent">Premium Petrochemical Feed</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ECONOMIC MODEL SECTION */}
      <section ref={economicsRef} className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isEconomicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(150 100% 50%), hsl(160 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                THE ECONOMICS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              How You Can Make Money
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { label: "INPUT COST", value: "$XXX", unit: "/ton", sublabel: "(waste plastic)", icon: DollarSign, color: "text-gray-400" },
              { label: "PROCESSING COST", value: "$XXX", unit: "/ton", sublabel: "(our process)", icon: Factory, color: "text-primary" },
              { label: "OUTPUT VALUE", value: "$XXX", unit: "/ton", sublabel: "(premium fuel)", icon: TrendingUp, color: "text-secondary" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isEconomicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="p-8 rounded-2xl backdrop-blur-xl border-2 text-center" style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 12% / 0.8), hsl(0 0% 8% / 0.8))',
                  borderColor: 'hsl(160 100% 50% / 0.3)'
                }}>
                  <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                  <p className={`text-5xl font-black mb-1 ${item.color}`}>{item.value}</p>
                  <p className="text-xl text-gray-400 mb-2">{item.unit}</p>
                  <p className="text-sm text-gray-500">{item.sublabel}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isEconomicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="p-8 rounded-2xl backdrop-blur-xl border-2" style={{
              background: 'linear-gradient(135deg, hsl(150 100% 50% / 0.1), hsl(0 0% 8% / 0.9))',
              borderColor: 'hsl(150 100% 50% / 0.5)',
              boxShadow: 'var(--glow-neon)'
            }}>
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-2">NET MARGIN</p>
                <p className="text-6xl font-black text-secondary mb-4">$XXX<span className="text-3xl">/ton</span></p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">ANNUAL ROI</p>
                    <p className="text-3xl font-bold text-primary">XX%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">PAYBACK PERIOD</p>
                    <p className="text-3xl font-bold text-primary">X years</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY - EVEREST SECTION */}
      <section ref={journeyRef} className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Mountain className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] text-primary" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(270 80% 70%), hsl(160 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                OUR JOURNEY
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Climbing the Everest of Industrial Innovation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 -translate-x-1/2" />
            
            {[
              { level: "TRL 9", label: "Full Commercial Deployment", status: "future", icon: Flag },
              { level: "TRL 8", label: "System Complete", status: "future", icon: CheckCircle2 },
              { level: "TRL 7", label: "Pilot Scale", status: "past", icon: CheckCircle2 },
              { level: "TRL 6", label: "INDUSTRIAL SCALE", status: "current", icon: Factory },
              { level: "TRL 5", label: "Technology Validation", status: "past", icon: CheckCircle2 },
              { level: "TRL 4", label: "Laboratory Testing", status: "past", icon: Beaker }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <Card 
                    className={`inline-block p-6 rounded-2xl backdrop-blur-xl border-2 ${
                      milestone.status === 'current' 
                        ? 'border-primary shadow-[0_0_30px_hsl(160_100%_50%/0.5)]' 
                        : milestone.status === 'past'
                        ? 'border-secondary/50'
                        : 'border-gray-600'
                    }`}
                    style={{
                      background: milestone.status === 'current'
                        ? 'linear-gradient(135deg, hsl(160 100% 50% / 0.2), hsl(0 0% 8% / 0.9))'
                        : 'linear-gradient(135deg, hsl(0 0% 12% / 0.8), hsl(0 0% 8% / 0.8))'
                    }}
                  >
                    <p className={`text-3xl font-black mb-2 ${
                      milestone.status === 'current' ? 'text-primary' : 
                      milestone.status === 'past' ? 'text-secondary' : 'text-gray-400'
                    }`}>
                      {milestone.level}
                    </p>
                    <p className="text-lg text-foreground font-semibold">{milestone.label}</p>
                    {milestone.status === 'current' && (
                      <p className="text-sm text-primary font-bold mt-2">← YOU ARE HERE</p>
                    )}
                  </Card>
                </div>
                
                <div className={`relative z-10 ${
                  milestone.status === 'current' 
                    ? 'w-20 h-20' 
                    : 'w-16 h-16'
                }`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${
                    milestone.status === 'current'
                      ? 'bg-primary shadow-[0_0_40px_hsl(160_100%_50%/0.6)] animate-pulse'
                      : milestone.status === 'past'
                      ? 'bg-secondary'
                      : 'bg-gray-600'
                  }`}>
                    <milestone.icon className={`${
                      milestone.status === 'current' ? 'w-10 h-10' : 'w-8 h-8'
                    } text-background`} />
                  </div>
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-16 text-xl text-primary font-bold max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isJourneyInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Proven at Industrial Scale — Ready to Deploy
          </motion.p>
        </div>
      </section>

      {/* TRANSFORMATION VIDEO SECTION */}
      <section ref={videoRef} className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(160 100% 50%), hsl(270 80% 70%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                SEE THE TRANSFORMATION
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Watch how we transform plastic waste streams into premium petrochemical feedstock
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card 
              className="rounded-3xl overflow-hidden border-2 relative aspect-video"
              style={{
                background: 'linear-gradient(135deg, hsl(0 0% 12% / 0.9), hsl(0 0% 8% / 0.9))',
                borderColor: 'hsl(160 100% 50% / 0.4)',
                boxShadow: '0 0 60px hsl(160 100% 50% / 0.3)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center">
                  <Play className="w-24 h-24 mx-auto mb-6 text-primary" />
                  <p className="text-2xl font-bold text-foreground">Video Coming Soon</p>
                  <p className="text-gray-400 mt-2">Experience the transformation process</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section ref={actionRef} className="relative py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isActionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span style={{ 
                  background: 'linear-gradient(135deg, hsl(160 100% 50%), hsl(150 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                Ready to Transform Waste<br />Into Value?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join us in revolutionizing the plastic waste industry with proven industrial-scale technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-12 py-7 font-bold bg-primary text-primary-foreground hover:bg-primary/90"
                style={{ boxShadow: 'var(--glow-electric)' }}
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 font-bold border-2 border-secondary text-foreground hover:bg-secondary/10 hover:border-secondary"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
