import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Droplets, Filter, Zap, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import heroCircularFlow from "@/assets/hero-circular-flow.jpg";
import heroBackgroundVideo from "@/assets/hero-background.mp4";
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
  const videoRef = useRef(null);
  const visionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundLightness = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [82, 80, 78, 80, 82, 84]);
  
  const isProblemInView = useInView(problemRef, { amount: 0.3, once: true });
  const isProcessInView = useInView(processRef, { amount: 0.2, once: true });
  const isProductsInView = useInView(productsRef, { amount: 0.2, once: true });
  const isRoadmapInView = useInView(roadmapRef, { amount: 0.2, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isVisionInView = useInView(visionRef, { amount: 0.3, once: true });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      {/* Unified Background with Depth */}
      <motion.div 
        className="fixed inset-0 -z-20"
        style={{
          background: `linear-gradient(180deg, hsl(150, 25%, ${backgroundLightness}%), hsl(150, 20%, 75%))`
        }}
      />
      
      {/* Layered Glow from Behind - Deep Layer */}
      <motion.div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute w-[1200px] h-[1200px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, hsl(88, 68%, 66%, 0.35), transparent 60%)',
            top: useTransform(scrollYProgress, [0, 1], ['-10%', '70%']),
            left: useTransform(scrollYProgress, [0, 1], ['10%', '50%']),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.5])
          }}
        />
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(43, 90%, 72%, 0.3), transparent 60%)',
            top: useTransform(scrollYProgress, [0, 1], ['40%', '10%']),
            right: useTransform(scrollYProgress, [0, 1], ['5%', '40%']),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.4])
          }}
        />
      </motion.div>

      {/* HERO SECTION - Video Background with Text Animation */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pb-0">
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.7) contrast(1.1)',
              mixBlendMode: 'normal'
            }}
            onEnded={(e) => {
              const video = e.currentTarget;
              video.pause();
            }}
          >
            <source src={heroBackgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        </motion.div>

        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Text Animation synchronized with video emotion */}
          <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight" style={{ perspective: '1000px' }}>
            {["The", "Circle", "That", "Powers", "Tomorrow"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                style={{ color: '#0E362C' }}
                initial={{ opacity: 0, scale: 0.3, y: 60 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + i * 0.15,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: '#0E362C' }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Turning today's waste into tomorrow's energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              onClick={() => problemRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-12 py-7 rounded-full font-medium transition-all duration-300"
              style={{ 
                backgroundColor: '#0E362C',
                color: '#C6FF5C',
                border: '2px solid #C6FF5C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 255, 92, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Learn how we do it ↓
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section ref={problemRef} className="min-h-[90vh] flex items-center justify-center relative py-24 mt-12">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProblemInView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={problemParticles} 
            alt="Plastic particles" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={isProblemInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-16 text-center text-foreground"
            initial={{ opacity: 0, y: 40 }}
            animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            The Scale of the Challenge
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: "1.8B", label: "tonnes of GHG from plastics", delay: 0.2 },
              { value: "390M+", label: "tonnes produced yearly", delay: 0.3 },
              { value: "22M+", label: "tonnes leak into oceans", delay: 0.4 },
              { value: "9%", label: "recycled globally", delay: 0.5 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isProblemInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                transition={{ delay: stat.delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  boxShadow: 'var(--glow-primary)',
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-8 bg-white/70 backdrop-blur-sm border-primary/40 hover:border-primary/70 transition-all shadow-md hover:shadow-xl">
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold text-primary mb-3"
                    initial={{ scale: 0 }}
                    animate={isProblemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: stat.delay + 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} className="min-h-screen flex items-center justify-center relative py-32 mt-16">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProcessInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={processAbstract} 
            alt="Energy flow transformation" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              The Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
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
      <section ref={productsRef} className="min-h-[95vh] flex items-center justify-center relative py-28 mt-12">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isProductsInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={productsEnergy} 
            alt="Energy products" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Three Clean Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
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

      {/* VIDEO SECTION */}
      <section ref={videoRef} className="min-h-[85vh] flex items-center justify-center relative py-28 mt-12">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isVideoInView ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={processAbstract} 
            alt="Technology background" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Watch how we transform waste into energy
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Video Placeholder */}
            <motion.div 
              className="relative aspect-video bg-white/20 backdrop-blur-sm rounded-3xl border-2 border-primary/40 overflow-hidden shadow-2xl group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                boxShadow: 'var(--glow-primary)',
                borderColor: 'hsl(88 68% 66% / 0.7)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 opacity-60" />
              
              {/* Video will go here - currently placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="text-primary ml-1" size={40} fill="hsl(88 68% 66%)" />
                  </motion.div>
                  <p className="text-foreground text-lg font-semibold">Coming Soon</p>
                  <p className="text-muted-foreground text-sm max-w-md text-center px-4">
                    Video content will be added here showcasing our transformation process
                  </p>
                </motion.div>
              </div>

              {/* Soft vignette for blending */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(circle at center, transparent 40%, hsl(150 25% 82% / 0.4) 100%)'
              }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section ref={roadmapRef} className="min-h-[85vh] flex items-center justify-center relative py-28 mt-12">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isRoadmapInView ? { opacity: 0.04 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={roadmapTimeline} 
            alt="Technology roadmap" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isRoadmapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
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
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative py-32 mt-16">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isVisionInView ? { opacity: 0.07 } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <img 
            src={visionLeaf} 
            alt="Sansevieria leaf" 
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-8xl font-bold mb-16 text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision
          </motion.h2>
          
          <div className="text-2xl md:text-4xl leading-relaxed font-light max-w-5xl mx-auto mb-16 space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-primary font-medium" style={{ filter: 'drop-shadow(0 0 15px hsl(88 68% 66% / 0.4))' }}>
                Nature's design.
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-secondary font-medium" style={{ filter: 'drop-shadow(0 0 15px hsl(43 90% 72% / 0.4))' }}>
                Human innovation.
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="text-foreground font-medium">
                Circular power for the planet.
              </span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-[var(--glow-primary)] transition-all"
            >
              <Link to="/contact">
                Join the Movement <ArrowRight className="ml-2" size={22} />
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
    initial={{ opacity: 0, y: 40, scale: 0.8 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
    transition={{ delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
  >
    <motion.div
      className={`w-24 h-24 mx-auto mb-5 rounded-full flex items-center justify-center ${
        highlighted 
          ? 'bg-gradient-to-br from-primary to-secondary shadow-xl' 
          : 'bg-white/80 backdrop-blur-sm border-2 border-primary/50 shadow-md'
      }`}
      whileHover={{ 
        scale: 1.2, 
        rotate: 360,
        boxShadow: 'var(--glow-primary)',
        transition: { duration: 0.5 }
      }}
      animate={highlighted ? {
        boxShadow: [
          '0 0 25px hsl(88 68% 66% / 0.5)',
          '0 0 40px hsl(43 90% 72% / 0.7)',
          '0 0 25px hsl(88 68% 66% / 0.5)'
        ],
        scale: [1, 1.05, 1]
      } : {}}
      transition={highlighted ? { duration: 2.5, repeat: Infinity } : {}}
    >
      <Icon className={highlighted ? "text-background" : "text-primary"} size={28} />
    </motion.div>
    <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

const ProductCard = ({ icon: Icon, title, description, color, isInView, delay }: any) => {
  const colorClass = color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ 
        y: -16, 
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
    >
      <Card className="p-8 h-full bg-white/70 backdrop-blur-md border-primary/40 hover:border-primary/70 transition-all group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20">
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/90 flex items-center justify-center shadow-md"
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            boxShadow: 'var(--glow-primary)'
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={colorClass} size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

const RoadmapNode = ({ label, title, status, isInView, delay }: any) => {
  const bgClass = status === 'complete' ? 'bg-primary shadow-[var(--glow-primary)]' : status === 'current' ? 'bg-secondary shadow-[var(--glow-secondary)]' : 'bg-white/70 border-2 border-muted';
  const statusIcon = status === 'complete' ? '✓' : status === 'current' ? '▶' : '◻';
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 30 }}
      transition={{ delay, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className={`w-20 h-20 mx-auto mb-4 rounded-full ${bgClass} flex items-center justify-center border-4 border-background`}
        whileHover={{ 
          scale: 1.15,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
        animate={status === 'current' ? {
          scale: [1, 1.05, 1],
          boxShadow: [
            'var(--glow-secondary)',
            '0 0 40px hsl(43 90% 72% / 0.8)',
            'var(--glow-secondary)'
          ]
        } : {}}
        transition={status === 'current' ? { duration: 2, repeat: Infinity } : {}}
      >
        <span className="text-2xl font-bold text-foreground">{statusIcon}</span>
      </motion.div>
      <div className="text-base font-bold text-primary mb-2">{label}</div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </motion.div>
  );
};

export default Home;
