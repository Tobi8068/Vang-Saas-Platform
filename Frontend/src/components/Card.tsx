import { useEffect, useRef, useState } from "react";

import ImgStarFilled from 'assets/svg/star_filled.svg';
import ImgInfo from 'assets/svg/Info.svg';
import ImgFavorite from 'assets/svg/favorite-icon.svg';
import ImgThumbup from 'assets/svg/Thumbs up.svg';
import ImgMenu from 'assets/svg/menu-icon.svg';
import ImgStack from 'assets/svg/stack.svg'
import ImgPlus from 'assets/svg/plus-icon.svg';

interface CardProps {
  title: string;
  rating: number;
  reviews: number;
  description: string;
  onOpenClick: () => void;
  customFooter?: React.ReactNode;
}

function Card({ title, rating, reviews, description, onOpenClick, customFooter }: CardProps) {

  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      const containerHeight = descriptionRef.current.clientHeight;

      setShowMoreButton(containerHeight < descriptionHeight);
    }
  }, [description]);

  const handleSeeMoreClick = () => {
    setShowMore(true);
  };

  const handleMenuButtonClick = () => {
    setShowMenuButton(true);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md">
      <div className="flex justify-between items-center">
        <div className='flex flex-col items-start'>
          <div className='flex items-center gap-2'>
            <h3 className="text-[30px] font-bold">{title}</h3>
            <img src={ImgInfo} alt="Info" className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-sm font-semibold text-gradient">CRM Tool</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end space-x-1">
            <div className="flex items-center">
              <span className="text-500 font-bold">{rating}</span>
              <img src={ImgStarFilled} alt="Rating" className="w-4 h-4" />
            </div>
            <span className="text-gray-500 text-sm">{reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}+</span>
          </div>
          <div className="bg-[#d9d9d9] w-[50px] h-[50px]"></div>
        </div>
      </div>

      <div className="flex items-start my-2 h-20 overflow-hidden" >
        <p className={`text-gray-600 text-left text-sm transition-all duration-300 ${showMore ? 'max-h-full overflow-auto' : 'line-clamp-4'
          }`} ref={descriptionRef}>
          {description}
          {showMoreButton && (
            <span className="text-blue-500 cursor-pointer" onClick={handleSeeMoreClick}>
              {' '}
              see more
            </span>
          )}
        </p>

      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <img src={ImgStack} alt="Stack" className="w-[25px] h-[25px]"></img>
          <img src={ImgPlus} alt="Plus" className="w-[10px] h-[10px]"></img>
        </div>
        <button
          className="bg-lime-300 text-black font-bold py-1 px-8 rounded-full shadow-xl hover:bg-lime-400"
          onClick={onOpenClick}
        >
          OPEN
        </button>
        {customFooter ? (
          customFooter
        ) : (
          <div className="flex gap-3">
            <button className="text-gray-500 hover:text-black">
              <img src={ImgThumbup} alt="Star" className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-black">
              <img src={ImgInfo} alt="Favorite" className="w-5 h-5" />
            </button>
            <button className="text-gray-500 relative" onMouseEnter={handleMenuButtonClick} onMouseLeave={() => setShowMenuButton(false)}>
              <img src={ImgMenu} alt="Share" className="w-5 h-5" />
              <div className={`text-sm absolute bg-white flex flex-col shadow-slate-500 rounded-[5px] shadow-md top-4 left-[14px] w-32 ${showMenuButton ? 'block' : 'hidden'}`}>
                <span className="border-b-2 hover:text-slate-700">Download</span>
                <span className="border-b-2 hover:text-slate-700">Detailed View</span>
                <span className="border-b-2 hover:text-slate-700">Leave a Review</span>
                <span className="hover:text-slate-700">Report Bug</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;