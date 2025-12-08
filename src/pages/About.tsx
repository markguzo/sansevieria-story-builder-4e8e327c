import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Target, Leaf, ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    { name: "Dr. Sarah Chen", role: "CEO & Founder", image: null },
    { name: "Michael Torres", role: "CTO", image: null },
    { name: "Dr. Anna Kowalski", role: "Head of R&D", image: null },
    { name: "James Wilson", role: "COO", image: null },
    { name: "Elena Rodriguez", role: "VP Engineering", image: null },
    { name: "David Park", role: "VP Business Dev", image: null }
  ];

  const jobs = [
    { title: "Senior Process Engineer", location: "Amsterdam, NL", type: "Full-time" },
    { title: "Chemical Engineer", location: "Rotterdam, NL", type: "Full-time" },
    { title: "Business Development Manager", location: "London, UK", type: "Full-time" },
    { title: "Operations Analyst", location: "Remote", type: "Full-time" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We turn hard problems into simple solutions."
    },
    {
      icon: Target,
      title: "Simplicity",
      description: "Clear design, easy to deploy."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Lower emissions with real circular use."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Concentric Teal Ripples Background - Stronger here */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh]" viewBox="0 0 1000 1000">
          {[100, 180, 260, 340, 420, 500, 580, 660].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="hsl(162, 36%, 27%)"
              strokeWidth="1"
              opacity={0.05 - i * 0.004}
            />
          ))}
        </svg>
      </div>

      {/* Hero Section - Mission */}
      <section className="relative py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sansevieria's mission is to spearhead the future of plastic waste transformation — 
            eliminating unrecyclable plastics and turning them into practical fuels and feedstocks.
          </p>
        </motion.div>
      </section>

      {/* Values Section - Circular Cards */}
      <section className="py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          Our Values
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section - Circular Portraits */}
      <section className="py-20 px-6 bg-secondary/20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          The Team
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4">
                <div className="w-full h-full rounded-full bg-muted-foreground/20 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center overflow-hidden border-4 border-transparent group-hover:border-primary">
                  {/* Placeholder avatar with initials */}
                  <span className="text-2xl md:text-3xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Careers Section - The Pill List with Color Shift */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(162, 36%, 94%) 0%, hsl(162, 30%, 97%) 40%, hsl(0, 0%, 100%) 80%)'
            }}
          >
            {/* Concentric Oval Shapes */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg className="w-[150%] h-[150%]" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
                <ellipse cx="400" cy="250" rx="380" ry="220" fill="none" stroke="hsl(162, 36%, 60%)" strokeWidth="1" opacity="0.08" />
                <ellipse cx="400" cy="250" rx="300" ry="175" fill="none" stroke="hsl(162, 36%, 55%)" strokeWidth="1" opacity="0.06" />
                <ellipse cx="400" cy="250" rx="220" ry="130" fill="none" stroke="hsl(162, 36%, 50%)" strokeWidth="1" opacity="0.05" />
                <ellipse cx="400" cy="250" rx="140" ry="85" fill="none" stroke="hsl(162, 36%, 45%)" strokeWidth="1" opacity="0.04" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Join the Revolution
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                Be part of the team transforming plastic waste into sustainable value.
              </p>

              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-full px-6 py-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                      <span className="font-semibold text-foreground">{job.title}</span>
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2 text-primary font-medium hover:text-primary/80 transition-colors rounded-full border border-primary/20 hover:border-primary/40"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Simple System That Fits
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Modular units can plug into refineries or waste centers. We reduce transport and landfill costs by densifying waste. Fast to deploy, low risk, and built to grow.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            See Our Products
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;