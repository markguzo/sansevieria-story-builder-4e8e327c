import { Link } from "react-router-dom";
import { Beaker, Plane, Truck, Sparkles, TrendingUp, Package, Droplets, Flame, Zap, ArrowRight, Play, Factory, Award, Recycle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUpMetric from "@/components/CountUpMetric";
import { TRLJourney } from "@/components/TRLJourney";
import heroNatureBg from "@/assets/hero-nature-bg.png";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const opportunityRef = useRef(null);
  const solutionsRef = useRef(null);
  const technologyRef = useRef(null);
  const energyRef = useRef(null);
  const economicsRef = useRef(null);
  const everestRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);

  const isOpportunityInView = useInView(opportunityRef, { amount: 0.2, once: true });
  const isSolutionsInView = useInView(solutionsRef, { amount: 0.2, once: true });
  const isTechnologyInView = useInView(technologyRef, { amount: 0.2, once: true });
  const isEnergyInView = useInView(energyRef, { amount: 0.2, once: true });
  const isEconomicsInView = useInView(economicsRef, { amount: 0.2, once: true });
  const isEverestInView = useInView(everestRef, { amount: 0.3, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.3, once: true });
  const isCtaInView = useInView(ctaRef, { amount: 0.2, once: true });

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroNatureBg} 
            alt="Nature background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.p
            className="text-accent text-xs font-bold tracking-[0.2em] mb-4 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Industrial-Scale Breakthrough
          </motion.p>

          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-background leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming Plastic Waste Into Premium Fuel
          </motion.h1>
          
          <motion.p
            className="text-xs md:text-sm text-background max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Industrial-scale breakthrough technology that converts any plastic waste stream into high-value petrochemical feedstock
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="default" 
              className="bg-primary text-background hover:bg-primary/90 font-semibold px-6 py-4 text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
            <Button 
              size="default" 
              variant="outline"
              className="bg-background/90 border-2 border-primary text-primary hover:bg-background hover:border-primary/80 font-semibold px-6 py-4 text-sm transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-background/80 drop-shadow-lg"
            >
              <ArrowRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section ref={opportunityRef} className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpportunityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] mb-2 uppercase">The Opportunity</p>
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground max-w-3xl mx-auto leading-tight">
              Plastic waste represents untapped energy and massive economic value waiting to be unlocked
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
                <Card className="p-4 md:p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                  <stat.icon className="w-8 h-8 mb-2 text-accent mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-accent text-center">
                    <CountUpMetric end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground text-center leading-snug">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-base md:text-lg font-semibold text-primary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isOpportunityInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We don't just deal with waste — we transform it into high-value products
          </motion.p>
        </div>
      </section>

      {/* THREE CLEAN SOLUTIONS */}
      <section ref={solutionsRef} className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">Three Clean Solutions</h2>
            <p className="text-sm md:text-base text-foreground">From waste to specialized fuel fractions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
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
                <Card className="p-5 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-card">
                  <div className={`w-12 h-12 rounded-full ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT - TECHNOLOGY */}
      <section ref={technologyRef} className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-xs font-semibold tracking-[0.3em] mb-2 uppercase">How We Do It</p>
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Our Technology</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
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
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-foreground">{item.title}</h3>
                <p className="text-base font-semibold text-accent mb-2">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENERGY SOLUTION SECTION */}
      <section ref={energyRef} className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isEnergyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-background">No Energy Problem</h2>
            <p className="text-sm md:text-base text-background/80 max-w-2xl mx-auto">
              Our process is energy-positive, generating more energy than it consumes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Flame, title: "Energy Positive", desc: "Generates surplus energy from waste heat recovery" },
              { icon: Zap, title: "Self-Sustaining", desc: "Powers itself with byproduct syngas" },
              { icon: TrendingUp, title: "Net Contributor", desc: "Exports excess energy to the grid" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-background/10 backdrop-blur-sm p-4 rounded-xl border border-background/20 hover:bg-background/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isEnergyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <item.icon className="w-6 h-6 mb-2 text-accent" />
                <h3 className="text-base font-semibold mb-1 text-background">{item.title}</h3>
                <p className="text-background/80 leading-relaxed text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-background/10 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-background/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isEnergyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-center text-background">Energy Flow Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {[
                { icon: Package, label: "Plastic Input" },
                { icon: Flame, label: "Pyrolysis" },
                { icon: Zap, label: "Energy Recovery" },
                { icon: Droplets, label: "Premium Fuel Output" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-1">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-center text-background">{step.label}</span>
                  </div>
                  {i < 3 && <ArrowRight className="w-6 h-6 text-accent hidden md:block" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRL JOURNEY VISUALIZATION */}
      <TRLJourney />

      {/* THE ECONOMICS */}
      <section ref={economicsRef} className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isEconomicsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">The Economics</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Proven profitability at industrial scale with attractive returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
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
                <Card className="p-5 bg-card border-border">
                  <div className="text-accent font-bold mb-1 text-3xl">{item.value}</div>
                  <div className="text-foreground font-semibold mb-1 uppercase tracking-widest text-xs">{item.label}</div>
                  <div className="text-muted-foreground text-xs">{item.sublabel}</div>
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
            <Card className="p-6 bg-accent/10 border-2 border-accent inline-block">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Net Margin</h3>
              <div className="text-accent font-bold mb-4 text-4xl">$xxx/ton</div>
              <div className="grid md:grid-cols-2 gap-5 max-w-xl mx-auto">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">XX%</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Annual ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">X.X years</div>
                  <div className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Payback Period</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* THE EVEREST STORY SECTION */}
      <section ref={everestRef} className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-6">
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isEverestInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent text-xs font-semibold tracking-[0.2em] mb-2 uppercase">The Founder's Journey</p>
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">From the Summit to Sustainability</h2>
              
              <div className="space-y-3 text-foreground text-xs md:text-sm leading-relaxed">
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

              <p className="text-accent text-xs italic mt-4">— Dan, Founder & CEO</p>
            </motion.div>

            <div className="md:col-span-2 flex items-center justify-center">
              <motion.div
                className="text-7xl text-foreground/10 font-bold"
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
      <section ref={videoRef} className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">See The Transformation</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Watch how we transform plastic waste into premium fuel at industrial scale
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video bg-card rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section ref={ctaRef} className="py-12 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Ready to Transform Waste into Value?</h2>
            <p className="text-sm text-foreground/80 mb-5">
              Let's discuss how our technology can work for your organization
            </p>
            <Button 
              size="default" 
              className="bg-primary text-background hover:bg-primary/90 font-semibold px-8 py-5 text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
