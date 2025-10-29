import { Link } from "react-router-dom";
import { ArrowDown, Beaker, Plane, Truck, ChevronRight, Droplets, Filter, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const roadmapRef = useRef(null);

  const isRoadmapInView = useInView(roadmapRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Animation */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Video Placeholder with Animated Fallback */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <motion.div className="relative w-full h-full max-w-4xl">
            {/* Animated Ribbon Flow */}
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
              {/* Plastic fragments entering */}
              <motion.circle
                cx="100"
                cy="200"
                r="8"
                fill="hsl(var(--muted-foreground))"
                animate={{
                  x: [0, 100, 200],
                  opacity: [0.6, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx="120"
                cy="250"
                r="6"
                fill="hsl(var(--muted-foreground))"
                animate={{
                  x: [0, 120, 240],
                  opacity: [0.6, 0.8, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Flowing ribbon */}
              <motion.path
                d="M 200 250 Q 350 200 500 250 Q 650 300 700 250"
                stroke="url(#ribbonGradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray="0 1"
                animate={{
                  strokeDasharray: ["0 1", "1 0"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Three filter gates */}
              <motion.circle
                cx="350"
                cy="200"
                r="20"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx="500"
                cy="250"
                r="20"
                stroke="hsl(var(--secondary))"
                strokeWidth="3"
                fill="none"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              />
              <motion.circle
                cx="650"
                cy="300"
                r="20"
                stroke="hsl(var(--accent))"
                strokeWidth="3"
                fill="none"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4
                }}
              />
              
              {/* Three output streams */}
              <motion.line
                x1="700"
                y1="200"
                x2="750"
                y2="150"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.line
                x1="700"
                y1="250"
                x2="750"
                y2="250"
                stroke="hsl(var(--secondary))"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.3
                }}
              />
              <motion.line
                x1="700"
                y1="300"
                x2="750"
                y2="350"
                stroke="hsl(var(--accent))"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6
                }}
              />
              
              <defs>
                <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 text-foreground">
              Turning Plastic Waste<br />
              <span className="text-primary">into Clean Energy</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 text-muted-foreground">
              Nature-inspired chemical recycling.
            </p>
          </motion.div>

          {/* Problem Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">1.8B</div>
              <p className="text-sm text-muted-foreground">tonnes GHG from plastic</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">390M+</div>
              <p className="text-sm text-muted-foreground">tonnes produced yearly</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">22M+</div>
              <p className="text-sm text-muted-foreground">tonnes leak to oceans</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-md border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">9%</div>
              <p className="text-sm text-muted-foreground">recycled globally</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-7 rounded-full"
            >
              See how it works <ArrowDown className="ml-2" size={24} />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="text-muted-foreground rotate-90" size={40} />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-foreground">The Problem</h2>
            <p className="text-3xl md:text-4xl leading-relaxed text-muted-foreground font-light">
              The world is drowning in plastic.<br />
              <span className="text-foreground font-semibold">Only 9% is recycled.</span>
            </p>
          </motion.div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-7 rounded-full"
            >
              See How We Transform It <ArrowDown className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Animation Section */}
      <section id="process" ref={processRef} className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
              From Waste to Value
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Our proprietary process converts non-recyclable plastic into clean fuel fractions
            </p>
          </motion.div>

          {/* Animated Process Steps */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="relative">
              {/* Connection Line */}
              <motion.div 
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 hidden lg:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {/* Step 1: Feedstock */}
                <ProcessStep
                  icon={Droplets}
                  number="1"
                  title="Feedstock"
                  description="Mixed plastic waste collected"
                  delay={0}
                />

                {/* Step 2: Wash & Shred */}
                <ProcessStep
                  icon={Filter}
                  number="2"
                  title="Wash & Shred"
                  description="Cleaned and uniformly sized"
                  delay={0.2}
                />

                {/* Step 3: Melt & Clean (Proprietary) */}
                <ProcessStep
                  icon={Zap}
                  number="3"
                  title="Melt & Clean"
                  description="Proprietary contaminant removal"
                  delay={0.4}
                  highlighted
                />

                {/* Step 4: Distill */}
                <ProcessStep
                  icon={Beaker}
                  number="4"
                  title="Distill & Treat"
                  description="Refined to stable molecules"
                  delay={0.6}
                />

                {/* Step 5: Products */}
                <ProcessStep
                  icon={ChevronRight}
                  number="5"
                  title="Clean Fuels"
                  description="Three product fractions"
                  delay={0.8}
                />
              </div>
            </div>
          </div>

          {/* Proprietary Cleaning Micro-Animation */}
          <motion.div 
            className="max-w-3xl mx-auto mb-20 p-8 bg-card/50 rounded-2xl border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Central molecule chain */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="hsl(var(--primary))"
                  />
                  <line x1="50" y1="50" x2="70" y2="40" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <motion.circle
                    cx="70"
                    cy="40"
                    r="6"
                    fill="hsl(var(--primary))"
                  />
                  
                  {/* Contaminant dots that get removed */}
                  <motion.circle
                    cx="45"
                    cy="35"
                    r="4"
                    fill="hsl(var(--destructive))"
                    animate={{
                      x: [0, -20],
                      y: [0, -10],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  <motion.circle
                    cx="55"
                    cy="60"
                    r="4"
                    fill="hsl(var(--destructive))"
                    animate={{
                      x: [0, 20],
                      y: [0, 15],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                  <motion.circle
                    cx="60"
                    cy="45"
                    r="3"
                    fill="hsl(var(--destructive))"
                    animate={{
                      x: [0, 25],
                      y: [0, 0],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                  />
                  
                  {/* Magnetic field effect */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Proprietary Contaminant Removal</h3>
                <p className="text-muted-foreground">
                  Removes halogens, metals, and impurities from the oil — clean in, stable out.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Distillation Column Mini-Sim */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-center mb-12">Distillation Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Distillation Column */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-32 h-96">
                  {/* Column body with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-secondary to-primary rounded-lg border-2 border-primary overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"
                      animate={{
                        y: ["100%", "0%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Three taps */}
                  <motion.div 
                    className="absolute top-1/4 -right-4 w-4 h-4 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-secondary"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="absolute top-3/4 -right-4 w-4 h-4 rounded-full bg-accent"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  />
                  
                  {/* Temperature labels */}
                  <div className="absolute -left-12 top-1/4 text-xs text-muted-foreground">High</div>
                  <div className="absolute -left-12 top-1/2 text-xs text-muted-foreground">Mid</div>
                  <div className="absolute -left-12 top-3/4 text-xs text-muted-foreground">Low</div>
                </div>
              </div>

              {/* Product Cards with Animated Lines */}
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ProductCard
                  icon={Beaker}
                  title="PlastiNaphtha"
                  description="Petrochemical feedstock for polymer production"
                  color="primary"
                  delay={0.5}
                />
                <ProductCard
                  icon={Plane}
                  title="PlastiSAF"
                  description="Sustainable Aviation Fuel meeting ASTM D7566"
                  color="secondary"
                  delay={1}
                />
                <ProductCard
                  icon={Truck}
                  title="PlastiDiesel"
                  description="Ultra-clean diesel for transport and industry"
                  color="accent"
                  delay={1.5}
                />
              </div>
            </div>
          </motion.div>

          <p className="text-center text-xl text-muted-foreground max-w-4xl mx-auto mt-20">
            Each Sansevieria unit can operate <span className="font-semibold text-foreground">stand-alone</span> or integrate into existing waste or refinery facilities — <span className="font-semibold text-foreground">skipping new infrastructure or bureaucracy</span>.
          </p>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section ref={roadmapRef} className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Technology Roadmap</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From lab to industrial scale
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Animated Progress Bar */}
            <div className="relative mb-16">
              {/* Background bar */}
              <div className="h-2 bg-muted rounded-full" />
              
              {/* Animated fill */}
              <motion.div 
                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ width: "0%" }}
                animate={isRoadmapInView ? { width: "66%" } : { width: "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              <div className="grid grid-cols-3 gap-8 mt-12">
                {/* TRL 1-2 */}
                <RoadmapNode
                  label="TRL 1-2"
                  title="Lab Tests"
                  description="Initial research and proof of concept"
                  status="complete"
                  delay={0.3}
                />

                {/* TRL 3-5 */}
                <RoadmapNode
                  label="TRL 3-5"
                  title="Pilot Phase"
                  description="Active testing and optimization"
                  status="current"
                  delay={0.6}
                />

                {/* TRL 7-8 */}
                <RoadmapNode
                  label="TRL 7-8"
                  title="Industrial Deployment"
                  description="Full-scale commercial operation"
                  status="target"
                  delay={0.9}
                />
              </div>
            </div>

            <p className="text-center text-xl text-muted-foreground">
              Sansevieria's technology is currently in <span className="font-semibold text-foreground">active testing and optimization phase</span>
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-12">Our Vision</h2>
            <p className="text-3xl md:text-4xl leading-relaxed font-light">
              We are building <span className="text-primary font-semibold">smart, modular, and organic</span> waste refineries that bring <span className="text-secondary font-semibold">circularity and energy sustainability</span> to life —
            </p>
            <p className="text-3xl md:text-4xl leading-relaxed font-light mt-6">
              inspired by nature, engineered for impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Join the Journey
            </h2>
            <p className="text-2xl text-muted-foreground mb-12">
              Partner with us to transform plastic waste into sustainable value
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-7 rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ icon: Icon, number, title, description, delay, highlighted = false }: any) => (
  <motion.div
    className="text-center relative"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
  >
    <motion.div 
      className={`w-24 h-24 mx-auto mb-6 rounded-full border-4 border-background flex items-center justify-center relative z-10 ${
        highlighted ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-card'
      }`}
      whileHover={{ scale: 1.1 }}
      animate={highlighted ? {
        boxShadow: [
          "0 0 20px hsl(var(--primary) / 0.3)",
          "0 0 40px hsl(var(--secondary) / 0.5)",
          "0 0 20px hsl(var(--primary) / 0.3)"
        ]
      } : {}}
      transition={highlighted ? {
        duration: 2,
        repeat: Infinity
      } : {}}
    >
      <Icon className={highlighted ? "text-background" : "text-primary"} size={32} />
    </motion.div>
    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
      highlighted ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
    }`}>
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

// Product Card Component
const ProductCard = ({ icon: Icon, title, description, color, delay }: any) => {
  const colorMap: any = {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="p-8 h-full border-2 hover:border-primary transition-all cursor-pointer group">
        <motion.div 
          className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-${color}/30 to-${color}/10 flex items-center justify-center`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={40} style={{ color: colorMap[color] }} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
};

// Roadmap Node Component
const RoadmapNode = ({ label, title, description, status, delay }: any) => {
  const bgMap = {
    complete: "bg-primary",
    current: "bg-secondary",
    target: "bg-muted"
  };
  
  const textMap = {
    complete: "text-primary-foreground",
    current: "text-secondary-foreground",
    target: "text-muted-foreground"
  };

  const statusIcon = {
    complete: "✓",
    current: "▶",
    target: "◻"
  };

  return (
    <motion.div
      className="text-center relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.div 
        className={`w-24 h-24 mx-auto mb-6 rounded-full ${bgMap[status]} border-4 border-background flex items-center justify-center relative z-10`}
        whileHover={{ scale: 1.1 }}
      >
        <span className={`text-3xl font-bold ${textMap[status]}`}>{statusIcon[status]}</span>
      </motion.div>
      <div className="text-lg font-bold text-primary mb-2">{label}</div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default Home;
