
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <img 
        src="/lovable-uploads/e5785d15-d287-4126-be76-6c31a89577a8.png"
        alt="AirStaff Logo"
        className="h-10"
      />
    </div>
  );
};

export default Logo;
