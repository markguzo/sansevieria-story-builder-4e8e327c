import { motion } from "framer-motion";
import { Plane, Fuel, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "PlastiSAF",
      subtitle: "Sustainable Aviation Fuel",
      icon: Plane,
      specs: [
        "Drop-in SAF pathway compatible with existing aircraft",
        "Supports EU and U.S. SAF mandates",
        "Up to 70% CO₂ reduction compared to conventional jet fuel"
      ],
      color: "hsl(162, 36%, 27%)"
    },
    {
      name: "PlastiDiesel",
      subtitle: "Clean Transportation Fuel",
      icon: Fuel,
      specs: [
        "Clean combustion profile for reduced emissions",
        "Compatible with existing diesel infrastructure",
        "Meets stringent fuel quality standards"
      ],
      color: "hsl(162, 36%, 27%)"
    },
    {
      name: "PlastiNaphtha",
      subtitle: "Premium Petrochemical Feedstock",
      icon: FlaskConical,
      specs: [
        "High-purity feedstock for chemical production",
        "Supports circular plastics manufacturing",
        "Enables closed-loop plastic value chains"
      ],
      color: "hsl(162, 36%, 27%)"
    }
  ];

  const specsData = [
    { property: "Feedstock", plastiSAF: "Mixed Plastic Waste", plastiDiesel: "Mixed Plastic Waste", plastiNaphtha: "Mixed Plastic Waste" },
    { property: "Output Purity", plastiSAF: ">99%", plastiDiesel: ">98%", plastiNaphtha: ">99%" },
    { property: "CO₂ Reduction", plastiSAF: "Up to 70%", plastiDiesel: "Up to 65%", plastiNaphtha: "Up to 80%" },
    { property: "Application", plastiSAF: "Aviation", plastiDiesel: "Transport", plastiNaphtha: "Chemicals" },
    { property: "Certification", plastiSAF: "ASTM D7566", plastiDiesel: "EN 590", plastiNaphtha: "ISO 8217" }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Concentric Teal Ripples Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh]" viewBox="0 0 1000 1000">
          {[150, 250, 350, 450, 550, 650].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="hsl(162, 36%, 27%)"
              strokeWidth="1"
              opacity={0.03}
            />
          ))}
        </svg>
      </div>

      {/* Hero Section - The Molecule */}
      <section className="relative py-20 flex flex-col items-center justify-center">
        {/* Rotating Wireframe Molecule */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Central atom */}
            <circle cx="100" cy="100" r="12" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="2" />
            <circle cx="100" cy="100" r="6" fill="hsl(162, 36%, 27%)" />
            
            {/* Orbital rings */}
            <ellipse cx="100" cy="100" rx="60" ry="25" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" opacity="0.6" />
            <ellipse cx="100" cy="100" rx="60" ry="25" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" opacity="0.6" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="60" ry="25" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" opacity="0.6" transform="rotate(120 100 100)" />
            
            {/* Outer atoms */}
            <circle cx="160" cy="100" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="160" cy="100" r="4" fill="hsl(162, 36%, 27%)" />
            
            <circle cx="40" cy="100" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="40" cy="100" r="4" fill="hsl(162, 36%, 27%)" />
            
            <circle cx="130" cy="48" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="130" cy="48" r="4" fill="hsl(162, 36%, 27%)" />
            
            <circle cx="70" cy="48" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="70" cy="48" r="4" fill="hsl(162, 36%, 27%)" />
            
            <circle cx="130" cy="152" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="130" cy="152" r="4" fill="hsl(162, 36%, 27%)" />
            
            <circle cx="70" cy="152" r="8" fill="none" stroke="hsl(162, 36%, 27%)" strokeWidth="1.5" />
            <circle cx="70" cy="152" r="4" fill="hsl(162, 36%, 27%)" />
            
            {/* Connection lines */}
            <line x1="100" y1="100" x2="160" y2="100" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="100" x2="40" y2="100" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="100" x2="130" y2="48" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="100" x2="70" y2="48" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="100" x2="130" y2="152" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="100" x2="70" y2="152" stroke="hsl(162, 36%, 27%)" strokeWidth="1" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Outputs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-6">
            High-value fuels and feedstocks transformed from plastic waste
          </p>
        </motion.div>
      </section>

      {/* Product Showcase - Alternating Circular Layout */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Circular Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary/30 border-2 border-primary/20 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg text-primary font-medium mb-6">
                    {product.subtitle}
                  </p>
                  <ul className={`space-y-3 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className={isEven ? '' : 'md:order-first'}>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Product Specifications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] shadow-lg border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-5 bg-primary/5">
              <div className="font-semibold text-foreground">Specification</div>
              <div className="font-semibold text-primary text-center">PlastiSAF</div>
              <div className="font-semibold text-primary text-center">PlastiDiesel</div>
              <div className="font-semibold text-primary text-center">PlastiNaphtha</div>
            </div>

            {/* Rows */}
            {specsData.map((row, index) => (
              <div
                key={row.property}
                className={`grid grid-cols-4 gap-4 px-6 py-4 ${
                  index !== specsData.length - 1 ? 'border-b border-border/30' : ''
                }`}
              >
                <div className="font-medium text-foreground">{row.property}</div>
                <div className="text-muted-foreground text-center text-sm">{row.plastiSAF}</div>
                <div className="text-muted-foreground text-center text-sm">{row.plastiDiesel}</div>
                <div className="text-muted-foreground text-center text-sm">{row.plastiNaphtha}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Request Full Specifications
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;