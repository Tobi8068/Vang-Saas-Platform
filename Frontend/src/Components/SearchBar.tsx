import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "I'm looking for...", value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full max-w-xs px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-300"
    />
  );
};

export default SearchBar;