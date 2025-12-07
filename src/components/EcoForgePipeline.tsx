import { Link } from 'react-router-dom';

export const EcoForgePipeline = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-white min-h-[600px] flex flex-col justify-center"
      aria-label="EcoForge Pipeline: From waste to premium outputs"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          
          {/* ZONE 1: INPUT */}
          <div className="flex flex-col items-center w-[18%]" aria-label="Input feedstock zone">
            {/* Chaotic overlapping shapes icon */}
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 80 80" 
              fill="none"
              aria-hidden="true"
              className="mb-3"
            >
              {/* Crushed bottle outline */}
              <path 
                d="M25 55L20 35L25 20L35 15L45 20L40 35L45 55L35 60L25 55Z" 
                stroke="#4B5563" 
                strokeWidth="2" 
                fill="none"
                transform="rotate(-15 35 40)"
              />
              {/* Crumpled bag outline */}
              <path 
                d="M30 50L25 30L30 25L50 25L55 30L50 50L55 55L30 55L30 50Z" 
                stroke="#6B7280" 
                strokeWidth="2" 
                fill="none"
                transform="rotate(10 40 40)"
              />
              {/* Broken container outline */}
              <path 
                d="M35 60L30 40L35 30L55 30L60 40L55 60Z" 
                stroke="#374151" 
                strokeWidth="2" 
                fill="none"
                transform="rotate(-5 45 45)"
              />
              {/* Additional jagged fragment */}
              <path 
                d="M45 25L40 15L50 10L60 20L55 30L45 25Z" 
                stroke="#9CA3AF" 
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
            <p className="text-sm font-bold text-gray-900 tracking-wide uppercase">Input Feedstock</p>
            <p className="text-xs text-gray-500 mt-1">Any Type of Plastic Waste</p>
          </div>

          {/* Arrow 1: Input to Black Box */}
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
            <path 
              d="M0 12H50M50 12L42 6M50 12L42 18" 
              stroke="#374151" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* ZONE 2: BLACK BOX */}
          <div 
            className="flex-1 max-w-[320px] h-28 bg-black flex items-center justify-center shadow-2xl"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)' }}
            aria-label="Proprietary EcoForge Reactor"
          >
            <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase text-center px-4">
              Proprietary<br/>EcoForge Reactor
            </p>
          </div>

          {/* Arrow 2: Black Box to Outputs (splits into 3) */}
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" aria-hidden="true">
            <path d="M0 40H30" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
            <path d="M30 40L50 15M50 15L42 17M50 15L48 23" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30 40H50M50 40L42 34M50 40L42 46" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30 40L50 65M50 65L42 63M50 65L48 57" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* ZONE 3: OUTPUTS */}
          <div className="flex flex-col items-center w-[28%]" aria-label="Premium outputs zone">
            <p className="text-sm font-bold text-gray-900 tracking-wide uppercase mb-4">Premium Outputs</p>
            <div className="flex items-start justify-center gap-6">
              {/* PlastiSAF */}
              <div className="flex flex-col items-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  {/* Aviation fuel drop with wings */}
                  <path 
                    d="M24 8L28 24L36 28L28 30L24 42L20 30L12 28L20 24L24 8Z" 
                    stroke="#1F2937" 
                    strokeWidth="2" 
                    fill="#F3F4F6"
                  />
                  {/* Left wing */}
                  <path d="M12 24L4 20L12 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                  {/* Right wing */}
                  <path d="M36 24L44 20L36 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiSAF</p>
              </div>

              {/* PlastiDiesel */}
              <div className="flex flex-col items-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  {/* Fuel pump nozzle */}
                  <rect x="16" y="12" width="16" height="24" rx="2" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                  <path d="M20 12V8H28V12" stroke="#1F2937" strokeWidth="2"/>
                  <path d="M32 20L38 14V32L32 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                  <rect x="20" y="18" width="8" height="4" fill="#9CA3AF"/>
                  <path d="M24 36V42" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiDiesel</p>
              </div>

              {/* PlastiNaphtha */}
              <div className="flex flex-col items-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  {/* Chemical flask */}
                  <path 
                    d="M18 8H30M20 8V18L12 36C11 38 12.5 42 16 42H32C35.5 42 37 38 36 36L28 18V8" 
                    stroke="#1F2937" 
                    strokeWidth="2" 
                    fill="#F3F4F6"
                  />
                  {/* Molecule structure inside */}
                  <circle cx="20" cy="30" r="2" fill="#6B7280"/>
                  <circle cx="28" cy="30" r="2" fill="#6B7280"/>
                  <circle cx="24" cy="35" r="2" fill="#6B7280"/>
                  <path d="M20 30L24 35M28 30L24 35M20 30L28 30" stroke="#9CA3AF" strokeWidth="1"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiNaphtha</p>
              </div>
            </div>
          </div>

          {/* ZONE 4: CTA */}
          <div className="flex items-center pl-4" aria-label="Call to action">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View Product Specifications
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center gap-8">
          {/* Top Row: Input → Black Box */}
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Input */}
            <div className="flex flex-col items-center" aria-label="Input feedstock">
              <svg width="64" height="64" viewBox="0 0 80 80" fill="none" aria-hidden="true" className="mb-2">
                <path d="M25 55L20 35L25 20L35 15L45 20L40 35L45 55L35 60L25 55Z" stroke="#4B5563" strokeWidth="2" fill="none" transform="rotate(-15 35 40)"/>
                <path d="M30 50L25 30L30 25L50 25L55 30L50 50L55 55L30 55L30 50Z" stroke="#6B7280" strokeWidth="2" fill="none" transform="rotate(10 40 40)"/>
                <path d="M35 60L30 40L35 30L55 30L60 40L55 60Z" stroke="#374151" strokeWidth="2" fill="none" transform="rotate(-5 45 45)"/>
              </svg>
              <p className="text-xs font-bold text-gray-900 uppercase">Input Feedstock</p>
              <p className="text-[10px] text-gray-500">Any Plastic Waste</p>
            </div>

            {/* Arrow */}
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" aria-hidden="true">
              <path d="M0 10H32M32 10L26 5M32 10L26 15" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            </svg>

            {/* Black Box */}
            <div 
              className="w-48 h-20 bg-black flex items-center justify-center shadow-xl"
              aria-label="Proprietary EcoForge Reactor"
            >
              <p className="text-white text-[10px] font-semibold tracking-[0.15em] uppercase text-center">
                Proprietary<br/>EcoForge Reactor
              </p>
            </div>
          </div>

          {/* Down Arrow */}
          <svg width="20" height="40" viewBox="0 0 20 40" fill="none" aria-hidden="true">
            <path d="M10 0V32M10 32L5 26M10 32L15 26" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* Outputs Row */}
          <div className="flex flex-col items-center" aria-label="Premium outputs">
            <p className="text-sm font-bold text-gray-900 uppercase mb-4">Premium Outputs</p>
            <div className="flex items-start justify-center gap-8">
              {/* PlastiSAF */}
              <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  <path d="M24 8L28 24L36 28L28 30L24 42L20 30L12 28L20 24L24 8Z" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                  <path d="M12 24L4 20L12 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                  <path d="M36 24L44 20L36 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiSAF</p>
              </div>
              {/* PlastiDiesel */}
              <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  <rect x="16" y="12" width="16" height="24" rx="2" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                  <path d="M20 12V8H28V12" stroke="#1F2937" strokeWidth="2"/>
                  <path d="M32 20L38 14V32L32 28" stroke="#374151" strokeWidth="1.5" fill="none"/>
                  <rect x="20" y="18" width="8" height="4" fill="#9CA3AF"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiDiesel</p>
              </div>
              {/* PlastiNaphtha */}
              <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mb-2">
                  <path d="M18 8H30M20 8V18L12 36C11 38 12.5 42 16 42H32C35.5 42 37 38 36 36L28 18V8" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                  <circle cx="20" cy="30" r="2" fill="#6B7280"/>
                  <circle cx="28" cy="30" r="2" fill="#6B7280"/>
                  <circle cx="24" cy="35" r="2" fill="#6B7280"/>
                  <path d="M20 30L24 35M28 30L24 35M20 30L28 30" stroke="#9CA3AF" strokeWidth="1"/>
                </svg>
                <p className="text-xs font-semibold text-gray-800">PlastiNaphtha</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Product Specifications
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Input */}
          <div className="flex flex-col items-center" aria-label="Input feedstock">
            <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true" className="mb-2">
              <path d="M25 55L20 35L25 20L35 15L45 20L40 35L45 55L35 60L25 55Z" stroke="#4B5563" strokeWidth="2" fill="none" transform="rotate(-15 35 40)"/>
              <path d="M30 50L25 30L30 25L50 25L55 30L50 50L55 55L30 55L30 50Z" stroke="#6B7280" strokeWidth="2" fill="none" transform="rotate(10 40 40)"/>
            </svg>
            <p className="text-xs font-bold text-gray-900 uppercase">Input Feedstock</p>
            <p className="text-[10px] text-gray-500">Any Plastic Waste</p>
          </div>

          {/* Down Arrow */}
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" aria-hidden="true">
            <path d="M8 0V24M8 24L3 19M8 24L13 19" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* Black Box */}
          <div 
            className="w-full max-w-[240px] h-16 bg-black flex items-center justify-center shadow-lg"
            aria-label="Proprietary EcoForge Reactor"
          >
            <p className="text-white text-[9px] font-semibold tracking-[0.1em] uppercase text-center">
              Proprietary EcoForge Reactor
            </p>
          </div>

          {/* Down Arrow */}
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" aria-hidden="true">
            <path d="M8 0V24M8 24L3 19M8 24L13 19" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* Outputs */}
          <div className="flex flex-col items-center gap-2" aria-label="Premium outputs">
            <p className="text-xs font-bold text-gray-900 uppercase mb-2">Premium Outputs</p>
            <div className="flex items-start justify-center gap-4">
              <div className="flex flex-col items-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M24 8L28 24L36 28L28 30L24 42L20 30L12 28L20 24L24 8Z" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                </svg>
                <p className="text-[10px] font-semibold text-gray-800">PlastiSAF</p>
              </div>
              <div className="flex flex-col items-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="16" y="12" width="16" height="24" rx="2" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                  <path d="M20 12V8H28V12" stroke="#1F2937" strokeWidth="2"/>
                </svg>
                <p className="text-[10px] font-semibold text-gray-800">PlastiDiesel</p>
              </div>
              <div className="flex flex-col items-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M18 8H30M20 8V18L12 36C11 38 12.5 42 16 42H32C35.5 42 37 38 36 36L28 18V8" stroke="#1F2937" strokeWidth="2" fill="#F3F4F6"/>
                </svg>
                <p className="text-[10px] font-semibold text-gray-800">PlastiNaphtha</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Products
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
