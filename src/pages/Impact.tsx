import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUpMetric from "@/components/CountUpMetric";

const Impact = () => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: metricsRef,
    offset: ["start end", "end start"]
  });

  const ringProgress1 = useTransform(scrollYProgress, [0.2, 0.5], [0, 85]);
  const ringProgress2 = useTransform(scrollYProgress, [0.25, 0.55], [0, 100]);
  const ringProgress3 = useTransform(scrollYProgress, [0.3, 0.6], [0, 70]);

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

      {/* Hero Section - The Donut Chart */}
      <section className="relative py-20 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 md:w-96 md:h-96 mb-12"
        >
          {/* Donut Chart */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Background ring */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="hsl(0, 0%, 90%)"
              strokeWidth="24"
            />
            {/* 91% Lost segment */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="hsl(0, 0%, 75%)"
              strokeWidth="24"
              strokeDasharray={`${91 * 5.02} ${9 * 5.02}`}
              strokeDashoffset="0"
              transform="rotate(-90 100 100)"
            />
            {/* 9% Recycled segment */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="hsl(162, 36%, 27%)"
              strokeWidth="24"
              strokeDasharray={`${9 * 5.02} ${91 * 5.02}`}
              strokeDashoffset={`${-91 * 5.02}`}
              transform="rotate(-90 100 100)"
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-5xl font-bold text-foreground">91%</span>
            <span className="text-sm text-muted-foreground mt-1">Lost Annually</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Data
          </h1>
          <p className="text-lg text-muted-foreground">
            Transforming the 91% of plastic waste currently lost to landfills and incineration
          </p>
        </motion.div>
      </section>

      {/* Orbital Counters */}
      <section ref={metricsRef} className="py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          Environmental Impact
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* GHG Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(0, 0%, 92%)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(162, 36%, 27%)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  style={{
                    strokeDashoffset: useTransform(ringProgress1, (v) => 264 - (264 * v) / 100)
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  <CountUpMetric end={85} suffix="%" />
                </span>
              </div>
            </div>
            <p className="mt-4 text-lg font-medium text-foreground">GHG Reduction</p>
            <p className="text-sm text-muted-foreground text-center">Per tonne processed</p>
          </motion.div>

          {/* Tonnes Diverted */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(0, 0%, 92%)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(162, 36%, 27%)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  style={{
                    strokeDashoffset: useTransform(ringProgress2, (v) => 264 - (264 * v) / 100)
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  <CountUpMetric end={300} suffix="M+" />
                </span>
              </div>
            </div>
            <p className="mt-4 text-lg font-medium text-foreground">Tonnes Available</p>
            <p className="text-sm text-muted-foreground text-center">Annual feedstock globally</p>
          </motion.div>

          {/* Circularity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(0, 0%, 92%)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="hsl(162, 36%, 27%)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  style={{
                    strokeDashoffset: useTransform(ringProgress3, (v) => 264 - (264 * v) / 100)
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  <CountUpMetric end={94} suffix="%" />
                </span>
              </div>
            </div>
            <p className="mt-4 text-lg font-medium text-foreground">Carbon Efficiency</p>
            <p className="text-sm text-muted-foreground text-center">Material recovery rate</p>
          </motion.div>
        </div>
      </section>

      {/* Venn Diagram Comparison */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            The Difference
          </motion.h2>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
            {/* Left Circle - Fossil Fuels */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted-foreground/10 border-2 border-muted-foreground/20 flex items-center justify-center md:-mr-12 z-0"
            >
              <div className="text-center px-8 md:pr-16">
                <h3 className="text-xl font-bold text-muted-foreground mb-4">Traditional Fossil Fuels</h3>
                <ul className="text-sm text-muted-foreground/80 space-y-2">
                  <li>• Finite resources</li>
                  <li>• High emissions</li>
                  <li>• Price volatility</li>
                  <li>• Extraction damage</li>
                </ul>
              </div>
            </motion.div>

            {/* Intersection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute md:relative z-10 w-32 h-32 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
            >
              <div className="text-center">
                <span className="text-sm font-bold text-primary">Energy</span>
                <span className="text-xs text-primary block">Density</span>
              </div>
            </motion.div>

            {/* Right Circle - Sansevieria */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center md:-ml-12 z-0"
            >
              <div className="text-center px-8 md:pl-16">
                <h3 className="text-xl font-bold text-primary mb-4">Sansevieria Process</h3>
                <ul className="text-sm text-primary/80 space-y-2">
                  <li>• Waste-derived</li>
                  <li>• 85% lower emissions</li>
                  <li>• Price stability</li>
                  <li>• Circular economy</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every tonne of plastic waste we process prevents harmful emissions while creating valuable products.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Impact;