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

  // Smooth ascending curve from bottom-left to top-right with gentle undulations
  const sPath = "M 40 370 C 80 370, 80 310, 140 290 C 200 270, 220 270, 260 230 C 300 190, 340 120, 360 40";

  // Get point on path using 3 cubic bezier segments
  const getPointOnPath = (t: number) => {
    const segments = [
      { x0: 40, y0: 370, x1: 80, y1: 370, x2: 80, y2: 310, x3: 140, y3: 290 },
      { x0: 140, y0: 290, x1: 200, y1: 270, x2: 220, y2: 270, x3: 260, y3: 230 },
      { x0: 260, y0: 230, x1: 300, y1: 190, x2: 340, y2: 120, x3: 360, y3: 40 },
    ];
    
    const totalSegments = segments.length;
    const segIndex = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
    const localT = (t * totalSegments) - segIndex;
    const s = segments[segIndex];
    
    const mt = 1 - localT;
    const x = mt*mt*mt*s.x0 + 3*mt*mt*localT*s.x1 + 3*mt*localT*localT*s.x2 + localT*localT*localT*s.x3;
    const y = mt*mt*mt*s.y0 + 3*mt*mt*localT*s.y1 + 3*mt*localT*localT*s.y2 + localT*localT*localT*s.y3;
    
    return { x, y };
  };

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

        {/* S-Curve Container */}
        <div className="relative max-w-md mx-auto">
          <svg
            viewBox="0 0 400 420"
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
          >
            {/* Dashed Grey path (full background) */}
            <path
              d={sPath}
              fill="none"
              stroke="#d1d5db"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            
            {/* Solid Teal path (completed portion) */}
            <motion.path
              d={sPath}
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
              const pos = getPointOnPath(node.position);
              const isActive = node.position <= 0.666;
              const nodeSize = node.isCurrent ? 22 : 14;
              
              // Determine label side: Lab & Semi Industrial are on left side of path, Pilot & Industrial on right
              const isOnLeft = node.position === 0 || node.position === 0.666;
              const labelX = isOnLeft ? pos.x - nodeSize - 12 : pos.x + nodeSize + 12;
              const textAnchor = isOnLeft ? 'end' : 'start';

              return (
                <g key={node.label}>
                  {/* Glow for current node */}
                  {node.isCurrent && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
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
                    cx={pos.x}
                    cy={pos.y}
                    r={nodeSize}
                    fill={isActive ? '#0d9488' : '#f9fafb'}
                    stroke={isActive ? '#0d9488' : '#d1d5db'}
                    strokeWidth={node.isCurrent ? 3 : 2}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.3 }}
                  />

                  {/* "YOU ARE HERE" badge */}
                  {node.isCurrent && (
                    <g>
                      <rect
                        x={isOnLeft ? labelX - 96 : labelX}
                        y={pos.y - 32}
                        width="96"
                        height="22"
                        rx="11"
                        fill="#0d9488"
                      />
                      <text
                        x={isOnLeft ? labelX - 48 : labelX + 48}
                        y={pos.y - 17}
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
                    y={node.isCurrent ? pos.y + 5 : pos.y + 5}
                    textAnchor={textAnchor}
                    fill={isActive ? '#111827' : '#9ca3af'}
                    fontSize={node.isCurrent ? "14" : "12"}
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

      </div>
    </section>
  );
};