import React from 'react';

interface ButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      className={`px-4 py-2 border rounded-lg ${
        isActive ? 'bg-lime-300 hover:bg-lime-400' : 'bg-white hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;