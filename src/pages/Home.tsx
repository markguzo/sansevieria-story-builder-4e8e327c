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
  const circleVideoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero section scroll progress (0 to 1 for the first ~150vh)
  const heroProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  
  // Circle animation lifecycle (one-time only)
  const circleScale = useTransform(
    heroProgress, 
    [0, 0.4, 0.8, 1], 
    [1.0, 1.2, 1.6, 1.6]
  );
  const circleOpacity = useTransform(
    heroProgress,
    [0, 0.4, 0.8, 1],
    [0.95, 1.0, 0.4, 0]
  );
  const circleBlur = useTransform(
    heroProgress,
    [0, 0.4, 0.8, 1],
    [0, 0, 6, 6]
  );

  // Continuous gradient background (no seams)
  const backgroundColor = useTransform(
    heroProgress,
    [0, 0.45, 1],
    ['#0E362C', '#BDF9C8', '#F6FFF6']
  );

  // Pause video when animation completes
  const pauseVideoWhenComplete = (progress: number) => {
    if (progress > 0.85 && circleVideoRef.current && !circleVideoRef.current.paused) {
      circleVideoRef.current.pause();
    }
  };

  heroProgress.on('change', pauseVideoWhenComplete);
  
  const isProblemInView = useInView(problemRef, { amount: 0.2, once: true });
  const isProcessInView = useInView(processRef, { amount: 0.2, once: true });
  const isProductsInView = useInView(productsRef, { amount: 0.2, once: true });
  const isRoadmapInView = useInView(roadmapRef, { amount: 0.2, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isVisionInView = useInView(visionRef, { amount: 0.3, once: true });

  return (
    <div ref={containerRef} className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* Continuous gradient background - no seams */}
      <motion.div 
        className="fixed inset-0 -z-30"
        style={{ backgroundColor }}
      />
      
      {/* Subtle moving grain for depth */}
      <div 
        className="fixed inset-0 -z-20 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}
      />

      {/* The Circle - expands once, lights the scene, then fades */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -z-10 pointer-events-none"
        style={{
          x: '-50%',
          y: '-50%',
          scale: circleScale,
          opacity: circleOpacity,
          filter: circleBlur.get() ? `blur(${circleBlur.get()}px)` : 'blur(0px)',
          willChange: 'transform, opacity'
        }}
      >
        <div 
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198, 255, 92, 0.6) 0%, rgba(189, 249, 200, 0.4) 35%, transparent 65%)'
          }}
        />
      </motion.div>

      {/* UNIFIED HERO + PROBLEM SECTION - One continuous scene */}
      <section className="min-h-[200vh] relative">
        {/* Sticky Hero with Circle Video */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* Video Background - Circle animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              ref={circleVideoRef}
              autoPlay
              muted
              playsInline
              className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
              style={{ 
                opacity: 0.6,
                filter: 'brightness(0.9) contrast(1.1)'
              }}
              onLoadedData={(e) => {
                const video = e.currentTarget;
                video.playbackRate = 1.5;
              }}
            >
              <source src={heroBackgroundVideo} type="video/mp4" />
            </video>
          </div>

          {/* Hero Text Content */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-12 leading-tight text-white"
              style={{ textShadow: '0 0 60px rgba(198, 255, 92, 0.3)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              The Circle That Powers Tomorrow
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Turning today's waste into tomorrow's energy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
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
            </motion.div>
          </div>
        </div>

        {/* The Scale of the Challenge - Reveals as circle fades */}
        <div ref={problemRef} className="min-h-screen flex items-center justify-center relative z-10">
          <div className="container mx-auto px-6">
            {/* Title with gradient sweep */}
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ 
                background: isProblemInView 
                  ? 'linear-gradient(135deg, #0F3E2E 0%, #A9F46C 100%)'
                  : 'linear-gradient(135deg, #0F3E2E 0%, #0F3E2E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'background 0.3s ease-out 0.6s'
              }}
            >
              The Scale of the Challenge
            </motion.h2>

            {/* Subline */}
            <motion.p
              className="text-xl text-center mb-20 max-w-2xl mx-auto font-light"
              style={{ color: '#1D4B36', opacity: 0.8 }}
              initial={{ opacity: 0, y: 12 }}
              animate={isProblemInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              As the world wakes up, the scale of the plastic problem becomes clear.
            </motion.p>
            
            {/* Metric Cards - 2x2 grid with stagger */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { value: "1.8B", label: "tonnes of GHG from plastics", delay: 0 },
                { value: "390M+", label: "tonnes produced yearly", delay: 0.15 },
                { value: "22M+", label: "tonnes leak into oceans", delay: 0.3 },
                { value: "9%", label: "recycled globally", delay: 0.45 }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ 
                    delay: stat.delay, 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {/* Clean frosted card */}
                  <div 
                    className="p-8 rounded-3xl backdrop-blur-[10px]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(14, 54, 44, 0.08)'
                    }}
                  >
                    {/* Number with single glow pulse */}
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold mb-3"
                      style={{ 
                        background: 'linear-gradient(135deg, #B8FF72, #74D46E)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                      animate={isProblemInView ? {
                        filter: [
                          'drop-shadow(0 0 0px rgba(184, 255, 114, 0))',
                          'drop-shadow(0 0 16px rgba(184, 255, 114, 0.8))',
                          'drop-shadow(0 0 6px rgba(184, 255, 114, 0.3))'
                        ]
                      } : {}}
                      transition={{ 
                        delay: stat.delay + 0.5,
                        duration: 0.8,
                        times: [0, 0.6, 1],
                        ease: "easeInOut"
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p 
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: '#1D4B36', opacity: 0.8 }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
