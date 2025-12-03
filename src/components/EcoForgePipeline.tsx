interface PipelineProps {
  colors?: {
    teal: string;
    green: string;
    gold: string;
  };
}

export const EcoForgePipeline = ({ 
  colors = { teal: '#008080', green: '#228B22', gold: '#DAA520' } 
}: PipelineProps) => {
  return (
    <section 
      className="py-16 bg-white min-h-[600px] flex flex-col justify-center"
      aria-label="EcoForge: Simple pipeline from waste to sustainable value"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2 
          className="text-[32px] font-bold text-center mb-12 leading-tight"
          style={{ color: colors.teal }}
        >
          EcoForge Pipeline: From Waste to Wealth
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {/* Left Input Node */}
          <div 
            className="flex flex-col items-center w-[20%]"
            aria-label="Plastic waste entry"
          >
            <div 
              className="w-32 h-32 border-2 flex items-center justify-center"
              style={{ borderColor: colors.green }}
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" 
                  stroke="#808080" 
                  strokeWidth="1.5" 
                  fill="none"
                />
                <polyline 
                  points="3.27 6.96 12 12.01 20.73 6.96" 
                  stroke="#808080" 
                  strokeWidth="1.5"
                />
                <line 
                  x1="12" y1="22.08" x2="12" y2="12" 
                  stroke="#808080" 
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p 
              className="text-base font-semibold text-center mt-2"
              style={{ color: colors.green }}
            >
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Central Black Vault */}
          <div 
            className="w-[60%] max-w-[384px] h-20 bg-black border flex items-center justify-around px-6"
            style={{ borderColor: colors.teal }}
            aria-label="Proprietary process vault"
          >
            {/* Faint process boxes */}
            <div className="w-16 h-12 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
            <div className="w-16 h-12 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
            <div className="w-16 h-12 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
          </div>

          {/* Right Output Node */}
          <div 
            className="flex flex-col items-center w-[20%]"
            aria-label="Premium fuels exit"
          >
            <div 
              className="w-32 h-32 border-2 flex items-center justify-center gap-3"
              style={{ borderColor: colors.gold }}
            >
              {/* Flask icon */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M6 22h12M9 6V2h6v4M9 6v5.2c0 .3-.1.6-.3.8L4 18c-1 1.5-.2 4 2 4h12c2.2 0 3-2.5 2-4l-4.7-6c-.2-.2-.3-.5-.3-.8V6" 
                  stroke="#000" 
                  strokeWidth="1.5" 
                  fill={colors.gold}
                  fillOpacity="0.3"
                />
              </svg>
              {/* Fuel drop icon */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" 
                  stroke="#000" 
                  strokeWidth="1.5" 
                  fill="#32CD32"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <p 
              className="text-base font-semibold text-center mt-2"
              style={{ color: colors.gold }}
            >
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Input */}
          <div className="flex flex-col items-center" aria-label="Plastic waste entry">
            <div 
              className="w-24 h-24 border-2 flex items-center justify-center"
              style={{ borderColor: colors.green }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path 
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" 
                  stroke="#808080" 
                  strokeWidth="1.5" 
                  fill="none"
                />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#808080" strokeWidth="1.5"/>
                <line x1="12" y1="22.08" x2="12" y2="12" stroke="#808080" strokeWidth="1.5"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-center mt-2" style={{ color: colors.green }}>
              Any Type of Plastic Waste
            </p>
          </div>

          {/* Vault */}
          <div 
            className="w-full max-w-[280px] h-16 bg-black border flex items-center justify-around px-4"
            style={{ borderColor: colors.teal }}
            aria-label="Proprietary process vault"
          >
            <div className="w-12 h-8 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
            <div className="w-12 h-8 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
            <div className="w-12 h-8 bg-gray-800 opacity-20 border" style={{ borderColor: colors.teal }} />
          </div>

          {/* Output */}
          <div className="flex flex-col items-center" aria-label="Premium fuels exit">
            <div 
              className="w-24 h-24 border-2 flex items-center justify-center gap-2"
              style={{ borderColor: colors.gold }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path 
                  d="M6 22h12M9 6V2h6v4M9 6v5.2c0 .3-.1.6-.3.8L4 18c-1 1.5-.2 4 2 4h12c2.2 0 3-2.5 2-4l-4.7-6c-.2-.2-.3-.5-.3-.8V6" 
                  stroke="#000" 
                  strokeWidth="1.5" 
                  fill={colors.gold}
                  fillOpacity="0.3"
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path 
                  d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" 
                  stroke="#000" 
                  strokeWidth="1.5" 
                  fill="#32CD32"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-center mt-2" style={{ color: colors.gold }}>
              Premium Petrochemicals & Sustainable Fuels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgePipeline;
