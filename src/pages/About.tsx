import { Link } from "react-router-dom";
import { Lightbulb, Target, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sansevieria</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Leading the transformation of plastic waste into sustainable fuels and feedstocks
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sansevieria's mission is to spearhead the future of plastic waste transformation — eliminating unrecyclable plastics and turning them into practical fuels and feedstocks.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover-lift">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Lightbulb className="text-secondary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                We turn hard problems into simple solutions.
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Target className="text-secondary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Simplicity</h3>
              <p className="text-muted-foreground">
                Clear design, easy to deploy.
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Leaf className="text-secondary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Lower emissions with real circular use.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-primary">A Simple System That Fits</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Modular units can plug into refineries or waste centers. We reduce transport and landfill costs by densifying waste. Fast to deploy, low risk, and built to grow.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link to="/products">See Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
