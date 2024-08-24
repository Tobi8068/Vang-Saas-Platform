import React from 'react';

interface CardProps {
  title: string;
  rating: number;
  reviews: string;
  description: string;
  onOpenClick: () => void;
  customFooter?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, rating, reviews, description, onOpenClick, customFooter }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">CRM Tool</p>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500 font-bold">{rating}</span>
          <img src="/pictures/star.svg" alt="Rating" className="w-4 h-4" />
          <span className="text-gray-500 text-sm">{reviews}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 my-2">
        <img src="/pictures/info-icon.svg" alt="Info" className="w-4 h-4 text-blue-500" />
      </div>
      <p className="text-gray-600 text-sm">
        {description} <span className="text-blue-500 cursor-pointer">see more</span>
      </p>
      <div className="flex items-center justify-between mt-4">
        <button
          className="bg-lime-300 text-black font-bold py-2 px-4 rounded-full hover:bg-lime-400"
          onClick={onOpenClick}
        >
          OPEN
        </button>
        {customFooter ? (
          customFooter
        ) : (
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-black">
              <img src="/pictures/star.svg" alt="Star" className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-black">
              <img src="/pictures/favorite-icon.svg" alt="Favorite" className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-black">
              <img src="/pictures/share-icon.svg" alt="Share" className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;