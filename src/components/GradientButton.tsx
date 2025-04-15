
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className, 
  onClick,
  icon = false,
  type = "button"
}) => {
  return (
    <button 
      type={type}
      className={cn(
        "bg-gradient-cta text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default GradientButton;
