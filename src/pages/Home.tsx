import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Droplet, Factory, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CountUpMetric from "@/components/CountUpMetric";
import heroImage from "@/assets/hero-refinery.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transforming Plastic Waste<br />Into Clean Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-slide-up">
            At Sansevieria, we turn the world's most complex plastic waste into high-value fuels and petrochemical feedstocks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" variant="secondary">
              <Link to="/technology">
                Discover Our Technology <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Turn Waste Into Value */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">How We Turn Waste Into Value</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We accept mixed, dirty plastics. We clean and convert them. We separate the outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Recycle, title: "Plastic Waste Intake", desc: "Mixed & contaminated plastics" },
              { icon: Factory, title: "Clean & Convert", desc: "Remove contaminants and crack the material" },
              { icon: Droplet, title: "Separate Outputs", desc: "Fuels and feedstocks ready for use" },
              { icon: TrendingUp, title: "Reuse & Energy Recovery", desc: "Syngas powers the system; char goes to construction" },
            ].map((step, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-lift border-2 border-muted"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <step.icon className="text-secondary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground">
            Modular units fit into refineries or waste centers
          </p>
        </div>
      </section>

      {/* Problem & Proof */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">The Problem We Solve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plastic waste keeps growing. Most is not recycled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-card shadow-lg hover-lift">
              <div className="text-5xl font-bold text-secondary mb-2">
                <CountUpMetric end={400} suffix="M" />
              </div>
              <p className="text-muted-foreground">tons of plastic waste produced each year</p>
            </Card>

            <Card className="p-8 text-center bg-card shadow-lg hover-lift">
              <div className="text-5xl font-bold text-secondary mb-2">
                <CountUpMetric end={90} suffix="%" />
              </div>
              <p className="text-muted-foreground">not recycled</p>
            </Card>

            <Card className="p-8 text-center bg-card shadow-lg hover-lift">
              <div className="text-5xl font-bold text-secondary mb-2">
                <CountUpMetric end={70} suffix="%" />
              </div>
              <p className="text-muted-foreground">CO₂e reduction per refinery</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Market at a Glance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "EU packaging rules & taxes", desc: "Push recycled content" },
              { title: "U.S. recycling goals", desc: "Speed adoption" },
              { title: "SAF demand is rising", desc: "In aviation" },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center border-2 border-muted hover-lift">
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <p className="text-center mt-12 text-lg max-w-3xl mx-auto text-muted-foreground">
            We help brands and cities meet rules and lower emissions with reliable, clean outputs.
          </p>
        </div>
      </section>

      {/* Impact That Scales */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact That Scales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Lower CO₂ Emissions", desc: "Compared to conventional fuel production" },
              { value: "80%", label: "CAPEX Reduction", desc: "Versus traditional refineries" },
              { value: "100%", label: "Circular Economy", desc: "All waste streams utilized" },
              { value: "400M+", label: "Tons Addressable", desc: "Annual plastic waste potential" },
            ].map((metric, index) => (
              <Card key={index} className="p-8 text-center bg-primary-foreground text-primary hover-lift">
                <div className="text-4xl font-bold text-secondary mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm opacity-80">{metric.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What We Make</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "PlastiSAF", desc: "Sustainable aviation fuel" },
              { name: "PlastiDiesel", desc: "Clean transportation fuel" },
              { name: "PlastiNaphtha", desc: "Premium petrochemical feedstock" },
            ].map((product, index) => (
              <Card key={index} className="p-8 text-center hover-lift border-2 border-muted cursor-pointer group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Droplet className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{product.name}</h3>
                <p className="text-muted-foreground">{product.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="default">
              <Link to="/products">
                See Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              By 2030, we aim to be among the world's leading producers of sustainable aviation fuel and petrochemical feedstocks — all from plastic waste.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            We work with waste operators, municipalities, and industry partners
          </h2>
          <Button asChild size="lg" variant="default" className="mt-6">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
