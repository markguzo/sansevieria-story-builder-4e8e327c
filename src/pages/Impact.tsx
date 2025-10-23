import { Card } from "@/components/ui/card";

const Impact = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Impact That Scales</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Measurable environmental and economic benefits
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-12 text-center hover-lift bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="text-6xl font-bold text-secondary mb-4">70%</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Lower CO₂ Emissions</h3>
              <p className="text-lg text-muted-foreground">
                Compared to conventional fuel production processes
              </p>
            </Card>

            <Card className="p-12 text-center hover-lift bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="text-6xl font-bold text-secondary mb-4">80%</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">CAPEX Reduction</h3>
              <p className="text-lg text-muted-foreground">
                Versus traditional refinery infrastructure
              </p>
            </Card>

            <Card className="p-12 text-center hover-lift bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="text-6xl font-bold text-secondary mb-4">100%</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Circular Economy</h3>
              <p className="text-lg text-muted-foreground">
                All waste streams utilized in the process
              </p>
            </Card>

            <Card className="p-12 text-center hover-lift bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="text-6xl font-bold text-secondary mb-4">400M+</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Tons Addressable</h3>
              <p className="text-lg text-muted-foreground">
                Annual plastic waste market potential
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
