import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Droplets, Filter, Zap, ArrowRight, Play, Sparkles, TrendingUp, DollarSign, Factory, Award, Mountain, Flag, CheckCircle2, Flame, Recycle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import CountUpMetric from "@/components/CountUpMetric";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #1e2433 50%, #1a1f2e 100%)' }} />
        
        <motion.div
          className="absolute inset-0 -z-5 opacity-20"
          style={{ background: 'radial-gradient(circle at 50% 50%, hsl(150 100% 50% / 0.1), transparent 60%)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center" style={{ maxWidth: '1200px' }}>
          <motion.p
            className="text-primary text-sm font-semibold tracking-[0.15em] mb-6 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Industrial-Scale Breakthrough
          </motion.p>

          <motion.h1 
            className="font-bold mb-8"
            style={{
              fontSize: '56px',
              lineHeight: '1.2',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FFFFFF 0%, hsl(150 100% 50%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Transforming Plastic Waste<br />Into Premium Fuel
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            style={{ lineHeight: '1.7', fontSize: '18px' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Industrial-scale breakthrough technology that converts any plastic waste stream into high-value petrochemical feedstock
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, boxShadow: 'var(--glow-cta)' }}
              asChild
            >
              <Link to="/about">
                <span className="flex items-center gap-2">Learn More <ArrowRight className="w-5 h-5" /></span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200"
              style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600 }}
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { label: "Industrial Scale", value: "TRL 6", icon: Factory },
              { label: "Premium Quality", value: "100%", icon: Award },
              { label: "Any Plastic", value: "Multi-Stream", icon: Recycle }
            ].map((metric, i) => (
              <Card 
                key={i} 
                className="p-6 text-center border transition-all duration-200"
                style={{
                  background: 'rgba(30, 36, 51, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" style={{ opacity: 0.9 }} />
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section ref={opportunityRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-muted" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isOpportunityInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="font-bold mb-6" style={{ fontSize: '42px', fontWeight: 700 }}>
              <span className="text-foreground">THE </span>
              <span style={{ background: 'linear-gradient(90deg, #00FF88, #00C4E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OPPORTUNITY</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Plastic waste represents untapped energy and massive economic value waiting to be unlocked
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: 1.8, suffix: "B", label: "tonnes GHG potential reduction", icon: TrendingUp, showMillionsToBillions: true },
              { value: 390, suffix: "M+", label: "tonnes available yearly", icon: Package, showMillionsToBillions: false },
              { value: 22, suffix: "M+", label: "tonnes untapped ocean resource", icon: Droplets, showMillionsToBillions: false },
              { value: 91, suffix: "%", label: "opportunity yet to capture", icon: Sparkles, showMillionsToBillions: false }
            ].map((stat, i) => (
              <motion.div key={i} className="stat-card-hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }} viewport={{ once: true, amount: 0.4 }}>
                <Card className="p-8 backdrop-blur-xl relative overflow-hidden min-h-[220px] flex flex-col justify-center items-center border transition-all duration-200"
                  style={{ background: 'rgba(30, 36, 51, 0.5)', border: '1px solid rgba(0, 255, 136, 0.2)', borderRadius: '12px', boxShadow: 'var(--shadow-card)' }}>
                  <stat.icon className="w-10 h-10 mb-4 text-primary" style={{ opacity: 0.8 }} />
                  <div className="text-4xl font-bold mb-2 text-primary">
                    <CountUpMetric value={stat.value} suffix={stat.suffix} showMillionsToBillions={stat.showMillionsToBillions} />
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-center text-primary font-semibold max-w-3xl mx-auto" style={{ marginTop: '60px', fontSize: '24px', fontWeight: 600 }}
            initial={{ opacity: 0 }} animate={isOpportunityInView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }}>
            We don't just deal with waste — we transform it into high-value products
          </motion.p>
        </div>
      </section>

      {/* NO ENERGY PROBLEM */}
      <section ref={energyRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-muted to-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isEnergyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="font-bold mb-6 text-foreground" style={{ fontSize: '42px', fontWeight: 700 }}>
              No Energy Problem
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Our process is energy-positive, generating more energy than it consumes
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={containerVariants} initial="hidden" animate={isEnergyInView ? "visible" : "hidden"}>
            {[
              { icon: Flame, title: "Energy Positive", desc: "Generates surplus energy from waste heat recovery" },
              { icon: Zap, title: "Self-Sustaining", desc: "Powers itself with byproduct syngas" },
              { icon: TrendingUp, title: "Net Contributor", desc: "Exports excess energy to the grid" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="p-8 h-full border transition-all duration-200" style={{ background: 'rgba(30, 36, 51, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', boxShadow: 'var(--shadow-card)' }}>
                  <item.icon className="w-8 h-8 mb-4 text-primary" style={{ opacity: 0.8 }} />
                  <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontSize: '24px', fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-muted-foreground" style={{ fontSize: '16px', lineHeight: '1.7' }}>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isEnergyInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
            <Card className="p-8 border" style={{ background: 'rgba(30, 36, 51, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', boxShadow: 'var(--shadow-card)' }}>
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground" style={{ fontSize: '24px', fontWeight: 600 }}>Energy Flow Process</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {[
                  { icon: Package, label: "Plastic Input" },
                  { icon: Flame, label: "Pyrolysis" },
                  { icon: Zap, label: "Energy Recovery" },
                  { icon: Droplets, label: "Premium Fuel Output" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <step.icon className="w-8 h-8 text-primary mb-2" style={{ opacity: 0.8 }} />
                      <span className="text-sm text-muted-foreground font-medium" style={{ fontSize: '14px' }}>{step.label}</span>
                    </div>
                    {i < 3 && <ArrowRight className="w-6 h-6 text-primary hidden md:block" style={{ opacity: 0.6 }} />}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* THE ECONOMICS */}
      <section ref={economicsRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-muted" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="font-bold mb-6 text-foreground" style={{ fontSize: '42px', fontWeight: 700 }}>
              The Economics
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Proven profitability at industrial scale with attractive returns
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={containerVariants} initial="hidden" animate={isEconomicsInView ? "visible" : "hidden"}>
            {[
              { label: "Input Cost", value: "$XXX", sublabel: "per tonne feedstock" },
              { label: "Processing Cost", value: "$XXX", sublabel: "per tonne output" },
              { label: "Output Value", value: "$XXX", sublabel: "per tonne fuel" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="p-8 text-center border" style={{ background: '#1e2433', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', boxShadow: 'var(--shadow-card)' }}>
                  <div className="text-primary font-bold mb-2" style={{ fontSize: '48px' }}>{item.value}</div>
                  <div className="text-foreground font-semibold mb-1 uppercase tracking-[0.1em]" style={{ fontSize: '14px' }}>{item.label}</div>
                  <div className="text-muted-foreground text-sm">{item.sublabel}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
            <Card className="p-10 text-center border relative" style={{ background: 'rgba(0, 255, 136, 0.05)', border: '2px solid rgba(0, 255, 136, 0.3)', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)' }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground" style={{ fontSize: '24px', fontWeight: 600 }}>Net Margin</h3>
              <div className="text-primary font-bold mb-6" style={{ fontSize: '64px' }}>$xxx/ton</div>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">XX%</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-[0.1em]" style={{ fontSize: '14px' }}>Annual ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">X.X years</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-[0.1em]" style={{ fontSize: '14px' }}>Payback Period</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY - MOUNTAIN METAPHOR */}
      <section ref={journeyRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-muted to-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isJourneyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="font-bold mb-6 text-foreground" style={{ fontSize: '42px', fontWeight: 700 }}>
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Climbing the mountain of innovation, one milestone at a time
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {[
              { trl: 4, title: "Lab Validation", desc: "Proof of concept established", completed: true, align: "left" },
              { trl: 5, title: "Pilot Scale", desc: "Technology validated in relevant environment", completed: true, align: "right" },
              { trl: 6, title: "Industrial Demo", desc: "Full-scale prototype in operational environment", completed: false, current: true, align: "left" },
              { trl: 7, title: "Pre-Commercial", desc: "System prototype demonstration", completed: false, align: "right" },
              { trl: 8, title: "First Commercial", desc: "Actual system completed and qualified", completed: false, align: "left" },
              { trl: 9, title: "Full Deployment", desc: "Actual system proven in operational environment", completed: false, align: "right" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={`mb-12 flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, x: item.align === 'right' ? 60 : -60 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Card 
                  className={`p-6 border transition-all duration-200 ${item.current ? 'scale-110' : ''}`}
                  style={{
                    background: item.current ? 'rgba(0, 255, 136, 0.1)' : 'rgba(30, 36, 51, 0.6)',
                    border: item.current ? '2px solid #00FF88' : item.completed ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid rgba(155, 102, 255, 0.3)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-card)',
                    maxWidth: '400px',
                    width: '100%',
                    animation: item.current ? 'trl-pulse 2s infinite' : 'none'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${item.completed ? 'bg-primary/20 text-primary' : item.current ? 'bg-primary/30 text-primary' : 'bg-accent/20 text-accent'}`}>
                      {item.completed ? <CheckCircle2 className="w-6 h-6" /> : item.trl}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-foreground" style={{ fontSize: '18px', fontWeight: 600 }}>
                        TRL {item.trl}: {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" style={{ fontSize: '14px' }}>{item.desc}</p>
                      {item.current && (
                        <div className="mt-3 inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                          You Are Here
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-primary font-semibold max-w-3xl mx-auto mt-16" 
            style={{ fontSize: '24px', fontWeight: 600, background: 'linear-gradient(90deg, #00FF88, #00C4E4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            initial={{ opacity: 0 }} 
            animate={isJourneyInView ? { opacity: 1 } : {}} 
            transition={{ delay: 1, duration: 0.6 }}
          >
            Proven at Industrial Scale — Ready to Deploy
          </motion.p>
        </div>
      </section>

      {/* SEE THE TRANSFORMATION */}
      <section ref={videoRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-muted" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVideoInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="font-bold mb-6 text-foreground" style={{ fontSize: '42px', fontWeight: 700 }}>
              See The Transformation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.7' }}>
              Watch how we transform plastic waste into premium fuel at industrial scale
            </p>
          </motion.div>

          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card 
              className="relative aspect-video overflow-hidden border cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 36, 51, 0.9), rgba(42, 49, 66, 0.9))',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/50 to-muted/50">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-200 group-hover:scale-110">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground" style={{ fontSize: '16px' }}>Video Coming Soon</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-muted to-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 text-center relative z-10" style={{ maxWidth: '1200px' }}>
          <motion.h2 className="font-bold mb-12 text-foreground" style={{ fontSize: '42px', fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }} animate={isVisionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            Our Vision
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            <motion.p initial={{ opacity: 0, x: -30 }} animate={isVisionInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
              A world where plastic waste is no longer a problem, but a <span className="text-primary font-semibold">valuable resource</span>.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: 30 }} animate={isVisionInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
              Where every piece of discarded plastic becomes <span className="text-secondary font-semibold">premium fuel</span> that powers our future.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={isVisionInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }}>
              Where circular economy isn't just a concept — it's <span className="text-accent font-semibold">industrial reality</span>.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isVisionInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.9, duration: 0.5 }} className="mt-16">
            <Button size="lg" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, boxShadow: 'var(--glow-cta)' }} asChild>
              <Link to="/about">Join Us On This Journey <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
