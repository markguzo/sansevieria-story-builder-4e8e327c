import { Package, Beaker, Fuel } from "lucide-react";

export const EcoForgePipeline = () => {
  return (
    <section 
      className="py-16 min-h-[800px] flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(34,139,34,0.95) 0%, rgba(0,128,128,0.80) 100%)'
      }}
      aria-label="Veiled EcoForge: Waste enters mystery, emerges premium"
    >
      {/* Industrial fog overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Title */}
        <h2 
          className="text-4xl md:text-[36px] font-bold text-[#008080] text-center mb-16"
          style={{ 
            textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 0 20px rgba(0,128,128,0.3)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          EcoForge Pipeline: From Waste to Wealth
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 relative">
          
          {/* Curved SVG Arrows arcing over the vault */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 350"
            preserveAspectRatio="xMidYMid meet"
            style={{ zIndex: 5 }}
          >
            {/* Gold dashed energy trace - underlayer */}
            <path
              d="M 120 175 Q 300 30, 480 175"
              fill="none"
              stroke="#DAA520"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
            />
            <path
              d="M 720 175 Q 900 30, 1080 175"
              fill="none"
              stroke="#DAA520"
              strokeWidth="2"
              strokeDasharray="8,6"
              opacity="0.6"
            />
            
            {/* Main teal arrows */}
            <path
              d="M 130 175 Q 310 20, 490 175"
              fill="none"
              stroke="#008080"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 710 175 Q 890 20, 1070 175"
              fill="none"
              stroke="#008080"
              strokeWidth="4"
              strokeLinecap="round"
            />
            
            {/* Arrow heads */}
            <polygon points="485,170 495,175 485,180" fill="#008080" />
            <polygon points="1065,170 1075,175 1065,180" fill="#008080" />
          </svg>

          {/* Left Input Node */}
          <div 
            className="flex flex-col items-center flex-shrink-0 relative"
            style={{ zIndex: 10, marginRight: '-60px' }}
          >
            <div 
              className="w-40 h-40 rounded-xl border-2 border-[#008080] flex items-center justify-center relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(145deg, rgba(34,139,34,0.95) 0%, rgba(34,139,34,0.85) 50%, rgba(20,80,20,0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {/* Metallic texture overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)',
                  backgroundSize: '4px 4px'
                }}
              />
              <Package 
                className="w-12 h-12 relative z-10" 
                style={{ 
                  color: '#808080',
                  filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))'
                }}
                strokeWidth={1.5}
              />
            </div>
            <p className="text-lg font-semibold text-[#228B22] mt-4 text-center max-w-[160px]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Central Veiled Vault - The Industrial Powerhouse */}
          <div 
            className="relative flex-1 max-w-[75%] h-48"
            style={{ zIndex: 1 }}
          >
            {/* Main vault structure */}
            <div 
              className="w-full h-full rounded-3xl border border-[#008080]/20 relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 50%, #0a0a0a 100%)',
                boxShadow: 'inset 0 4px 30px rgba(0,0,0,0.9), inset 0 -2px 10px rgba(0,128,128,0.1), 0 10px 40px rgba(0,0,0,0.5)'
              }}
            >
              {/* Metallic grain texture */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              />
              
              {/* Top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008080]/40 to-transparent" />
              
              {/* Bottom edge shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#000]/80 to-transparent" />

              {/* Internal silhouettes - blurred pipes/valves/gears */}
              <div className="absolute inset-0 flex items-center justify-around px-12">
                {/* Silhouette 1 - vertical pipe */}
                <div 
                  className="w-16 h-28 rounded-lg"
                  style={{ 
                    background: 'linear-gradient(180deg, rgba(75,85,99,0.3) 0%, rgba(75,85,99,0.15) 100%)',
                    border: '1px solid rgba(0,128,128,0.15)',
                    transform: 'rotate(-8deg)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Silhouette 2 - chamber */}
                <div 
                  className="w-20 h-24 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(75,85,99,0.25) 0%, rgba(0,128,128,0.1) 100%)',
                    border: '1px solid rgba(0,128,128,0.12)',
                    transform: 'rotate(5deg) translateY(-10px)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Silhouette 3 - valve wheel */}
                <div 
                  className="w-24 h-24 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(75,85,99,0.2) 30%, rgba(0,128,128,0.08) 70%)',
                    border: '1px solid rgba(0,128,128,0.1)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Silhouette 4 - horizontal conduit */}
                <div 
                  className="w-28 h-16 rounded-xl"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(75,85,99,0.15) 0%, rgba(75,85,99,0.25) 50%, rgba(75,85,99,0.15) 100%)',
                    border: '1px solid rgba(0,128,128,0.12)',
                    transform: 'rotate(-3deg) translateY(15px)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Silhouette 5 - extraction column */}
                <div 
                  className="w-14 h-32 rounded-t-full rounded-b-lg"
                  style={{ 
                    background: 'linear-gradient(180deg, rgba(0,128,128,0.12) 0%, rgba(75,85,99,0.25) 100%)',
                    border: '1px solid rgba(0,128,128,0.15)',
                    transform: 'rotate(6deg)',
                    filter: 'blur(1px)'
                  }}
                />
              </div>

              {/* Teal energy veins connecting silhouettes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <line x1="15%" y1="50%" x2="30%" y2="45%" stroke="#008080" strokeWidth="1" opacity="0.2" />
                <line x1="30%" y1="45%" x2="45%" y2="50%" stroke="#008080" strokeWidth="1" opacity="0.15" />
                <line x1="45%" y1="50%" x2="60%" y2="55%" stroke="#008080" strokeWidth="1" opacity="0.2" />
                <line x1="60%" y1="55%" x2="75%" y2="48%" stroke="#008080" strokeWidth="1" opacity="0.15" />
                <line x1="75%" y1="48%" x2="88%" y2="50%" stroke="#008080" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Right Output Node */}
          <div 
            className="flex flex-col items-center flex-shrink-0 relative"
            style={{ zIndex: 10, marginLeft: '-60px' }}
          >
            <div 
              className="w-56 h-40 rounded-xl border-2 border-[#DAA520] flex items-center justify-center gap-6 relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(145deg, rgba(0,128,128,0.85) 0%, rgba(218,165,32,0.75) 100%)',
                boxShadow: '0 8px 32px rgba(218,165,32,0.3), inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {/* Metallic sheen overlay */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%)',
                  backgroundSize: '4px 4px'
                }}
              />
              <Beaker 
                className="w-12 h-12 relative z-10" 
                style={{ 
                  color: '#DAA520',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 0 8px rgba(218,165,32,0.4))'
                }}
              />
              <Fuel 
                className="w-12 h-12 relative z-10" 
                style={{ 
                  color: '#32CD32',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 0 8px rgba(50,205,50,0.4))'
                }}
              />
            </div>
            <p className="text-lg font-semibold text-[#DAA520] mt-4 text-center max-w-[200px]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Input */}
          <div className="flex flex-col items-center">
            <div 
              className="w-28 h-28 rounded-xl border-2 border-[#008080] flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(145deg, rgba(34,139,34,0.95), rgba(20,80,20,0.9))',
                boxShadow: '0 6px 24px rgba(0,0,0,0.4)'
              }}
            >
              <Package className="w-10 h-10 text-gray-500" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))' }} />
            </div>
            <p className="text-base font-semibold text-[#228B22] mt-3 text-center">
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Arrow */}
          <svg width="24" height="48" viewBox="0 0 24 48">
            <path d="M 12 0 Q 6 24, 12 40" fill="none" stroke="#008080" strokeWidth="3" strokeLinecap="round" />
            <polygon points="8,38 12,48 16,38" fill="#008080" />
          </svg>

          {/* Vault */}
          <div 
            className="w-full max-w-[320px] h-32 rounded-2xl border border-[#008080]/20 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(180deg, #0a0a0a, #000000)',
              boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.9)'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008080]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-around px-6">
              <div className="w-12 h-16 rounded-lg" style={{ background: 'rgba(75,85,99,0.25)', border: '1px solid rgba(0,128,128,0.15)', filter: 'blur(1px)' }} />
              <div className="w-14 h-14 rounded-full" style={{ background: 'rgba(75,85,99,0.2)', border: '1px solid rgba(0,128,128,0.1)', filter: 'blur(1px)' }} />
              <div className="w-10 h-20 rounded-t-full rounded-b-lg" style={{ background: 'rgba(75,85,99,0.25)', border: '1px solid rgba(0,128,128,0.15)', filter: 'blur(1px)' }} />
            </div>
          </div>

          {/* Arrow */}
          <svg width="24" height="48" viewBox="0 0 24 48">
            <path d="M 12 0 Q 18 24, 12 40" fill="none" stroke="#008080" strokeWidth="3" strokeLinecap="round" />
            <polygon points="8,38 12,48 16,38" fill="#008080" />
          </svg>

          {/* Output */}
          <div className="flex flex-col items-center">
            <div 
              className="w-40 h-28 rounded-xl border-2 border-[#DAA520] flex items-center justify-center gap-4"
              style={{ 
                background: 'linear-gradient(145deg, rgba(0,128,128,0.85), rgba(218,165,32,0.75))',
                boxShadow: '0 6px 24px rgba(218,165,32,0.3)'
              }}
            >
              <Beaker className="w-10 h-10 text-[#DAA520]" style={{ filter: 'drop-shadow(0 0 6px rgba(218,165,32,0.4))' }} />
              <Fuel className="w-10 h-10 text-[#32CD32]" style={{ filter: 'drop-shadow(0 0 6px rgba(50,205,50,0.4))' }} />
            </div>
            <p className="text-base font-semibold text-[#DAA520] mt-3 text-center max-w-[180px]">
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
