import { Link } from 'react-router-dom';

export const EcoForgePipeline = () => {
  return (
    <section 
      className="py-20 px-6 bg-white"
      aria-label="EcoForge Pipeline: From waste to premium outputs"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title - Matching Global Opportunity style */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            style={{ 
              color: '#0A0A0A',
              fontFamily: '"Inter", system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            How We Create Premium Value
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-8">
          
          {/* ZONE 1: INPUT */}
          <div className="flex flex-col items-center text-center w-48">
            {/* Chaotic Waste Icon */}
            <div className="relative w-24 h-24 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Overlapping chaotic shapes */}
                <path
                  d="M20 60 L25 30 L45 25 L50 55 L30 65 Z"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  className="opacity-80"
                />
                <path
                  d="M35 70 L40 40 L65 35 L70 60 L55 75 Z"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="2"
                  className="opacity-90"
                />
                <path
                  d="M50 55 L55 25 L80 30 L75 65 L55 70 Z"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  className="opacity-70"
                />
                <circle cx="30" cy="45" r="8" fill="none" stroke="#0d9488" strokeWidth="1.5" opacity="0.6" />
                <rect x="55" y="50" width="15" height="20" fill="none" stroke="#374151" strokeWidth="1.5" opacity="0.5" transform="rotate(15 62 60)" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase">Input Feedstock</h3>
            <p className="text-sm text-gray-600 mt-1">Any Type of Plastic Waste</p>
          </div>

          {/* Arrow to Black Box with "Transform" label - matching Into style */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2">
            <svg width="80" height="140" viewBox="0 0 80 140">
              {/* Single horizontal arrow centered vertically */}
              <line x1="0" y1="70" x2="58" y2="70" stroke="#374151" strokeWidth="3" />
              <polygon points="58,63 78,70 58,77" fill="#374151" />
            </svg>
            <div className="bg-gray-100 border border-gray-300 rounded px-3 py-1">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Transform</span>
            </div>
          </div>

          {/* ZONE 2: THE BLACK BOX */}
          <div className="relative flex-shrink-0">
            {/* Main Black Monolith */}
            <div 
              className="relative w-72 h-44 bg-black rounded-sm overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Inner teal glow pulse */}
              <div 
                className="absolute inset-0 opacity-20 animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.4) 0%, transparent 70%)',
                }}
              />
              
              {/* Border glow effect */}
              <div 
                className="absolute inset-0 rounded-sm"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(20, 184, 166, 0.15)',
                }}
              />
              
              {/* BLURRED SECRET TEXT - The key visual hook */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div 
                  className="text-white text-center select-none"
                  style={{
                    filter: 'blur(6px)',
                    opacity: 0.5,
                  }}
                >
                  <div className="text-xs tracking-widest uppercase mb-2">Proprietary Technology</div>
                  <div className="text-lg font-bold tracking-wide">ECOFORGE REACTOR</div>
                  <div className="text-xs mt-2 max-w-48">Advanced Thermal Catalytic Process</div>
                </div>
                
                {/* Visible "Classified" overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border border-teal-500/30 px-4 py-2 rounded">
                    <span className="text-teal-400/60 text-xs tracking-[0.3em] uppercase font-medium">
                      Proprietary
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fanning Arrows with "Into" label */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2">
            <svg width="80" height="140" viewBox="0 0 80 140">
              {/* Top arrow */}
              <line x1="0" y1="70" x2="50" y2="15" stroke="#374151" strokeWidth="3" />
              <polygon points="50,8 68,15 52,24" fill="#374151" />
              
              {/* Middle arrow */}
              <line x1="0" y1="70" x2="58" y2="70" stroke="#374151" strokeWidth="3" />
              <polygon points="58,63 78,70 58,77" fill="#374151" />
              
              {/* Bottom arrow */}
              <line x1="0" y1="70" x2="50" y2="125" stroke="#374151" strokeWidth="3" />
              <polygon points="52,116 68,125 50,132" fill="#374151" />
            </svg>
            <div className="bg-gray-100 border border-gray-300 rounded px-3 py-1">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Into</span>
            </div>
          </div>

          {/* ZONE 3: VERTICAL OUTPUT STACK */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase text-center mb-2">
              Premium Outputs
            </h3>
            
            {/* PlastiSAF Card */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 w-56 hover:shadow-md transition-shadow">
              <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                <ellipse cx="20" cy="28" rx="10" ry="6" fill="none" stroke="#0d9488" strokeWidth="2" />
                <path d="M10 28 Q10 10 20 5 Q30 10 30 28" fill="none" stroke="#0d9488" strokeWidth="2" />
                <path d="M15 18 L12 12 M25 18 L28 12" stroke="#0d9488" strokeWidth="1.5" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 text-lg">PlastiSAF</p>
                <p className="text-xs text-gray-500">Aviation Fuel</p>
              </div>
            </div>

            {/* PlastiDiesel Card */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 w-56 hover:shadow-md transition-shadow">
              <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                <rect x="12" y="8" width="16" height="24" rx="2" fill="none" stroke="#0d9488" strokeWidth="2" />
                <rect x="16" y="4" width="8" height="6" fill="none" stroke="#0d9488" strokeWidth="1.5" />
                <path d="M8 32 L12 28 M12 32 L8 28" stroke="#0d9488" strokeWidth="1.5" />
                <line x1="16" y1="16" x2="24" y2="16" stroke="#0d9488" strokeWidth="1.5" />
                <line x1="16" y1="20" x2="24" y2="20" stroke="#0d9488" strokeWidth="1.5" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 text-lg">PlastiDiesel</p>
                <p className="text-xs text-gray-500">Industrial Fuel</p>
              </div>
            </div>

            {/* PlastiNaphtha Card */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 w-56 hover:shadow-md transition-shadow">
              <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                <path d="M14 15 L14 8 L26 8 L26 15" fill="none" stroke="#0d9488" strokeWidth="2" />
                <path d="M10 35 L14 15 L26 15 L30 35 Z" fill="none" stroke="#0d9488" strokeWidth="2" />
                <circle cx="17" cy="26" r="2" fill="#0d9488" opacity="0.6" />
                <circle cx="23" cy="28" r="1.5" fill="#0d9488" opacity="0.6" />
                <circle cx="20" cy="23" r="1.5" fill="#0d9488" opacity="0.6" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 text-lg">PlastiNaphtha</p>
                <p className="text-xs text-gray-500">Chemical Feedstock</p>
              </div>
            </div>
          </div>

          {/* ZONE 4: CTA */}
          <div className="flex-shrink-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-4 rounded hover:bg-gray-800 transition-colors"
            >
              <span>View Product Specs</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center gap-8">
          {/* Input + Arrow + Black Box Row */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-2">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 60 L25 30 L45 25 L50 55 L30 65 Z" fill="none" stroke="#374151" strokeWidth="2" opacity="0.8" />
                  <path d="M35 70 L40 40 L65 35 L70 60 L55 75 Z" fill="none" stroke="#0d9488" strokeWidth="2" opacity="0.9" />
                  <path d="M50 55 L55 25 L80 30 L75 65 L55 70 Z" fill="none" stroke="#374151" strokeWidth="2" opacity="0.7" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-gray-800 uppercase">Input</h3>
            </div>

            <svg width="40" height="16" viewBox="0 0 40 16">
              <line x1="0" y1="8" x2="30" y2="8" stroke="#374151" strokeWidth="2" />
              <polygon points="30,4 40,8 30,12" fill="#374151" />
            </svg>

            <div 
              className="w-48 h-28 bg-black rounded-sm relative overflow-hidden"
              style={{ boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.4)' }}
            >
              <div className="absolute inset-0 opacity-20 animate-pulse" style={{ background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.4) 0%, transparent 70%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center" style={{ filter: 'blur(5px)', opacity: 0.5 }}>
                  <div className="text-xs font-bold">ECOFORGE</div>
                </div>
                <div className="absolute border border-teal-500/30 px-3 py-1 rounded">
                  <span className="text-teal-400/60 text-[10px] tracking-[0.2em] uppercase">Proprietary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs Row */}
          <div className="flex gap-4">
            {[
              { name: 'PlastiSAF', sub: 'Aviation' },
              { name: 'PlastiDiesel', sub: 'Industrial' },
              { name: 'PlastiNaphtha', sub: 'Chemical' }
            ].map((product) => (
              <div key={product.name} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center">
                <p className="font-bold text-gray-900">{product.name}</p>
                <p className="text-xs text-gray-500">{product.sub}</p>
              </div>
            ))}
          </div>

          <Link to="/products" className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            View Product Specs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {/* Input */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-2">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 60 L25 30 L45 25 L50 55 L30 65 Z" fill="none" stroke="#374151" strokeWidth="2" opacity="0.8" />
                <path d="M35 70 L40 40 L65 35 L70 60 L55 75 Z" fill="none" stroke="#0d9488" strokeWidth="2" opacity="0.9" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-gray-800 uppercase">Input Feedstock</h3>
            <p className="text-xs text-gray-600">Any Type of Plastic</p>
          </div>

          {/* Arrow Down */}
          <svg width="24" height="40" viewBox="0 0 24 40">
            <line x1="12" y1="0" x2="12" y2="30" stroke="#374151" strokeWidth="2" />
            <polygon points="6,30 12,40 18,30" fill="#374151" />
          </svg>

          {/* Black Box */}
          <div 
            className="w-64 h-32 bg-black rounded-sm relative overflow-hidden"
            style={{ boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.4)' }}
          >
            <div className="absolute inset-0 opacity-20 animate-pulse" style={{ background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.4) 0%, transparent 70%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center" style={{ filter: 'blur(5px)', opacity: 0.5 }}>
                <div className="text-sm font-bold">ECOFORGE REACTOR</div>
              </div>
              <div className="absolute border border-teal-500/30 px-3 py-1 rounded">
                <span className="text-teal-400/60 text-[10px] tracking-[0.2em] uppercase">Proprietary</span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <svg width="24" height="40" viewBox="0 0 24 40">
            <line x1="12" y1="0" x2="12" y2="30" stroke="#374151" strokeWidth="2" />
            <polygon points="6,30 12,40 18,30" fill="#374151" />
          </svg>

          {/* Outputs */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <h3 className="text-xs font-bold text-gray-800 uppercase text-center">Premium Outputs</h3>
            {[
              { name: 'PlastiSAF', sub: 'Aviation Fuel' },
              { name: 'PlastiDiesel', sub: 'Industrial Fuel' },
              { name: 'PlastiNaphtha', sub: 'Chemical Feedstock' }
            ].map((product) => (
              <div key={product.name} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center">
                <p className="font-bold text-gray-900">{product.name}</p>
                <p className="text-xs text-gray-500">{product.sub}</p>
              </div>
            ))}
          </div>

          <Link to="/products" className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition-colors mt-2">
            View Product Specs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
