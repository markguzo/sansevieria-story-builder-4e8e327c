import { TrendingUp, Scale, Plane } from "lucide-react";
import { Card } from "@/components/ui/card";

const Market = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Market Opportunity</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            A growing global market for sustainable solutions
          </p>
        </div>
      </section>

      {/* Market Facts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="text-secondary" size={40} />
                </div>
              </div>
              <div className="text-4xl font-bold text-secondary mb-4">400M+</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Global Plastic Waste</h3>
              <p className="text-muted-foreground">
                Tons of plastic waste produced annually, trending higher by 2030
              </p>
            </Card>

            <Card className="p-10 text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Scale className="text-secondary" size={40} />
                </div>
              </div>
              <div className="text-4xl font-bold text-secondary mb-4">€0.80/kg</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">EU Plastic Tax</h3>
              <p className="text-muted-foreground">
                Tax on non-recycled packaging driving demand for recycled content
              </p>
            </Card>

            <Card className="p-10 text-center hover-lift">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Plane className="text-secondary" size={40} />
                </div>
              </div>
              <div className="text-4xl font-bold text-secondary mb-4">$100B+</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">SAF Market</h3>
              <p className="text-muted-foreground">
                Projected sustainable aviation fuel market by 2034
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide clean outputs that help meet regulations, cut emissions, and use waste as feedstock.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;
