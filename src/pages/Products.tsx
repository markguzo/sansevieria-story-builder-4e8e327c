import { Plane, Truck, Beaker } from "lucide-react";
import { Card } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            High-value fuels and feedstocks from plastic waste
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* PlastiSAF */}
            <Card className="p-12 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Plane className="text-secondary" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">PlastiSAF</h2>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Sustainable Aviation Fuel</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• Drop-in SAF pathway compatible with existing aircraft</li>
                    <li>• Supports EU and U.S. SAF mandates</li>
                    <li>• Up to 70% CO₂ reduction compared to conventional jet fuel</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* PlastiDiesel */}
            <Card className="p-12 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="text-secondary" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">PlastiDiesel</h2>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Clean Transportation Fuel</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• Clean combustion profile for reduced emissions</li>
                    <li>• Compatible with existing diesel infrastructure</li>
                    <li>• Meets stringent fuel quality standards</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* PlastiNaphtha */}
            <Card className="p-12 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Beaker className="text-secondary" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">PlastiNaphtha</h2>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Premium Petrochemical Feedstock</h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>• High-purity feedstock for chemical production</li>
                    <li>• Supports circular plastics manufacturing</li>
                    <li>• Enables closed-loop plastic value chains</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
