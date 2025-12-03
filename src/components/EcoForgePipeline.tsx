import { Package, Beaker, Fuel } from "lucide-react";

export const EcoForgePipeline = () => {
  return (
    <section 
      className="py-12 min-h-[700px] flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgba(34,139,34,0.15) 0%, rgba(0,128,128,0.12) 50%, rgba(34,139,34,0.15) 100%)'
      }}
    >
      {/* Subtle misty overlay for biophilic depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,128,128,0.08) 0%, transparent 70%)'
        }}
      />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Title with drop-shadow */}
        <h2 
          className="text-[36px] font-semibold text-[#008080] text-center mb-12"
          style={{ 
            textShadow: '0 2px 8px rgba(0,128,128,0.3)',
            lineHeight: '1.2'
          }}
        >
          EcoForge Pipeline: From Waste to Wealth
        </h2>

        {/* Desktop Layout - The Veiled Forge */}
        <div className="hidden md:flex items-center justify-between gap-6 relative">
          
          {/* Curved SVG Arrows arcing over the vault */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 300"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left arrow - curves up and over */}
            <path
              d="M 80 150 Q 200 40, 320 150"
              fill="none"
              stroke="#008080"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Right arrow - curves up and over */}
            <path
              d="M 680 150 Q 800 40, 920 150"
              fill="none"
              stroke="#008080"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Arrow heads */}
            <polygon points="315,145 325,150 315,155" fill="#008080" />
            <polygon points="915,145 925,150 915,155" fill="#008080" />
          </svg>

          {/* Left Input Node: The Humble Offering */}
          <div 
            className="flex flex-col items-center z-20 flex-shrink-0"
            style={{ marginRight: '-40px' }}
          >
            <div 
              className="w-32 h-32 rounded-xl border-2 border-[#008080] shadow-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(34,139,34,0.8)' }}
            >
              <Package 
                className="w-12 h-12 text-gray-400" 
                style={{ transform: 'rotate(-15deg)' }}
                strokeWidth={1.5}
              />
            </div>
            <p 
              className="text-[18px] font-semibold italic text-[#228B22] mt-3 text-center max-w-[140px]"
            >
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Central Veiled Vault: The Alchemical Abyss */}
          <div 
            className="relative flex-1 max-w-[70%] h-40 z-10"
            aria-label="Sealed transformation vault—process veiled in innovation"
          >
            {/* The Black Monolith */}
            <div 
              className="w-full h-full bg-black rounded-2xl border border-[#008080]/30 relative overflow-hidden"
              style={{ 
                boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.8), 0 8px 32px rgba(0,0,0,0.4)'
              }}
            >
              {/* Faint etched runes - top edge */}
              <div 
                className="absolute top-0 left-0 right-0 h-2"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,128,128,0.2) 20%, rgba(0,128,128,0.15) 40%, transparent 50%, rgba(0,128,128,0.2) 60%, rgba(0,128,128,0.15) 80%, transparent 100%)'
                }}
              />
              
              {/* Faint etched runes - bottom edge */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,128,128,0.15) 25%, rgba(0,128,128,0.2) 50%, rgba(0,128,128,0.15) 75%, transparent 100%)'
                }}
              />

              {/* Ethereal fake process silhouettes */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
                {/* Silhouette 1 - funnel-like */}
                <div 
                  className="w-16 h-20 rounded-t-full rounded-b-lg border border-[#008080]/20 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(75,85,99,0.25)', transform: 'rotate(-5deg)' }}
                />
                {/* Silhouette 2 - wave-form */}
                <div 
                  className="w-20 h-14 rounded-full border border-[#008080]/15 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(75,85,99,0.2)', transform: 'skewX(-10deg)' }}
                />
                {/* Silhouette 3 - chamber */}
                <div 
                  className="w-14 h-18 rounded-lg border border-[#008080]/20 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(75,85,99,0.3)', transform: 'rotate(8deg)' }}
                />
                {/* Silhouette 4 - oval conduit */}
                <div 
                  className="w-18 h-16 rounded-full border border-[#008080]/15 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(75,85,99,0.2)', transform: 'rotate(-12deg) scaleX(1.3)' }}
                />
                {/* Silhouette 5 - extraction form */}
                <div 
                  className="w-12 h-20 rounded-b-full rounded-t-lg border border-[#008080]/20 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(75,85,99,0.25)', transform: 'rotate(5deg)' }}
                />
              </div>
            </div>
          </div>

          {/* Right Output Cluster: The Gilded Emergence */}
          <div 
            className="flex flex-col items-center z-20 flex-shrink-0"
            style={{ marginLeft: '-40px' }}
          >
            <div 
              className="w-48 h-32 rounded-xl border-2 border-[#DAA520] shadow-lg flex items-center justify-center gap-4"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0,128,128,0.8) 0%, rgba(218,165,32,0.7) 100%)',
                boxShadow: '0 4px 20px rgba(218,165,32,0.3)'
              }}
            >
              <div style={{ filter: 'drop-shadow(0 0 6px rgba(218,165,32,0.5))' }}>
                <Beaker className="w-10 h-10 text-[#DAA520]" />
              </div>
              <div style={{ filter: 'drop-shadow(0 0 6px rgba(50,205,50,0.5))' }}>
                <Fuel className="w-10 h-10 text-[#32CD32]" />
              </div>
            </div>
            <p 
              className="text-[18px] font-semibold text-[#DAA520] mt-3 text-center max-w-[180px]"
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'rgba(218,165,32,0.4)',
                textUnderlineOffset: '4px'
              }}
            >
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Input Node */}
          <div className="flex flex-col items-center">
            <div 
              className="w-24 h-24 rounded-xl border-2 border-[#008080] shadow-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(34,139,34,0.8)' }}
            >
              <Package className="w-10 h-10 text-gray-400" style={{ transform: 'rotate(-15deg)' }} strokeWidth={1.5} />
            </div>
            <p className="text-base font-semibold italic text-[#228B22] mt-2 text-center">
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Vertical Arrow */}
          <svg width="20" height="40" viewBox="0 0 20 40">
            <path d="M 10 0 Q 5 20, 10 35" fill="none" stroke="#008080" strokeWidth="3" strokeLinecap="round" />
            <polygon points="6,32 10,40 14,32" fill="#008080" />
          </svg>

          {/* Mobile Vault */}
          <div 
            className="w-full max-w-[300px] h-28 bg-black rounded-2xl border border-[#008080]/30 relative overflow-hidden"
            style={{ boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.8)' }}
            aria-label="Sealed transformation vault"
          >
            {/* Runes */}
            <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,128,128,0.2), transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,128,128,0.2), transparent)' }} />
            {/* Silhouettes */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-4">
              <div className="w-10 h-12 rounded-full border border-[#008080]/20 backdrop-blur-sm" style={{ backgroundColor: 'rgba(75,85,99,0.25)' }} />
              <div className="w-12 h-10 rounded-lg border border-[#008080]/15 backdrop-blur-sm" style={{ backgroundColor: 'rgba(75,85,99,0.2)' }} />
              <div className="w-10 h-14 rounded-full border border-[#008080]/20 backdrop-blur-sm" style={{ backgroundColor: 'rgba(75,85,99,0.25)' }} />
            </div>
          </div>

          {/* Vertical Arrow */}
          <svg width="20" height="40" viewBox="0 0 20 40">
            <path d="M 10 0 Q 15 20, 10 35" fill="none" stroke="#008080" strokeWidth="3" strokeLinecap="round" />
            <polygon points="6,32 10,40 14,32" fill="#008080" />
          </svg>

          {/* Output Cluster */}
          <div className="flex flex-col items-center">
            <div 
              className="w-36 h-24 rounded-xl border-2 border-[#DAA520] shadow-lg flex items-center justify-center gap-3"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0,128,128,0.8), rgba(218,165,32,0.7))',
                boxShadow: '0 4px 16px rgba(218,165,32,0.3)'
              }}
            >
              <Beaker className="w-8 h-8 text-[#DAA520]" style={{ filter: 'drop-shadow(0 0 4px rgba(218,165,32,0.5))' }} />
              <Fuel className="w-8 h-8 text-[#32CD32]" style={{ filter: 'drop-shadow(0 0 4px rgba(50,205,50,0.5))' }} />
            </div>
            <p 
              className="text-base font-semibold text-[#DAA520] mt-2 text-center max-w-[160px]"
              style={{ textDecoration: 'underline', textDecorationColor: 'rgba(218,165,32,0.4)', textUnderlineOffset: '3px' }}
            >
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
