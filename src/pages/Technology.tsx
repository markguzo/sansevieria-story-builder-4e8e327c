import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import processDiagram from "@/assets/process-diagram.jpg";

const Technology = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Synthesis Refinery</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Advanced chemical recycling that turns unrecyclable plastics into fuels and feedstocks
          </p>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <img
              src={processDiagram}
              alt="Plastic waste transformation process"
              className="w-full rounded-2xl shadow-2xl mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Feedstock Intake",
                  desc: "Mixed, dirty plastics",
                },
                {
                  step: "2",
                  title: "Clean & Convert",
                  desc: "Contaminant removal and cracking",
                },
                {
                  step: "3",
                  title: "Separate Outputs",
                  desc: "PlastiSAF, PlastiDiesel, PlastiNaphtha",
                },
                {
                  step: "4",
                  title: "By-products",
                  desc: "Syngas powers system; char goes to construction",
                },
              ].map((item) => (
                <Card key={item.step} className="p-6 hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <ArrowRight className="text-secondary hidden lg:block" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Key Features</h2>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary">Modular & Scalable Design</h3>
                <p className="text-lg text-muted-foreground">
                  Our refineries are built to fit existing infrastructure, allowing for rapid deployment and easy scaling as demand grows.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary">Feedstock Revenue Model</h3>
                <p className="text-lg text-muted-foreground">
                  We receive payment for accepting plastic waste, creating a sustainable business model while solving the waste problem.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
