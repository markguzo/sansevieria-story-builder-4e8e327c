import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Droplets, Filter, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const processRef = useRef(null);
  const productsRef = useRef(null);
  const roadmapRef = useRef(null);
  const visionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create depth and lighting variations as user scrolls
  const backgroundLightness = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [8, 6, 7, 8, 9, 12]);
  
  const isProblemInView = useInView(problemRef, { amount: 0.5 });
  const isProcessInView = useInView(processRef, { amount: 0.3 });
  const isProductsInView = useInView(productsRef, { amount: 0.3 });
  const isRoadmapInView = useInView(roadmapRef, { amount: 0.3 });
  const isVisionInView = useInView(visionRef, { amount: 0.5 });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      {/* Unified Continuous Background with Depth Variations */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsl(155, 50%, ${backgroundLightness}%), hsl(155, 50%, 6%))`
        }}
      />

      {/* Ambient Glow Effects that Move with Scroll */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 0.4, 0.6, 0.5, 0.7, 0.3])
        }}
      >
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(88, 68%, 66%, 0.2), transparent)',
            top: useTransform(scrollYProgress, [0, 1], ['10%', '80%']),
            left: useTransform(scrollYProgress, [0, 1], ['20%', '60%'])
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(43, 74%, 57%, 0.15), transparent)',
            top: useTransform(scrollYProgress, [0, 1], ['60%', '20%']),
            right: useTransform(scrollYProgress, [0, 1], ['10%', '50%'])
          }}
        />
      </motion.div>

      {/* HERO SECTION - Opening Scene */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Circular Energy Flow Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 800">
            {/* Infinite circular flow */}
            <motion.circle
              cx="400"
              cy="400"
              r="200"
              stroke="url(#circularGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              animate={{
                rotate: 360,
                strokeDashoffset: [0, -100]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.circle
              cx="400"
              cy="400"
              r="280"
              stroke="url(#circularGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              animate={{
                rotate: -360,
                strokeDashoffset: [0, 100]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Pulsing center */}
            <motion.circle
              cx="400"
              cy="400"
              r="40"
              fill="hsl(88, 68%, 66%)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <defs>
              <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(88, 68%, 66%)" />
                <stop offset="50%" stopColor="hsl(43, 74%, 57%)" />
                <stop offset="100%" stopColor="hsl(88, 68%, 66%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
            <span className="text-foreground">The End Is</span><br />
            <span className="text-primary">Just the Start</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sansevieria transforms non-recyclable plastics into circular energy —<br />
            closing the loop between waste and power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => problemRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full shadow-[var(--glow-primary)]"
            >
              Discover the Journey <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* THE PROBLEM SECTION - Floating Particles */}
      <section ref={problemRef} className="min-h-screen flex items-center justify-center relative py-32">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-muted rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={isProblemInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-foreground">The Scale of the Challenge</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "1.8B", label: "tonnes of GHG from plastics", delay: 0 },
              { value: "390M+", label: "tonnes produced yearly", delay: 0.2 },
              { value: "22M+", label: "tonnes leak into oceans", delay: 0.4 },
              { value: "9%", label: "recycled globally", delay: 0.6 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: stat.delay, duration: 0.8 }}
              >
                <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                  <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROCESS SECTION - Morphing Flow */}
      <section ref={processRef} className="min-h-screen flex items-center justify-center relative py-32">
        {/* Glowing connectors */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isProcessInView ? { opacity: 0.1 } : { opacity: 0 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <motion.path
              d="M 100 300 L 300 300 L 500 300 L 700 300 L 900 300 L 1100 300"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={isProcessInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 1000 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(88, 68%, 66%)" />
                <stop offset="50%" stopColor="hsl(43, 74%, 57%)" />
                <stop offset="100%" stopColor="hsl(0, 0%, 96%)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">The Transformation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five steps. One continuous flow. Complete circularity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto relative">
            <ProcessStep
              icon={Droplets}
              title="Feedstock"
              description="Mixed plastic waste"
              isInView={isProcessInView}
              delay={0.2}
            />
            <ProcessStep
              icon={Filter}
              title="Wash & Shred"
              description="Cleaned uniformly"
              isInView={isProcessInView}
              delay={0.4}
            />
            <ProcessStep
              icon={Zap}
              title="Melt & Clean"
              description="Proprietary removal"
              isInView={isProcessInView}
              delay={0.6}
              highlighted
            />
            <ProcessStep
              icon={Beaker}
              title="Distill & Treat"
              description="Stable molecules"
              isInView={isProcessInView}
              delay={0.8}
            />
            <ProcessStep
              icon={ArrowRight}
              title="Clean Fuels"
              description="Three fractions"
              isInView={isProcessInView}
              delay={1}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Splitting Streams */}
      <section ref={productsRef} className="min-h-screen flex items-center justify-center relative py-32">
        {/* Animated splitting lines */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
          initial={{ opacity: 0 }}
          animate={isProductsInView ? { opacity: 0.1 } : { opacity: 0 }}
        >
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <motion.path
              d="M 400 100 L 400 300"
              stroke="hsl(88, 68%, 66%)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isProductsInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
              d="M 400 300 L 200 500"
              stroke="hsl(88, 68%, 66%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isProductsInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.path
              d="M 400 300 L 400 500"
              stroke="hsl(43, 74%, 57%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isProductsInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.path
              d="M 400 300 L 600 500"
              stroke="hsl(0, 0%, 96%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isProductsInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={isProductsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Three Clean Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From waste to specialized fuel fractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProductCard
              icon={Beaker}
              title="PlastiNaphtha"
              description="Petrochemical feedstock for polymer production"
              color="primary"
              isInView={isProductsInView}
              delay={0.5}
            />
            <ProductCard
              icon={Plane}
              title="PlastiSAF"
              description="Sustainable Aviation Fuel meeting ASTM D7566"
              color="secondary"
              isInView={isProductsInView}
              delay={0.7}
            />
            <ProductCard
              icon={Truck}
              title="PlastiDiesel"
              description="Ultra-clean diesel for transport and industry"
              color="accent"
              isInView={isProductsInView}
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION - Filling Progress */}
      <section ref={roadmapRef} className="min-h-screen flex items-center justify-center relative py-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={isRoadmapInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From laboratory to industrial impact
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Progress bar */}
            <div className="relative mb-16">
              <div className="h-1 bg-muted/30 rounded-full" />
              <motion.div
                className="absolute top-0 left-0 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(88, 68%, 66%), hsl(43, 74%, 57%), hsl(0, 0%, 96%))'
                }}
                initial={{ width: "0%" }}
                animate={isRoadmapInView ? { width: "66%" } : { width: "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              <div className="grid grid-cols-3 gap-8 mt-12">
                <RoadmapNode
                  label="TRL 1-2"
                  title="Lab Tests"
                  status="complete"
                  isInView={isRoadmapInView}
                  delay={0.3}
                />
                <RoadmapNode
                  label="TRL 3-5"
                  title="Pilot Phase"
                  status="current"
                  isInView={isRoadmapInView}
                  delay={0.6}
                />
                <RoadmapNode
                  label="TRL 7-8"
                  title="Industrial Scale"
                  status="target"
                  isInView={isRoadmapInView}
                  delay={0.9}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION - Closing Scene */}
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative py-32">
        {/* Circular pulse animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isVisionInView ? { opacity: 0.15 } : { opacity: 0 }}
        >
          <motion.div
            className="w-96 h-96 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-secondary"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1
            }}
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-foreground">Our Vision</h2>
          <p className="text-3xl md:text-4xl leading-relaxed font-light max-w-4xl mx-auto mb-16">
            <span className="text-primary">Nature's design.</span>{" "}
            <span className="text-secondary">Human innovation.</span>{" "}
            <span className="text-foreground">Circular power for the planet.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 text-lg px-10 py-6 rounded-full shadow-[var(--glow-primary)]"
            >
              <Link to="/contact">
                Join the Movement <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ icon: Icon, title, description, isInView, delay, highlighted = false }: any) => (
  <motion.div
    className="text-center relative"
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.div
      className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
        highlighted 
          ? 'bg-gradient-to-br from-primary to-secondary' 
          : 'bg-card/40 backdrop-blur-sm border-2 border-primary/30'
      }`}
      whileHover={{ scale: 1.1, boxShadow: 'var(--glow-primary)' }}
      animate={highlighted ? {
        boxShadow: [
          '0 0 20px hsl(88 68% 66% / 0.3)',
          '0 0 40px hsl(43 74% 57% / 0.5)',
          '0 0 20px hsl(88 68% 66% / 0.3)'
        ]
      } : {}}
      transition={highlighted ? { duration: 2, repeat: Infinity } : {}}
    >
      <Icon className={highlighted ? "text-background" : "text-primary"} size={28} />
    </motion.div>
    <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

// Product Card Component
const ProductCard = ({ icon: Icon, title, description, color, isInView, delay }: any) => {
  const colorClass = color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="p-8 h-full bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group cursor-pointer">
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-card/50 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={colorClass} size={36} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
};

// Roadmap Node Component
const RoadmapNode = ({ label, title, status, isInView, delay }: any) => {
  const bgClass = status === 'complete' ? 'bg-primary' : status === 'current' ? 'bg-secondary' : 'bg-muted/40';
  const statusIcon = status === 'complete' ? '✓' : status === 'current' ? '▶' : '◻';
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className={`w-20 h-20 mx-auto mb-4 rounded-full ${bgClass} flex items-center justify-center border-4 border-background`}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-2xl font-bold text-foreground">{statusIcon}</span>
      </motion.div>
      <div className="text-sm font-bold text-primary mb-2">{label}</div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </motion.div>
  );
};

export default Home;
