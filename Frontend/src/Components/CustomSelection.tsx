import React from 'react';

interface CustomSectionProps {
  bgColor: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const CustomSection: React.FC<CustomSectionProps> = ({ bgColor, children, onClick }) => {
  return (
    <div className={`relative flex items-center justify-between p-4 rounded-lg`} style={{ backgroundColor: bgColor }}>
      {children}
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-lime-300 p-4 rounded-full focus:outline-none hover:bg-lime-400"
        onClick={onClick}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
          <img src="/pictures/arrows.png" alt="Next" className="w-4 h-4"/>
        </div>
      </button>
    </div>
  );
};

export default CustomSection;