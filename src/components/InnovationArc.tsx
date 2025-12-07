import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const trlNodes = [
  {
    label: "TRL 4",
    title: "Lab Testing",
    status: "completed",
    position: { x: 10, y: 75 }
  },
  {
    label: "TRL 5",
    title: "Validation",
    status: "completed",
    position: { x: 25, y: 35 }
  },
  {
    label: "TRL 6",
    title: "INDUSTRIAL SCALE",
    status: "current",
    position: { x: 50, y: 10 }
  },
  {
    label: "TRL 7",
    title: "Pilot Scale",
    status: "future",
    position: { x: 75, y: 35 }
  },
  {
    label: "TRL 8",
    title: "System Complete",
    status: "future",
    position: { x: 90, y: 75 }
  },
  {
    label: "TRL 9",
    title: "Full Commercial",
    status: "future",
    position: { x: 95, y: 95 }
  }
];

export const InnovationArc = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Faint Concentric Ripples Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-full h-full max-w-6xl"
          viewBox="0 0 1000 1000"
          style={{ opacity: 0.03 }}
        >
          {[120, 200, 280, 360, 440, 520, 600].map((r, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="#00BFA5"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide"
            style={{ color: "#0A0A0A", fontFamily: '"Inter", sans-serif' }}
          >
            Our Journey
          </h2>
          <p
            className="text-lg md:text-xl mt-4"
            style={{ color: "#666666" }}
          >
            Climbing the Everest of Industrial Innovation.
          </p>
        </motion.div>

        {/* The Innovation Arc */}
        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px]">
          {/* SVG Arc Path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 60"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Completed Path (Teal) */}
            <motion.path
              d="M 5 55 Q 30 5, 50 5"
              fill="none"
              stroke="#00BFA5"
              strokeWidth="0.8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Future Path (Dashed Grey) */}
            <motion.path
              d="M 50 5 Q 70 5, 95 55"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </svg>

          {/* TRL Nodes */}
          {trlNodes.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute flex flex-col items-center"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
            >
              {/* "YOU ARE HERE" Badge for Current */}
              {node.status === "current" && (
                <motion.div
                  className="absolute -top-10 md:-top-12 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{
                    backgroundColor: "#00BFA5",
                    color: "#FFFFFF"
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  You Are Here
                </motion.div>
              )}

              {/* Node Circle */}
              <div
                className={`
                  relative flex items-center justify-center rounded-full transition-all duration-300
                  ${node.status === "current" 
                    ? "w-16 h-16 md:w-20 md:h-20" 
                    : "w-10 h-10 md:w-12 md:h-12"
                  }
                `}
                style={{
                  backgroundColor:
                    node.status === "completed"
                      ? "#00BFA5"
                      : node.status === "current"
                      ? "rgba(0, 191, 165, 0.15)"
                      : "transparent",
                  border:
                    node.status === "completed"
                      ? "2px solid #00BFA5"
                      : node.status === "current"
                      ? "3px solid #00BFA5"
                      : "2px solid #D1D5DB",
                  boxShadow:
                    node.status === "current"
                      ? "0 0 30px rgba(0, 191, 165, 0.4), 0 0 60px rgba(0, 191, 165, 0.2)"
                      : "none",
                  backdropFilter: node.status === "current" ? "blur(8px)" : "none"
                }}
              >
                {/* Pulsing Ring for Current */}
                {node.status === "current" && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "2px solid #00BFA5" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Checkmark for Completed */}
                {node.status === "completed" && (
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
                )}

                {/* Label inside for Current */}
                {node.status === "current" && (
                  <span
                    className="text-sm md:text-base font-bold"
                    style={{ color: "#00BFA5" }}
                  >
                    6
                  </span>
                )}
              </div>

              {/* Label and Title */}
              <div className="mt-2 md:mt-3 text-center">
                <p
                  className={`font-bold uppercase tracking-wider ${
                    node.status === "current" ? "text-sm md:text-base" : "text-xs"
                  }`}
                  style={{
                    color:
                      node.status === "future"
                        ? "#9CA3AF"
                        : node.status === "current"
                        ? "#0A0A0A"
                        : "#00BFA5"
                  }}
                >
                  {node.label}
                </p>
                <p
                  className={`mt-0.5 ${
                    node.status === "current"
                      ? "text-xs md:text-sm font-bold"
                      : "text-xs"
                  } max-w-[80px] md:max-w-[100px]`}
                  style={{
                    color:
                      node.status === "future"
                        ? "#9CA3AF"
                        : node.status === "current"
                        ? "#0A0A0A"
                        : "#666666"
                  }}
                >
                  {node.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Anchor - The Proof */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div
            className="px-8 py-4 rounded-full"
            style={{
              backgroundColor: "#0A0A0A",
              color: "#00BFA5"
            }}
          >
            <p className="text-sm md:text-base font-bold uppercase tracking-wider text-center">
              Proven at Industrial Scale — Ready to Deploy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationArc;
