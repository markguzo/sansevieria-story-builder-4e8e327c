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

  // Smooth color progression: Dark emerald → Mint glow → Pale seafoam
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 1],
    [
      '#0E362C', // Dark emerald
      '#1A4D3E',
      '#3D7A60',
      '#7DB89A',
      '#B8E5D0',
      '#E8FBE7'  // Pale seafoam
    ]
  );

  // Circle scale - expands as user scrolls
  const circleScale = useTransform(scrollYProgress, [0, 0.12], [1, 15]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 0.6, 0]);
  const circleRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Parallax for background layers
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  const isProblemInView = useInView(problemRef, { amount: 0.3, once: true });
  const isProcessInView = useInView(processRef, { amount: 0.2, once: true });
  const isProductsInView = useInView(productsRef, { amount: 0.2, once: true });
  const isRoadmapInView = useInView(roadmapRef, { amount: 0.2, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isVisionInView = useInView(visionRef, { amount: 0.3, once: true });

  return (
    <div ref={containerRef} className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* Smooth evolving background - Dark emerald to pale seafoam */}
      <motion.div 
        className="fixed inset-0 -z-30"
        style={{ 
          backgroundColor,
          transition: 'background-color 0.3s ease-out'
        }}
      />
      
      {/* Layered parallax mint glow - moves slowly as light diffusing */}
      <motion.div className="fixed inset-0 -z-20 pointer-events-none">
        <motion.div
          className="absolute w-[1800px] h-[1800px] rounded-full blur-[200px]"
          style={{
            background: 'radial-gradient(circle, rgba(198, 255, 92, 0.3), transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            y: parallaxY1
          }}
        />
        <motion.div
          className="absolute w-[1200px] h-[1200px] rounded-full blur-[180px]"
          style={{
            background: 'radial-gradient(circle, rgba(198, 255, 92, 0.2), transparent 65%)',
            top: '60%',
            right: '10%',
            y: parallaxY2
          }}
        />
      </motion.div>

      {/* The Circle - Visual thread that expands and dissolves */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -z-10 pointer-events-none"
        style={{
          x: '-50%',
          y: '-50%',
          scale: circleScale,
          opacity: circleOpacity,
          rotate: circleRotation
        }}
      >
        <div 
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198, 255, 92, 0.4) 0%, rgba(198, 255, 92, 0.1) 50%, transparent 70%)',
            filter: 'blur(2px)'
          }}
        />
      </motion.div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background - Darkened for contrast */}
        <div className="absolute inset-0 opacity-60">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) contrast(1.2)' }}
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.playbackRate = 1.5;
            }}
          >
            <source src={heroBackgroundVideo} type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-12 leading-tight text-white"
            style={{ 
              textShadow: '0 0 60px rgba(198, 255, 92, 0.3)'
            }}
          >
            The Circle That Powers Tomorrow
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light text-white/90"
          >
            Turning today's waste into tomorrow's energy.
          </p>

          <Button 
            size="lg"
            onClick={() => problemRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-12 py-7 rounded-full font-medium"
            style={{ 
              backgroundColor: '#0E362C',
              color: '#C6FF5C',
              border: '2px solid #C6FF5C',
              boxShadow: '0 0 20px rgba(198, 255, 92, 0.3)'
            }}
          >
            Learn how we do it ↓
          </Button>
        </div>
      </section>

      {/* THE PROBLEM SECTION - Cinematic entrance */}
      <section ref={problemRef} className="min-h-[90vh] flex items-center justify-center relative py-32">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title - Fade up smoothly */}
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ 
              color: '#0B281D',
              textShadow: '0 2px 10px rgba(198, 255, 92, 0.1)'
            }}
          >
            The Scale of the Challenge
          </motion.h2>
          
          {/* Metric Cards - Staggered soft entrance with glow pulse */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "1.8B", label: "tonnes of GHG from plastics", delay: 0 },
              { value: "390M+", label: "tonnes produced yearly", delay: 0.15 },
              { value: "22M+", label: "tonnes leak into oceans", delay: 0.3 },
              { value: "9%", label: "recycled globally", delay: 0.45 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  delay: stat.delay, 
                  duration: 0.9, 
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Frosted glass card - airy and clean */}
                <div 
                  className="p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 8px 32px rgba(14, 54, 44, 0.1)'
                  }}
                >
                  {/* Number with soft glow pulse - appears once */}
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold mb-3"
                    style={{ color: '#B8FF72' }}
                    initial={{ filter: 'drop-shadow(0 0 0px rgba(184, 255, 114, 0))' }}
                    animate={isProblemInView ? {
                      filter: [
                        'drop-shadow(0 0 0px rgba(184, 255, 114, 0))',
                        'drop-shadow(0 0 20px rgba(184, 255, 114, 0.8))',
                        'drop-shadow(0 0 8px rgba(184, 255, 114, 0.3))'
                      ]
                    } : {}}
                    transition={{ 
                      delay: stat.delay + 0.3,
                      duration: 1.2,
                      times: [0, 0.5, 1],
                      ease: "easeInOut"
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <p 
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: '#0B281D' }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} className="min-h-screen flex items-center justify-center relative py-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0B281D' }}>
              The Transformation
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: '#0E362C' }}>
              Five steps. One continuous flow. Complete circularity.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ProcessStep
                icon={Droplets}
                title="Feedstock"
                description="Mixed plastics"
                isInView={isProcessInView}
                delay={0}
              />
              <ProcessStep
                icon={Filter}
                title="Wash & Shred"
                description="Cleaned uniformly"
                isInView={isProcessInView}
                delay={0.1}
              />
              <ProcessStep
                icon={Zap}
                title="Melt & Clean"
                description="Proprietary tech"
                isInView={isProcessInView}
                delay={0.2}
                highlighted
              />
              <ProcessStep
                icon={Beaker}
                title="Distill & Treat"
                description="Stable molecules"
                isInView={isProcessInView}
                delay={0.3}
              />
              <ProcessStep
                icon={ArrowRight}
                title="Clean Fuels"
                description="Three fractions"
                isInView={isProcessInView}
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section ref={productsRef} className="min-h-[95vh] flex items-center justify-center relative py-28">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0B281D' }}>
              Three Clean Solutions
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: '#0E362C' }}>
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
              delay={0}
            />
            <ProductCard
              icon={Plane}
              title="PlastiSAF"
              description="Sustainable Aviation Fuel meeting ASTM D7566"
              color="secondary"
              isInView={isProductsInView}
              delay={0.15}
            />
            <ProductCard
              icon={Truck}
              title="PlastiDiesel"
              description="Ultra-clean diesel for transport and industry"
              color="accent"
              isInView={isProductsInView}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section ref={videoRef} className="min-h-[85vh] flex items-center justify-center relative py-28">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0B281D' }}>
              See It In Action
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: '#0E362C' }}>
              Watch how we transform waste into energy
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVideoInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {/* Video Placeholder */}
            <div 
              className="relative aspect-video backdrop-blur-sm rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(184, 255, 114, 0.4)',
                boxShadow: '0 8px 32px rgba(14, 54, 44, 0.15)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div 
                    className="w-24 h-24 rounded-full backdrop-blur-sm flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      boxShadow: '0 4px 20px rgba(14, 54, 44, 0.2)'
                    }}
                  >
                    <Play className="ml-1" size={40} fill="#B8FF72" style={{ color: '#B8FF72' }} />
                  </div>
                  <p className="text-lg font-semibold" style={{ color: '#0B281D' }}>Coming Soon</p>
                  <p className="text-sm max-w-md text-center px-4" style={{ color: '#0E362C' }}>
                    Video content will be added here showcasing our transformation process
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section ref={roadmapRef} className="min-h-[85vh] flex items-center justify-center relative py-28">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isRoadmapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0B281D' }}>
              Our Journey
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: '#0E362C' }}>
              From laboratory to industrial impact
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative mb-12">
              <div className="h-0.5 rounded-full" style={{ backgroundColor: 'rgba(184, 255, 114, 0.2)' }} />
              <motion.div
                className="absolute top-0 left-0 h-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #B8FF72, #C6FF5C, rgba(255, 255, 255, 0.5))'
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
                  delay={0.2}
                />
                <RoadmapNode
                  label="TRL 3-5"
                  title="Pilot Phase"
                  status="current"
                  isInView={isRoadmapInView}
                  delay={0.4}
                />
                <RoadmapNode
                  label="TRL 7-8"
                  title="Industrial Scale"
                  status="target"
                  isInView={isRoadmapInView}
                  delay={0.6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative py-32">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-5xl md:text-8xl font-bold mb-16"
            style={{ color: '#0B281D' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
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
        </div>
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
