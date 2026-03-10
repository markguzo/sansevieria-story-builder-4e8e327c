import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const trlNodes = [
  { label: 'Lab', position: 0 },
  { label: 'Pilot', position: 0.333 },
  { label: 'Semi Industrial', position: 0.666, isCurrent: true },
  { label: 'Industrial', position: 1 },
];

export const TRLStatusGauge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 0.666]);

  const cx = 200;
  const cy = 200;
  const r = 140;

  // Map position 0-1 along arc from bottom-left (220°) sweeping 280° clockwise (visually up-left, over top, down-right)
  const getNodePosition = (position: number) => {
    const angleDeg = 220 - position * 280;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy - r * Math.sin(angleRad),
      angleDeg,
    };
  };

  // Arc path: ~280° open circle from bottom-left to bottom-right
  const startAngleRad = (220 * Math.PI) / 180;
  const endAngleRad = ((220 - 280) * Math.PI) / 180;
  const arcStartX = cx + r * Math.cos(startAngleRad);
  const arcStartY = cy - r * Math.sin(startAngleRad);
  const arcEndX = cx + r * Math.cos(endAngleRad);
  const arcEndY = cy - r * Math.sin(endAngleRad);
  const arcPath = `M ${arcStartX} ${arcStartY} A ${r} ${r} 0 1 1 ${arcEndX} ${arcEndY}`;

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
          className="text-center mb-8"
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
        <div className="relative max-w-md mx-auto">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
          >
            {/* Dashed Grey Arc (full background path) */}
            <path
              d={arcPath}
              fill="none"
              stroke="#d1d5db"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            
            {/* Solid Teal Arc (completed portion) */}
            <motion.path
              d={arcPath}
              fill="none"
              stroke="#0d9488"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                pathLength: fillProgress,
              }}
            />

            {/* Nodes */}
            {trlNodes.map((node, index) => {
              const { x, y, angleDeg } = getNodePosition(node.position);
              const isActive = node.position <= 0.666;
              const nodeSize = node.isCurrent ? 22 : 14;

              // Push labels outward from circle center
              const labelAngleRad = (angleDeg * Math.PI) / 180;
              const labelDist = node.isCurrent ? 52 : 36;
              const labelX = x + labelDist * Math.cos(labelAngleRad);
              const labelY = y - labelDist * Math.sin(labelAngleRad);
              
              const isLeftSide = angleDeg > 90 && angleDeg <= 270;
              const textAnchor = isLeftSide ? 'end' : 'start';

              return (
                <g key={node.label}>
                  {/* Glow for current node */}
                  {node.isCurrent && (
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={nodeSize + 8}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2"
                      opacity="0.3"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3], 
                        scale: [1, 1.15, 1] 
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
                    cx={x}
                    cy={y}
                    r={nodeSize}
                    fill={isActive ? '#0d9488' : '#f9fafb'}
                    stroke={isActive ? '#0d9488' : '#d1d5db'}
                    strokeWidth={node.isCurrent ? 3 : 2}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  />

                  {/* "YOU ARE HERE" badge */}
                  {node.isCurrent && (
                    <g>
                      <rect
                        x={labelX - (isLeftSide ? 96 : 0)}
                        y={labelY - 28}
                        width="96"
                        height="22"
                        rx="11"
                        fill="#0d9488"
                      />
                      <text
                        x={labelX - (isLeftSide ? 48 : -48)}
                        y={labelY - 13}
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

                  {/* Label */}
                  <text
                    x={labelX}
                    y={node.isCurrent ? labelY + 5 : labelY + 4}
                    textAnchor={textAnchor}
                    fill={isActive ? '#111827' : '#9ca3af'}
                    fontSize={node.isCurrent ? "13" : "11"}
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
          className="text-center mt-8"
        >
          <div 
            className="inline-block px-8 py-4 bg-teal-700 rounded-full"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <span className="text-white font-semibold text-sm md:text-base">
              Proven at semi-industrial scale — Ready for full industrial deployment.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};