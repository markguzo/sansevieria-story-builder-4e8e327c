import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface OpportunityCardProps {
  icon: LucideIcon;
  headline: string;
  description: string;
  children?: ReactNode;
  index: number;
  isInView: boolean;
  iconColor?: string;
  accentColor?: string;
}

export const OpportunityCard = ({
  icon: Icon,
  headline,
  description,
  children,
  index,
  isInView,
  iconColor = "text-amber-500",
  accentColor = "from-teal-600/80 to-teal-400/70"
}: OpportunityCardProps) => {
  return (
    <motion.div
      className={`relative rounded-2xl p-8 md:p-10 bg-gradient-to-br ${accentColor} shadow-xl overflow-hidden`}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
          <Icon className={`w-8 h-8 md:w-10 md:h-10 ${iconColor}`} />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{headline}</h3>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">{description}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityCard;
