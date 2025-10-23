import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Founder = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Founder</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Leadership dedicated to solving humanity's waste challenge
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex-shrink-0" />

                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2 text-primary">Dan Debby</h2>
                  <p className="text-xl text-secondary mb-6 font-semibold">Founder & CEO</p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Dan Debby, Founder & CEO of Sansevieria, is dedicated to solving one of humanity's biggest challenges — waste. He leads our mission to turn plastic waste into opportunity at scale.
                  </p>

                  <Card className="p-8 bg-muted/30 border-l-4 border-secondary">
                    <Quote className="text-secondary mb-4" size={40} />
                    <blockquote className="text-2xl font-semibold text-primary leading-relaxed">
                      "Our refineries turn what others discard into the foundation of a cleaner, circular world."
                    </blockquote>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
