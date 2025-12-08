import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Reusable concentric circles SVG background
const ConcentricCircles = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
      {[60, 100, 140, 180, 220].map((radius, i) => (
        <circle
          key={radius}
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="hsl(174, 100%, 29%)"
          strokeWidth="1"
          opacity={0.1 - i * 0.015}
        />
      ))}
    </svg>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    investorInterest: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "", investorInterest: false });
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero - Get in Touch */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative bg-secondary/30 rounded-[2.5rem] p-8 md:p-12 overflow-hidden text-center">
            <ConcentricCircles />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to partner with us or learn more? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Send us a message - Form Box */}
            <div className="relative bg-secondary/30 rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
              <ConcentricCircles />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-teal-300 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-teal-300 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-teal-300 rounded-xl"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="investor"
                      checked={formData.investorInterest}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, investorInterest: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="investor"
                      className="text-sm font-medium leading-none text-muted-foreground"
                    >
                      I'm interested in investment opportunities
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-400 text-white rounded-full">
                    Send Message <Send className="ml-2" size={18} />
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-teal-200/50">
                  <Button variant="outline" size="lg" className="w-full border-teal-400 text-teal-600 hover:bg-teal-50 rounded-full" asChild>
                    <a href="mailto:contact@sansevieria.com?subject=Investor%20Deck%20Request">
                      Request Investor Deck
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Contact Information Box */}
              <div className="relative bg-secondary/30 rounded-[2.5rem] p-8 overflow-hidden">
                <ConcentricCircles />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-teal-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Location</h4>
                        <p className="text-muted-foreground">Tel Aviv, Israel</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-teal-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                        <a
                          href="mailto:contact@sansevieria.com"
                          className="text-teal-600 hover:underline"
                        >
                          contact@sansevieria.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Partner With Us Box */}
              <div className="relative bg-secondary/30 rounded-[2.5rem] p-8 overflow-hidden">
                <ConcentricCircles />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-5 text-foreground">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">Proven technology with modular scalability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">Growing market with strong regulatory support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">Measurable environmental impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">Revenue from waste feedstock</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
