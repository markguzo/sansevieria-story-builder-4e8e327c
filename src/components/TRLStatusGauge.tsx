import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const trlNodes = [
  { trl: 4, label: 'Lab Testing', position: 0 },
  { trl: 5, label: 'Validation', position: 0.2 },
  { trl: 6, label: 'INDUSTRIAL SCALE', position: 0.4, isCurrent: true },
  { trl: 7, label: 'Pilot Scale', position: 0.6 },
  { trl: 8, label: 'System Complete', position: 0.8 },
  { trl: 9, label: 'Commercial Deployment', position: 1 },
];

export const TRLStatusGauge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Fill progress stops at 40% (TRL 6 position)
  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Faint concentric ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-teal-500/5"
            style={{
              width: `${i * 25}%`,
              height: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Technology Readiness Level
          </h2>
          <p 
            className="text-lg text-gray-600"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Current Status: <span className="text-teal-600 font-semibold">TRL 6 - Industrial Scale</span>
          </p>
        </motion.div>

        {/* Gauge Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* SVG Gauge */}
          <svg
            viewBox="0 0 400 220"
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
          >
            {/* Background Arc (grey track) */}
            <path
              d="M 40 200 A 160 160 0 0 1 360 200"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              strokeLinecap="round"
            />
            
            {/* Animated Fill Arc (teal) */}
            <motion.path
              d="M 40 200 A 160 160 0 0 1 360 200"
              fill="none"
              stroke="#0d9488"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                pathLength: fillProgress,
                filter: 'drop-shadow(0 0 8px rgba(13, 148, 136, 0.5))'
              }}
            />

            {/* TRL Nodes */}
            {trlNodes.map((node, index) => {
              // Calculate position on arc
              const angle = Math.PI - (node.position * Math.PI);
              const radius = 160;
              const cx = 200 + radius * Math.cos(angle);
              const cy = 200 - radius * Math.sin(angle);
              
              const isActive = node.position <= 0.4;
              const nodeSize = node.isCurrent ? 20 : 14;

              return (
                <g key={node.trl}>
                  {/* Node circle */}
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={nodeSize}
                    fill={isActive ? '#0d9488' : '#f3f4f6'}
                    stroke={isActive ? '#0d9488' : '#d1d5db'}
                    strokeWidth="3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    style={node.isCurrent ? {
                      filter: 'drop-shadow(0 0 12px rgba(13, 148, 136, 0.6))'
                    } : {}}
                  />
                  
                  {/* Pulsing ring for current node */}
                  {node.isCurrent && (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={nodeSize + 8}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ 
                        opacity: [0.8, 0, 0.8], 
                        scale: [1, 1.5, 1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* "YOU ARE HERE" badge for TRL 6 */}
                  {node.isCurrent && (
                    <g>
                      <rect
                        x={cx - 45}
                        y={cy - 55}
                        width="90"
                        height="24"
                        rx="12"
                        fill="#0d9488"
                      />
                      <text
                        x={cx}
                        y={cy - 38}
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        YOU ARE HERE
                      </text>
                    </g>
                  )}

                  {/* TRL number */}
                  <text
                    x={cx}
                    y={cy + 4}
                    textAnchor="middle"
                    fill={isActive ? 'white' : '#9ca3af'}
                    fontSize={node.isCurrent ? "12" : "10"}
                    fontWeight="bold"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {node.trl}
                  </text>

                  {/* Label */}
                  <text
                    x={cx}
                    y={cy + (node.position <= 0.2 ? 40 : node.position >= 0.8 ? 40 : -35)}
                    textAnchor="middle"
                    fill={isActive ? '#1f2937' : '#9ca3af'}
                    fontSize={node.isCurrent ? "11" : "9"}
                    fontWeight={node.isCurrent ? "bold" : "normal"}
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div 
            className="inline-block px-8 py-4 bg-gray-900 rounded-full"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <span className="text-teal-400 font-medium text-sm md:text-base">
              System proven at industrial scale. Ready for pilot deployment.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
