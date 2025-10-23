import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Droplet, Factory, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CountUpMetric from "@/components/CountUpMetric";
import heroImage from "@/assets/hero-refinery.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-secondary/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <div className="inline-block mb-6 px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
            <span className="text-sm font-semibold text-secondary">Advanced Chemical Recycling</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            From Waste<br />To <span className="text-secondary">Value</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 animate-slide-up">
            Transforming complex plastic waste into sustainable aviation fuel and premium petrochemical feedstocks
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/about">
                Discover Our Mission <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-primary-foreground rotate-90" size={32} />
        </div>
      </section>

      {/* How We Turn Waste Into Value - With Arrows */}
      <section className="py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">The Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, scalable system that transforms waste into opportunity
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { icon: Recycle, title: "Plastic Waste Intake", desc: "Mixed & contaminated plastics" },
                { icon: Factory, title: "Clean & Convert", desc: "Remove contaminants and crack the material" },
                { icon: Droplet, title: "Separate Outputs", desc: "Fuels and feedstocks ready for use" },
                { icon: TrendingUp, title: "Reuse & Energy Recovery", desc: "Syngas powers the system; char goes to construction" },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-8 text-center hover-lift border-2 border-muted h-full bg-card">
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                        <step.icon className="text-secondary" size={36} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </Card>
                  
                  {/* Arrow between cards (hidden on mobile, shown on desktop) */}
                  {index < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <ArrowRight className="text-secondary" size={32} strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-12 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our modular units integrate seamlessly into existing refineries or waste centers
          </p>
        </div>
      </section>

      {/* Problem & Proof */}
      <section className="py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">The Challenge</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Plastic waste is accelerating. Traditional recycling isn't enough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-10 text-center bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-lift">
              <div className="text-6xl font-bold text-secondary mb-3">
                <CountUpMetric end={400} suffix="M" />
              </div>
              <p className="text-lg opacity-95">tons of plastic waste produced annually</p>
            </Card>

            <Card className="p-10 text-center bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-lift">
              <div className="text-6xl font-bold text-secondary mb-3">
                <CountUpMetric end={90} suffix="%" />
              </div>
              <p className="text-lg opacity-95">not recycled globally</p>
            </Card>

            <Card className="p-10 text-center bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-lift">
              <div className="text-6xl font-bold text-secondary mb-3">
                <CountUpMetric end={70} suffix="%" />
              </div>
              <p className="text-lg opacity-95">CO₂ reduction per refinery</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact That Scales */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Impact That Scales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real environmental and economic benefits, measured and proven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { value: "70%", label: "Lower CO₂ Emissions", desc: "Compared to conventional fuel production" },
              { value: "80%", label: "CAPEX Reduction", desc: "Versus traditional refineries" },
              { value: "100%", label: "Circular Economy", desc: "All waste streams utilized" },
              { value: "400M+", label: "Tons Addressable", desc: "Annual plastic waste potential" },
            ].map((metric, index) => (
              <Card key={index} className="p-8 text-center hover-lift bg-gradient-to-br from-secondary/5 to-transparent border-2 border-muted">
                <div className="text-5xl font-bold text-secondary mb-3">{metric.value}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">What We Create</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-value outputs from plastic waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "PlastiSAF", desc: "Sustainable aviation fuel for the future of flight" },
              { name: "PlastiDiesel", desc: "Clean transportation fuel for logistics" },
              { name: "PlastiNaphtha", desc: "Premium petrochemical feedstock for circularity" },
            ].map((product, index) => (
              <Card key={index} className="p-10 text-center hover-lift border-2 border-muted cursor-pointer group bg-card">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all">
                  <Droplet className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{product.name}</h3>
                <p className="text-muted-foreground">{product.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="default" className="text-lg px-8 py-6">
              <Link to="/products">
                Explore Our Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Vision</h2>
            <p className="text-2xl leading-relaxed opacity-95">
              By 2030, we aim to be among the world's leading producers of sustainable aviation fuel and petrochemical feedstocks — all from plastic waste.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              We collaborate with waste operators, municipalities, refineries, and industry partners worldwide
            </p>
            <Button asChild size="lg" variant="default" className="text-lg px-10 py-6">
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
