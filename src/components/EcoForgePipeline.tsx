import { Package, Beaker, Fuel } from "lucide-react";

export const EcoForgePipeline = () => {
  return (
    <section className="py-8 bg-white min-h-[500px] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-[32px] font-bold text-[#008080] text-center mb-10">
          EcoForge Pipeline: From Waste to Wealth
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center relative">
          
          {/* Left Input - positioned to overlap left edge of box */}
          <div className="flex flex-col items-center text-center absolute left-0 z-10" style={{ left: '5%' }}>
            <div className="w-10 h-10 flex items-center justify-center mb-2">
              <Package className="w-10 h-10 text-gray-500" />
            </div>
            <p className="text-[16px] text-[#228B22] font-medium max-w-[100px]">
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Left Arrow */}
          <svg 
            className="absolute z-20" 
            style={{ left: '15%', top: '50%', transform: 'translateY(-50%)' }}
            width="40" 
            height="16" 
            viewBox="0 0 40 16"
          >
            <line x1="0" y1="8" x2="32" y2="8" stroke="#008080" strokeWidth="2" />
            <polygon points="32,4 40,8 32,12" fill="#008080" />
          </svg>

          {/* Central Long Black Box */}
          <div 
            className="w-[70%] h-24 bg-black border border-[#008080]/50 rounded-md relative overflow-hidden"
          >
            {/* Faint fake process boxes inside */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
              <div className="w-16 h-12 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
              <div className="w-16 h-12 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
              <div className="w-16 h-12 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
              <div className="w-16 h-12 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
            </div>
          </div>

          {/* Right Arrow */}
          <svg 
            className="absolute z-20" 
            style={{ right: '15%', top: '50%', transform: 'translateY(-50%)' }}
            width="40" 
            height="16" 
            viewBox="0 0 40 16"
          >
            <line x1="0" y1="8" x2="32" y2="8" stroke="#008080" strokeWidth="2" />
            <polygon points="32,4 40,8 32,12" fill="#008080" />
          </svg>

          {/* Right Output - positioned to overlap right edge of box */}
          <div className="flex flex-col items-center text-center absolute z-10" style={{ right: '5%' }}>
            <div className="flex gap-2 mb-2">
              <Beaker className="w-10 h-10 text-[#DAA520]" />
              <Fuel className="w-10 h-10 text-[#228B22]" />
            </div>
            <p className="text-[16px] text-[#DAA520] font-medium max-w-[140px]">
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {/* Input */}
          <div className="flex flex-col items-center text-center">
            <Package className="w-8 h-8 text-gray-500 mb-1" />
            <p className="text-sm text-[#228B22] font-medium">
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Arrow Down */}
          <svg width="16" height="24" viewBox="0 0 16 24">
            <line x1="8" y1="0" x2="8" y2="18" stroke="#008080" strokeWidth="2" />
            <polygon points="4,18 8,24 12,18" fill="#008080" />
          </svg>

          {/* Black Box */}
          <div className="w-full max-w-[260px] h-16 bg-black border border-[#008080]/50 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center gap-2 px-3">
              <div className="w-10 h-8 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
              <div className="w-10 h-8 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
              <div className="w-10 h-8 bg-gray-800/50 border border-[#008080]/30 rounded opacity-30" />
            </div>
          </div>

          {/* Arrow Down */}
          <svg width="16" height="24" viewBox="0 0 16 24">
            <line x1="8" y1="0" x2="8" y2="18" stroke="#008080" strokeWidth="2" />
            <polygon points="4,18 8,24 12,18" fill="#008080" />
          </svg>

          {/* Output */}
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-2 mb-1">
              <Beaker className="w-8 h-8 text-[#DAA520]" />
              <Fuel className="w-8 h-8 text-[#228B22]" />
            </div>
            <p className="text-sm text-[#DAA520] font-medium max-w-[160px]">
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
