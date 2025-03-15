import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FrameworkCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FrameworkCard = ({ title, description, Icon }: FrameworkCardProps) => {
  return (
    <div className="framework-card group">
      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>
      <div className="vertical-line vertical-line-left"></div>
      <div className="vertical-line vertical-line-right"></div>
      <div className="horizontal-line horizontal-line-top"></div>
      <div className="horizontal-line horizontal-line-bottom"></div>
      
      <Icon className="w-12 h-12 text-[#00ff00] mb-6" />
      <h3 className="text-[#00ff00] font-mono text-xl mb-3">{title}</h3>
      <p className="text-[#00ff00]/60 font-mono text-sm mb-6">{description}</p>
      <div className="text-[#00ff00] font-mono text-xs">[ CLICK TO ACCESS ]</div>
    </div>
  );
};

export default FrameworkCard;