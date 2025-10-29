import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Droplets, Filter, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import heroCircularFlow from "@/assets/hero-circular-flow.jpg";
import problemParticles from "@/assets/problem-particles.jpg";
import processAbstract from "@/assets/process-abstract.jpg";
import productsEnergy from "@/assets/products-energy.jpg";
import roadmapTimeline from "@/assets/roadmap-timeline.jpg";
import visionLeaf from "@/assets/vision-leaf.jpg";

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

  const backgroundLightness = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [30, 25, 28, 32, 35, 40]);
  
  const isProblemInView = useInView(problemRef, { amount: 0.5 });
  const isProcessInView = useInView(processRef, { amount: 0.3 });
  const isProductsInView = useInView(productsRef, { amount: 0.3 });
  const isRoadmapInView = useInView(roadmapRef, { amount: 0.3 });
  const isVisionInView = useInView(visionRef, { amount: 0.5 });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      {/* Unified Continuous Background with Emotional Glow */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 20%, hsl(88, 68%, 45%) 0%, transparent 40%),
            radial-gradient(circle at 50% 20%, hsl(88, 68%, 35%) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, hsl(155, 45%, ${backgroundLightness}%), hsl(155, 50%, 18%))
          `
        }}
      />
      
      {/* Pulsing Emotional Glow from Circle */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] -z-10 pointer-events-none"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, hsl(88, 68%, 55%, 0.6) 0%, hsl(88, 68%, 45%, 0.3) 30%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Ambient Glow Effects - Enhanced */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.9, 0.6, 0.7, 0.6, 0.8, 0.5])
        }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(88, 68%, 60%, 0.4), transparent)',
            top: useTransform(scrollYProgress, [0, 1], ['10%', '80%']),
            left: useTransform(scrollYProgress, [0, 1], ['20%', '60%'])
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(43, 74%, 57%, 0.3), transparent)',
            top: useTransform(scrollYProgress, [0, 1], ['60%', '20%']),
            right: useTransform(scrollYProgress, [0, 1], ['10%', '50%'])
          }}
        />
      </motion.div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pb-0">
        {/* Hero Image with Dramatic Rush-In Animation */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 3, opacity: 0, rotate: 180, x: "100%" }}
          animate={{ 
            scale: 1, 
            opacity: 0.5,
            rotate: 0,
            x: "0%"
          }}
          transition={{ 
            duration: 1.8,
            ease: [0.34, 1.56, 0.64, 1], // Custom easing: fast start, smooth slowdown
            scale: { duration: 1.8 },
            opacity: { duration: 1.2, delay: 0.3 },
            rotate: { duration: 1.8 },
            x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          <img 
            src={heroCircularFlow} 
            alt="Circular energy flow" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Intense Green Glow Behind Circle - Synced with Circle Movement */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.8, 
            delay: 0.3,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <motion.div
            className="w-[600px] h-[600px]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 1, 0.6],
              scale: [0.8, 1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8 // Start pulsing after circle settles
            }}
            style={{
              background: 'radial-gradient(circle, hsl(88, 68%, 55%, 0.8) 0%, hsl(88, 68%, 45%, 0.4) 40%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
        </motion.div>

        {/* Text appears after circle settles */}
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 2, // Wait for circle to settle
            ease: "easeOut" 
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">The Circle That</span><br />
            <span className="text-primary">Powers Tomorrow</span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }} // Stagger after headline
          >
            Sansevieria transforms non-recyclable plastics into circular energy —<br />
            closing the loop between waste and power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }} // Appears last
          >
            <Button 
              size="lg"
              onClick={() => problemRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-5 rounded-full shadow-[var(--glow-primary)]"
            >
              Discover the Journey <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section ref={problemRef} className="min-h-[80vh] flex items-center justify-center relative py-16 -mt-20">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProblemInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={problemParticles} 
            alt="Plastic particles" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={isProblemInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">The Scale of the Challenge</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { value: "1.8B", label: "tonnes of GHG from plastics", delay: 0 },
              { value: "390M+", label: "tonnes produced yearly", delay: 0.1 },
              { value: "22M+", label: "tonnes leak into oceans", delay: 0.2 },
              { value: "9%", label: "recycled globally", delay: 0.3 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: stat.delay, duration: 0.6 }}
              >
                <Card className="p-6 bg-card/20 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} className="min-h-screen flex items-center justify-center relative py-20 -mt-10">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProcessInView ? { opacity: 0.25 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={processAbstract} 
            alt="Energy flow transformation" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              The Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five steps. One continuous flow. Complete circularity.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <motion.div 
                className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent hidden md:block"
                initial={{ scaleX: 0 }}
                animate={isProcessInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                <ProcessStep
                  icon={Droplets}
                  title="Feedstock"
                  description="Mixed plastics"
                  isInView={isProcessInView}
                  delay={0.2}
                />
                <ProcessStep
                  icon={Filter}
                  title="Wash & Shred"
                  description="Cleaned uniformly"
                  isInView={isProcessInView}
                  delay={0.3}
                />
                <ProcessStep
                  icon={Zap}
                  title="Melt & Clean"
                  description="Proprietary tech"
                  isInView={isProcessInView}
                  delay={0.4}
                  highlighted
                />
                <ProcessStep
                  icon={Beaker}
                  title="Distill & Treat"
                  description="Stable molecules"
                  isInView={isProcessInView}
                  delay={0.5}
                />
                <ProcessStep
                  icon={ArrowRight}
                  title="Clean Fuels"
                  description="Three fractions"
                  isInView={isProcessInView}
                  delay={0.6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section ref={productsRef} className="min-h-[90vh] flex items-center justify-center relative py-16 -mt-10">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProductsInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={productsEnergy} 
            alt="Energy products" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={isProductsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">Three Clean Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From waste to specialized fuel fractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ProductCard
              icon={Beaker}
              title="PlastiNaphtha"
              description="Petrochemical feedstock for polymer production"
              color="primary"
              isInView={isProductsInView}
              delay={0.3}
            />
            <ProductCard
              icon={Plane}
              title="PlastiSAF"
              description="Sustainable Aviation Fuel meeting ASTM D7566"
              color="secondary"
              isInView={isProductsInView}
              delay={0.4}
            />
            <ProductCard
              icon={Truck}
              title="PlastiDiesel"
              description="Ultra-clean diesel for transport and industry"
              color="accent"
              isInView={isProductsInView}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section ref={roadmapRef} className="min-h-[80vh] flex items-center justify-center relative py-16 -mt-10">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isRoadmapInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={roadmapTimeline} 
            alt="Technology roadmap" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isRoadmapInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From laboratory to industrial impact
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative mb-12">
              <div className="h-0.5 bg-muted/30 rounded-full" />
              <motion.div
                className="absolute top-0 left-0 h-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(88, 68%, 66%), hsl(43, 74%, 57%), hsl(0, 0%, 96%))'
                }}
                initial={{ width: "0%" }}
                animate={isRoadmapInView ? { width: "66%" } : { width: "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              <div className="grid grid-cols-3 gap-8 mt-10">
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
                  delay={0.5}
                />
                <RoadmapNode
                  label="TRL 7-8"
                  title="Industrial Scale"
                  status="target"
                  isInView={isRoadmapInView}
                  delay={0.7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative py-20 -mt-10">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isVisionInView ? { opacity: 0.25 } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <img 
            src={visionLeaf} 
            alt="Sansevieria leaf" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-foreground">Our Vision</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-light max-w-4xl mx-auto mb-12">
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
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 text-base px-8 py-5 rounded-full shadow-[var(--glow-primary)]"
            >
              <Link to="/contact">
                Join the Movement <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

const ProcessStep = ({ icon: Icon, title, description, isInView, delay, highlighted = false }: any) => (
  <motion.div
    className="text-center relative"
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ delay, duration: 0.6 }}
  >
    <motion.div
      className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
        highlighted 
          ? 'bg-gradient-to-br from-primary to-secondary' 
          : 'bg-card/30 backdrop-blur-sm border-2 border-primary/30'
      }`}
      whileHover={{ scale: 1.15, boxShadow: 'var(--glow-primary)' }}
      animate={highlighted ? {
        boxShadow: [
          '0 0 20px hsl(88 68% 66% / 0.3)',
          '0 0 40px hsl(43 74% 57% / 0.5)',
          '0 0 20px hsl(88 68% 66% / 0.3)'
        ]
      } : {}}
      transition={highlighted ? { duration: 2, repeat: Infinity } : {}}
    >
      <Icon className={highlighted ? "text-background" : "text-primary"} size={24} />
    </motion.div>
    <h3 className="text-base font-semibold mb-1 text-foreground">{title}</h3>
    <p className="text-xs text-muted-foreground">{description}</p>
  </motion.div>
);

const ProductCard = ({ icon: Icon, title, description, color, isInView, delay }: any) => {
  const colorClass = color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="p-6 h-full bg-card/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group cursor-pointer">
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-card/40 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={colorClass} size={28} />
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
};

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
        className={`w-16 h-16 mx-auto mb-3 rounded-full ${bgClass} flex items-center justify-center border-4 border-background`}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xl font-bold text-foreground">{statusIcon}</span>
      </motion.div>
      <div className="text-sm font-bold text-primary mb-1">{label}</div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
    </motion.div>
  );
};

export default Home;
