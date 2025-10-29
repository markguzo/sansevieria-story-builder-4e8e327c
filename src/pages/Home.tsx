import { Link } from "react-router-dom";
import { ArrowDown, Droplet, Plane, Truck, Beaker, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CountUpMetric from "@/components/CountUpMetric";
import processFlow from "@/assets/process-flow.png";
import plant1 from "@/assets/plant-1.png";
import plant3 from "@/assets/plant-3.png";

const Home = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - From Waste to Value */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary/40">
        <div className="absolute inset-0 opacity-5">
          <img src={plant1} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-8 px-8 py-3 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/40">
            <span className="text-lg font-semibold text-secondary">Chemical Recycling Innovation</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-primary-foreground leading-none">
            From Waste<br />To <span className="text-accent">Value</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-primary-foreground/95 leading-relaxed">
            Transforming non-recyclable plastic into clean, sustainable fuels
          </p>

          {/* Problem Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20">
              <div className="text-4xl font-bold text-accent mb-2">1.8B</div>
              <p className="text-sm text-primary-foreground/90">tonnes GHG from plastic</p>
            </Card>
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20">
              <div className="text-4xl font-bold text-accent mb-2">390M+</div>
              <p className="text-sm text-primary-foreground/90">tonnes produced yearly</p>
            </Card>
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20">
              <div className="text-4xl font-bold text-accent mb-2">22M+</div>
              <p className="text-sm text-primary-foreground/90">tonnes leak to oceans</p>
            </Card>
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20">
              <div className="text-4xl font-bold text-accent mb-2">9%</div>
              <p className="text-sm text-primary-foreground/90">recycled globally</p>
            </Card>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border-4 border-accent/40">
            <div className="aspect-video bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center">
              <p className="text-primary-foreground/70 text-lg">Video: Plastic Waste Transformation (Coming Soon)</p>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => scrollToSection('problem')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-7 rounded-full"
          >
            Discover Our Solution <ArrowDown className="ml-2" size={24} />
          </Button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-primary-foreground/70 rotate-90" size={40} />
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-32 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-foreground">The Problem</h2>
            <p className="text-3xl md:text-4xl leading-relaxed text-muted-foreground font-light">
              The world is drowning in plastic.<br />
              <span className="text-foreground font-semibold">Only 9% is recycled.</span>
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('solution')}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-7 rounded-full"
            >
              See How We Transform It <ArrowDown className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Solution - Process Flow */}
      <section id="solution" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">From Non-Recyclable Plastic to Clean Fuels</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Sansevieria's proprietary process converts waste into valuable fuel fractions
            </p>
          </div>

          {/* Process Diagram */}
          <div className="max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
            <img src={processFlow} alt="Sansevieria Process Flow" className="w-full" />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            <Card className="p-8 hover-lift border-2 border-muted">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Non-Recyclable Plastic Waste</h3>
              <p className="text-muted-foreground">Feedstock includes mixed post-consumer and industrial plastics</p>
            </Card>

            <Card className="p-8 hover-lift border-2 border-muted">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Washing and Shredding</h3>
              <p className="text-muted-foreground">Removes dirt, organics, and salts for cleaner feedstock</p>
            </Card>

            <Card className="p-8 hover-lift border-2 border-muted">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Melting & Contaminant Removal</h3>
              <p className="text-muted-foreground">Proprietary technology removes halogens, metals, and impurities under controlled conditions</p>
            </Card>

            <Card className="p-8 hover-lift border-2 border-muted">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-secondary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Final Fractions</h3>
              <p className="text-muted-foreground">PlastiNaphtha, PlastiSAF, and PlastiDiesel ready for market</p>
            </Card>
          </div>

          <p className="text-center text-xl text-muted-foreground max-w-4xl mx-auto">
            Each Sansevieria unit can operate <span className="font-semibold text-foreground">stand-alone</span> or integrate into existing waste or refinery facilities — <span className="font-semibold text-foreground">skipping new infrastructure or bureaucracy</span>.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Our Products</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Three clean fuel fractions from plastic waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 text-center hover-lift border-2 border-muted cursor-pointer group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all">
                <Beaker className="text-secondary" size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">PlastiNaphtha</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Petrochemical feedstock for polymer production
              </p>
            </Card>

            <Card className="p-10 text-center hover-lift border-2 border-muted cursor-pointer group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all">
                <Plane className="text-accent" size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">PlastiSAF</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sustainable Aviation Fuel meeting ASTM D7566
              </p>
            </Card>

            <Card className="p-10 text-center hover-lift border-2 border-muted cursor-pointer group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all">
                <Truck className="text-secondary" size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">PlastiDiesel</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ultra-clean diesel for transport and industry
              </p>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-7 rounded-full">
              <Link to="/products">
                Learn More About Our Products <ChevronRight className="ml-2" size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Technology Roadmap</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From lab to industrial scale
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline Bar */}
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-secondary/30 via-accent/50 to-secondary transform -translate-y-1/2 rounded-full" />
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center relative">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary border-4 border-background flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-secondary-foreground">1-2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Lab Tests</h3>
                  <p className="text-muted-foreground">Initial research and proof of concept</p>
                </div>

                <div className="text-center relative">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent border-4 border-background flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-accent-foreground">3-5</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Pilot Phase</h3>
                  <p className="text-muted-foreground">Active testing and optimization</p>
                </div>

                <div className="text-center relative">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-accent border-4 border-background flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-secondary-foreground">7-8</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Industrial Deployment</h3>
                  <p className="text-muted-foreground">Full-scale commercial operation</p>
                </div>
              </div>
            </div>

            <p className="text-center mt-16 text-xl text-muted-foreground">
              Sansevieria's technology is currently in <span className="font-semibold text-foreground">active testing and optimization phase</span>
            </p>
          </div>
        </div>
      </section>

      {/* Vision - With Plant Background */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary/40 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={plant3} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-12">Our Vision</h2>
            <p className="text-3xl md:text-4xl leading-relaxed font-light">
              We are building <span className="text-accent font-semibold">smart, modular, and organic</span> waste refineries that bring <span className="text-accent font-semibold">circularity and energy sustainability</span> to life —
            </p>
            <p className="text-3xl md:text-4xl leading-relaxed font-light mt-6">
              inspired by nature, engineered for impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Join the Journey
            </h2>
            <p className="text-2xl text-muted-foreground mb-12">
              Partner with us to transform plastic waste into sustainable value
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-7 rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
