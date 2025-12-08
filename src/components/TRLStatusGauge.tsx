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
      {/* Faint concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full min-w-[800px] min-h-[800px]" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
          {[100, 180, 260, 340, 420, 500].map((radius, i) => (
            <circle
              key={radius}
              cx="400"
              cy="400"
              r={radius}
              fill="none"
              stroke="hsl(174, 100%, 29%)"
              strokeWidth="1"
              opacity={0.08 - i * 0.01}
            />
          ))}
        </svg>
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
            Proven Scalability
          </h2>
          <p 
            className="text-lg text-gray-500"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            From laboratory precision to industrial reality.
          </p>
        </motion.div>

        {/* Gauge Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* SVG Gauge */}
          <svg
            viewBox="0 0 400 240"
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
          >
            {/* Dashed Grey Arc (future TRL 7-9) */}
            <path
              d="M 40 200 A 160 160 0 0 1 360 200"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            
            {/* Solid Teal Arc (completed TRL 4-6) - drawn on top */}
            <motion.path
              d="M 40 200 A 160 160 0 0 1 360 200"
              fill="none"
              stroke="#0d9488"
              strokeWidth="6"
              strokeLinecap="round"
              style={{
                pathLength: fillProgress,
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
              const nodeSize = node.isCurrent ? 22 : 14;

              // Calculate label position - all labels go below the arc for clarity
              const labelOffset = node.isCurrent ? 50 : 38;

              return (
                <g key={node.trl}>
                  {/* Subtle glow for current node only */}
                  {node.isCurrent && (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={nodeSize + 6}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2"
                      opacity="0.3"
                      initial={{ scale: 1 }}
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3], 
                        scale: [1, 1.2, 1] 
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Node circle */}
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={nodeSize}
                    fill={isActive ? '#0d9488' : '#f9fafb'}
                    stroke={isActive ? '#0d9488' : '#d1d5db'}
                    strokeWidth={node.isCurrent ? 3 : 2}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  />

                  {/* TRL number inside circle */}
                  <text
                    x={cx}
                    y={cy + 5}
                    textAnchor="middle"
                    fill={isActive ? 'white' : '#9ca3af'}
                    fontSize={node.isCurrent ? "14" : "11"}
                    fontWeight="bold"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {node.trl}
                  </text>

                  {/* "YOU ARE HERE" badge - positioned higher above node */}
                  {node.isCurrent && (
                    <g>
                      <rect
                        x={cx - 48}
                        y={cy - 75}
                        width="96"
                        height="26"
                        rx="13"
                        fill="#0d9488"
                      />
                      <text
                        x={cx}
                        y={cy - 57}
                        textAnchor="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="bold"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        YOU ARE HERE
                      </text>
                      {/* Small arrow pointing down */}
                      <polygon
                        points={`${cx - 6},${cy - 49} ${cx + 6},${cy - 49} ${cx},${cy - 40}`}
                        fill="#0d9488"
                      />
                    </g>
                  )}

                  {/* Label below node */}
                  <text
                    x={cx}
                    y={cy + labelOffset}
                    textAnchor="middle"
                    fill={isActive ? '#111827' : '#9ca3af'}
                    fontSize={node.isCurrent ? "12" : "10"}
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
            className="inline-block px-8 py-4 bg-teal-700 rounded-full"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <span className="text-white font-semibold text-sm md:text-base">
              System proven at industrial scale. Ready for pilot deployment.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
