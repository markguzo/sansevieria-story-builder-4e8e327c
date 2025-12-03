import { Package, Beaker, Fuel } from "lucide-react";

export const EcoForgePipeline = () => {
  return (
    <section className="py-12 bg-white min-h-[600px]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Title */}
        <h2 className="text-[32px] font-bold text-[#008080] text-center mb-12">
          EcoForge Pipeline: From Waste to Wealth
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-4 relative">
          
          {/* Left Input */}
          <div className="flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <Package className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#228B22]">
              Any Type of Plastic Waste
            </h3>
          </div>

          {/* Left Arrow - straight line */}
          <svg className="w-16 h-4 flex-shrink-0 z-10" viewBox="0 0 64 16">
            <line x1="0" y1="8" x2="56" y2="8" stroke="#008080" strokeWidth="2" />
            <polygon points="56,4 64,8 56,12" fill="#008080" />
          </svg>

          {/* Middle Section with Steps and Black Box overlay */}
          <div className="relative flex items-center justify-center flex-1 max-w-[400px]">
            {/* Step indicators (hidden behind box) */}
            <div className="flex items-center gap-6 opacity-0">
              <div className="w-12 h-12 rounded-full border-2 border-[#008080]" />
              <div className="w-12 h-12 rounded-full border-2 border-[#228B22]" />
              <div className="w-12 h-12 rounded-full border-2 border-[#008080]" />
            </div>
            
            {/* Central Black Box - covers everything */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Proprietary transformation process"
            >
              <div className="w-96 h-20 bg-black border border-gray-300 rounded-md" />
            </div>
          </div>

          {/* Right Arrow - straight line */}
          <svg className="w-16 h-4 flex-shrink-0 z-10" viewBox="0 0 64 16">
            <line x1="0" y1="8" x2="56" y2="8" stroke="#008080" strokeWidth="2" />
            <polygon points="56,4 64,8 56,12" fill="#008080" />
          </svg>

          {/* Right Output */}
          <div className="flex flex-col items-center text-center z-10">
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Beaker className="w-12 h-12 text-[#DAA520]" />
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <Fuel className="w-12 h-12 text-[#228B22]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#DAA520]">
              Premium Petrochemicals & Sustainable Fuels
            </h3>
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Input */}
          <div className="flex flex-col items-center text-center">
            <Package className="w-10 h-10 text-gray-500 mb-2" />
            <h3 className="text-base font-semibold text-[#228B22]">
              Any Type of Plastic Waste
            </h3>
          </div>

          {/* Arrow Down */}
          <svg className="w-4 h-8" viewBox="0 0 16 32">
            <line x1="8" y1="0" x2="8" y2="24" stroke="#008080" strokeWidth="2" />
            <polygon points="4,24 8,32 12,24" fill="#008080" />
          </svg>

          {/* Black Box */}
          <div className="w-full max-w-[280px] h-16 bg-black border border-gray-300 rounded-md" />

          {/* Arrow Down */}
          <svg className="w-4 h-8" viewBox="0 0 16 32">
            <line x1="8" y1="0" x2="8" y2="24" stroke="#008080" strokeWidth="2" />
            <polygon points="4,24 8,32 12,24" fill="#008080" />
          </svg>

          {/* Output */}
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-2 mb-2">
              <Beaker className="w-8 h-8 text-[#DAA520]" />
              <Fuel className="w-8 h-8 text-[#228B22]" />
            </div>
            <h3 className="text-base font-semibold text-[#DAA520]">
              Premium Petrochemicals & Sustainable Fuels
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
