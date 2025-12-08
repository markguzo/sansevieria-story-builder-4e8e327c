import { Link } from "react-router-dom";
import { Leaf, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EcoForgePipeline } from "@/components/EcoForgePipeline";
import { EngineeringBlueprint } from "@/components/EngineeringBlueprint";
import PlasticCrisisInfographic from "@/components/PlasticCrisisInfographic";
import { TRLStatusGauge } from "@/components/TRLStatusGauge";
import heroMountainLake from "@/assets/hero-mountain-lake.png";
import logoColor from "@/assets/logo-color.png";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef(null);

  const isFooterInView = useInView(footerRef, { amount: 0.3, once: true });

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Full-Screen Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${heroMountainLake})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'
          }}
        />
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 100%)'
          }}
        />

        {/* Teal Brand Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgba(0,191,165,0.1)',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Concentric Circles - Circular Economy Symbolism */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full max-w-2xl md:max-w-4xl" viewBox="0 0 600 600">
            <defs>
              <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00BFA5', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0.7 }} />
              </linearGradient>
            </defs>
            {[80, 150, 220, 290].map((r, i) => (
              <circle
                key={i}
                cx="300"
                cy="300"
                r={r}
                fill="none"
                stroke="url(#subtleGradient)"
                strokeWidth={5}
                style={{ animation: `subtle-pulse 8s ease-in-out infinite alternate` }}
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
          {/* Company Name */}
          <motion.div
            className="text-2xl md:text-3xl font-bold text-teal-300 tracking-wide mb-4"
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,191,165,0.3))' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
          >
            Sansevieria Waste Refineries
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-6"
            style={{ textShadow: '0 0 5px rgba(16,185,129,0.3)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
          >
            Transforming waste into<br />
            <span className="text-teal-300">premium products</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
          >
            Closing the loop by converting hard-to-recycle plastics into high-quality petrochemical feedstocks and sustainable fuels for a greener industry.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-8 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:bg-emerald-500 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out flex items-center gap-2"
            asChild
          >
            <Link to="/about">
              <Leaf className="w-5 h-5 text-green-200" />
              Learn More
            </Link>
          </Button>
          
          <Button 
            size="lg"
            className="border-2 border-teal-400 text-teal-400 bg-transparent px-8 py-3 rounded-full font-medium hover:bg-teal-400/10 hover:text-teal-300 hover:scale-105 transition-all duration-200 ease-in-out"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-teal-400 animate-bounce" />
        </div>
      </section>

      {/* ECOFORGE PIPELINE */}
      <EcoForgePipeline />

      {/* ENGINEERING BLUEPRINT - The Math Behind the Magic */}
      <EngineeringBlueprint />

      {/* PLASTIC CRISIS INFOGRAPHIC */}
      <PlasticCrisisInfographic />

      {/* TRL STATUS GAUGE */}
      <TRLStatusGauge />

      {/* FOOTER CTA SECTION */}
      <section 
        ref={footerRef}
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #228B22 0%, #006400 50%, #004d00 100%)'
        }}
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Waste into Value?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join us in closing the loop on plastic waste. Let's build a sustainable future together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center gap-2"
                asChild
              >
                <Link to="/about">
                  <Leaf className="w-5 h-5" />
                  Learn More
                </Link>
              </Button>
              
              <Button 
                size="lg"
                className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Newsletter */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-white/70 text-sm mb-3">Subscribe for updates</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-4"
                />
                <Button className="bg-amber-500 hover:bg-amber-400 text-white rounded-full px-6">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Products Teaser */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={isFooterInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                to="/products" 
                className="text-teal-200 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                Discover Our Premium Outputs Soon →
              </Link>
            </motion.div>

            {/* Logo and Copyright */}
            <motion.div
              className="mt-12 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isFooterInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src={logoColor} 
                alt="Sansevieria Waste Refineries" 
                className="h-10 w-auto opacity-80"
              />
              <p className="text-white/50 text-sm">
                © 2025 Sansevieria Waste Refineries. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
