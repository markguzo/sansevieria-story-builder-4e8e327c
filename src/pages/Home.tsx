import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Sparkles, TrendingUp, Package, Droplets, Recycle, Target, ArrowRight, Play, Factory, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUpMetric from "@/components/CountUpMetric";
import { TRLJourney } from "@/components/TRLJourney";
import { EnergyFlowProcess } from "@/components/EnergyFlowProcess";
import heroMistyMountain from "@/assets/hero-misty-mountain.png";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const opportunityRef = useRef(null);
  const solutionsRef = useRef(null);
  const technologyRef = useRef(null);
  const economicsRef = useRef(null);
  const everestRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);

  const isOpportunityInView = useInView(opportunityRef, { amount: 0.2, once: true });
  const isSolutionsInView = useInView(solutionsRef, { amount: 0.2, once: true });
  const isTechnologyInView = useInView(technologyRef, { amount: 0.2, once: true });
  const isEconomicsInView = useInView(economicsRef, { amount: 0.2, once: true });
  const isEverestInView = useInView(everestRef, { amount: 0.3, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isCtaInView = useInView(ctaRef, { amount: 0.2, once: true });

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Full-Screen Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-scroll md:bg-fixed"
          style={{ 
            backgroundImage: `url(${heroMistyMountain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark Overlay Gradient - Top to Bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />

        {/* Animated Concentric Circles - Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 800">
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00BFA5', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#4CAF50', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            {/* Four concentric circles with larger radii: 100px, 200px, 300px, 400px */}
            {[100, 200, 300, 400].map((r, i) => (
              <circle
                key={i}
                cx="400"
                cy="400"
                r={r}
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="3"
                style={{ 
                  animation: `pulse-circle 3s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </svg>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Tagline FIRST */}
          <motion.p
            className="text-teal-400 text-sm tracking-widest uppercase font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            INDUSTRIAL-SCALE BREAKTHROUGH
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming Plastic Waste<br />Into Premium Fuel
          </motion.h1>
          
          {/* Description Paragraph - 70% opacity */}
          <motion.p
            className="text-md md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Industrial-scale breakthrough technology that converts any plastic waste stream into high-value petrochemical feedstock
          </motion.p>
        </div>

        {/* CTA Buttons - Positioned at Bottom */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-green-900 text-white hover:bg-green-700 rounded-full px-8 py-4 font-medium shadow-lg transition-all duration-200"
            asChild
          >
            <Link to="/about">
              Learn More
            </Link>
          </Button>
          <Button 
            size="lg"
            className="border-2 border-white text-white bg-transparent hover:bg-white/20 rounded-full px-8 py-4 font-medium transition-all duration-200"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>

      {/* THE OPPORTUNITY */}
      <section ref={opportunityRef} className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpportunityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-[0.5rem] font-semibold tracking-[0.3em] mb-1 uppercase">The Opportunity</p>
            <h2 className="text-sm md:text-base font-bold mb-2 text-foreground max-w-2xl mx-auto leading-tight">
              Plastic waste represents untapped energy and massive economic value waiting to be unlocked
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {[
              { value: 1.8, suffix: "B", label: "tonnes GHG potential reduction", icon: TrendingUp },
              { value: 390, suffix: "M+", label: "tonnes available yearly", icon: Package },
              { value: 22, suffix: "M+", label: "tonnes untapped ocean resource", icon: Droplets },
              { value: 91, suffix: "%", label: "opportunity yet to capture", icon: Sparkles }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpportunityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-2 md:p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <stat.icon className="w-4 h-4 mb-1 text-accent mx-auto" />
                  <div className="text-base md:text-lg font-bold mb-0.5 text-accent text-center">
                    <CountUpMetric end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[0.5rem] text-muted-foreground text-center leading-snug">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-xs md:text-sm font-semibold text-primary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isOpportunityInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We don't just deal with waste — we transform it into high-value products
          </motion.p>
        </div>
      </section>

      {/* THREE CLEAN SOLUTIONS */}
      <section ref={solutionsRef} className="py-6 md:py-8 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-bold mb-1 text-primary">Three Clean Solutions</h2>
            <p className="text-[0.6rem] md:text-xs text-foreground">From waste to specialized fuel fractions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { 
                icon: Beaker, 
                name: "PlastiNaphtha", 
                desc: "Petrochemical feedstock for polymer production",
                color: "bg-green-100"
              },
              { 
                icon: Plane, 
                name: "PlastiSAF", 
                desc: "Sustainable Aviation Fuel meeting ASTM D7566",
                color: "bg-yellow-100"
              },
              { 
                icon: Truck, 
                name: "PlastiDiesel", 
                desc: "Ultra-clean diesel for transport and industry",
                color: "bg-blue-100"
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="p-3 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
                  <div className={`w-8 h-8 rounded-full ${product.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold mb-1 text-foreground">{product.name}</h3>
                  <p className="text-[0.6rem] text-muted-foreground leading-relaxed">{product.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT - TECHNOLOGY */}
      <section ref={technologyRef} className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-[0.5rem] font-semibold tracking-[0.3em] mb-1 uppercase">How We Do It</p>
            <h2 className="text-sm md:text-base font-bold mb-2 text-foreground">Our Technology</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { 
                icon: Factory, 
                title: "Industrial Scale", 
                subtitle: "TRL 6",
                desc: "Proven technology ready for large-scale deployment" 
              },
              { 
                icon: Award, 
                title: "Premium Quality", 
                subtitle: "100%",
                desc: "High-value petrochemical feedstock meeting industry standards" 
              },
              { 
                icon: Recycle, 
                title: "Multi-Stream", 
                subtitle: "Any Plastic",
                desc: "Processes mixed and contaminated plastic waste streams" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-accent flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xs font-bold mb-0.5 text-foreground">{item.title}</h3>
                <p className="text-[0.6rem] font-semibold text-accent mb-1">{item.subtitle}</p>
                <p className="text-[0.6rem] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENERGY FLOW PROCESS */}
      <EnergyFlowProcess />

      {/* TRL JOURNEY VISUALIZATION */}
      <TRLJourney />

      {/* THE ECONOMICS */}
      <section ref={economicsRef} className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-bold mb-1 text-foreground">The Economics</h2>
            <p className="text-[0.6rem] text-muted-foreground max-w-xl mx-auto">
              Proven profitability at industrial scale with attractive returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { label: "Input Cost", value: "$XXX", sublabel: "per tonne feedstock" },
              { label: "Processing Cost", value: "$XXX", sublabel: "per tonne output" },
              { label: "Output Value", value: "$XXX", sublabel: "per tonne fuel" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-3 bg-card border-border">
                  <div className="text-accent font-bold mb-0.5 text-lg">{item.value}</div>
                  <div className="text-foreground font-semibold mb-0.5 uppercase tracking-widest text-[0.5rem]">{item.label}</div>
                  <div className="text-muted-foreground text-[0.5rem]">{item.sublabel}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="p-3 bg-accent/10 border-2 border-accent inline-block">
              <h3 className="text-xs font-semibold mb-2 text-foreground">Net Margin</h3>
              <div className="text-accent font-bold mb-2 text-2xl">$xxx/ton</div>
              <div className="grid md:grid-cols-2 gap-3 max-w-md mx-auto">
                <div>
                  <div className="text-sm font-bold text-primary mb-0.5">XX%</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-widest text-[0.5rem]">Annual ROI</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-0.5">X.X years</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-widest text-[0.5rem]">Payback Period</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* THE EVEREST STORY SECTION */}
      <section ref={everestRef} className="relative py-6 md:py-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-4">
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isEverestInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent text-[0.5rem] font-semibold tracking-[0.2em] mb-1 uppercase">The Founder's Journey</p>
              <h2 className="text-sm md:text-base font-bold mb-2 text-foreground">From the Summit to Sustainability</h2>
              
              <div className="space-y-2 text-foreground text-[0.6rem] md:text-xs leading-relaxed">
                <p>
                  Like climbing Everest, transforming the plastic waste industry requires preparation, persistence, and an unwavering commitment to reaching the summit. Our founder's journey to the top of the world taught invaluable lessons about incremental progress, overcoming obstacles, and the importance of each small step toward an ambitious goal.
                </p>
                <p>
                  Just as every successful Everest expedition progresses through base camps, our technology has advanced through each Technology Readiness Level—each a checkpoint, each bringing us closer to the peak. At TRL 6, we're at our Camp 3, proven at industrial scale and ready for the final push to full commercial deployment.
                </p>
                <p>
                  The mountain teaches patience. It teaches that the impossible becomes possible when you break it down into achievable milestones. This philosophy drives everything we do at Sansevieria—transforming the insurmountable challenge of plastic waste, one step at a time.
                </p>
              </div>

              <p className="text-accent text-[0.6rem] italic mt-2">— Dan, Founder & CEO</p>
            </motion.div>

            <div className="md:col-span-2 flex items-center justify-center">
              <motion.div
                className="text-4xl text-foreground/10 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isEverestInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                "
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section ref={videoRef} className="py-6 md:py-8 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            className="text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-bold mb-1 text-foreground">See The Transformation</h2>
            <p className="text-[0.6rem] text-muted-foreground max-w-xl mx-auto">
              Watch how we transform plastic waste into premium fuel at industrial scale
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video bg-card rounded-xl overflow-hidden shadow-xl group cursor-pointer border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-5 h-5 text-white ml-0.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section ref={ctaRef} className="py-6 bg-accent">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-bold mb-1 text-foreground">Ready to Transform Waste into Value?</h2>
            <p className="text-[0.6rem] text-foreground/80 mb-3">
              Let's discuss how our technology can work for your organization
            </p>
            <Button 
              size="sm" 
              className="bg-primary text-background hover:bg-primary/90 font-semibold px-4 py-2 text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
