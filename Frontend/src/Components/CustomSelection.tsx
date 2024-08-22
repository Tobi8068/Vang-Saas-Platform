import React from 'react';

interface CustomSectionProps {
  bgColor: string;
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const CustomSection: React.FC<CustomSectionProps> = ({ bgColor, title, children, onClick }) => {
  return (
    <div className={`relative p-4 rounded-lg`} style={{ backgroundColor: bgColor }}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <button
          className="bg-lime-300 p-2 rounded-full hover:bg-lime-400"
          onClick={onClick}
        >
          <img src="/pictures/arrow-icon.svg" alt="Next" className="w-4 h-4"/>
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        {children}
      </div>
    </div>
  );
};

export default CustomSection;
