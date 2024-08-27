import { useEffect, useRef, useState } from "react";

import ImgStarFilled from 'assets/svg/star_filled.svg';
// import ImgInfo from 'assets/svg/Info.svg';
import ImgMenu from 'assets/svg/menu-icon.svg';
import ImgStack from 'assets/svg/stack.svg'
import ImgPlus from 'assets/svg/plus-icon.svg';
import { IconThumbup } from "./Icons";

interface CardProps {
  title: string;
  rating: number;
  reviews: number;
  description: string;
  customFooter?: React.ReactNode;
}

function Card({ title, rating, reviews, description, customFooter }: CardProps) {

  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showThumbup, setShowThumbup] = useState(false);
  const [isOpenButtonClicked, setIsOpenButtonClicked] = useState(false);

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

  const handleThumbupClick = () => {
    setShowThumbup(!showThumbup);
  }

  const handleOpenClick = () => {
    setIsOpenButtonClicked(!isOpenButtonClicked);
  }

  return (
    <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-4 w-[500px] h-[306px]">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-[28px]">
          <div className="bg-[#d9d9d9] w-[77px] h-[77px] rounded-[5px]"></div>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-2'>
              <h3 className="text-[36px] font-bold leading-none">{title}</h3>
              {/* <img src={ImgInfo} alt="Info" className="w-4 h-4 text-blue-500" /> */}
            </div>
            <p className="text-[20px] font-semibold text-gradient">CRM Tool</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end space-x-1">
            <div className="flex items-center">
              <span className="text-[24px] font-bold leading">{rating}</span>
              <img src={ImgStarFilled} alt="Rating" className="w-[20px] h-[20px]" />
            </div>
            <span className="text-gray-500 text-[16px]">{reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}+</span>
          </div>
        </div>
      </div>

      <div className="flex items-start p-2 h-[135px] overflow-hidden" >
        <p className={`text-gray-600 text-left text-[20px] transition-all duration-300 ${showMore ? 'max-h-full overflow-auto' : 'line-clamp-4'
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
          <img src={ImgStack} alt="Stack" className="w-[26px] h-[26px]"></img>
          <img src={ImgPlus} alt="Plus" className="w-[12px] h-[12px]"></img>
        </div>
        <button
          className={`font-bold text-[20px] py-1 px-20 rounded-full shadow-xl
              ${isOpenButtonClicked ? 'bg-[#1e1e1e]' : 'bg-lime-300'}
              ${isOpenButtonClicked ? 'text-white' : 'text-[#1e1e1e]'}
              ${isOpenButtonClicked ? 'hover:bg-[#1E1E1E]' : 'hover:bg-[#E1FF67]'}
            `}
          onClick={handleOpenClick}
        >
          OPEN
        </button>
        {customFooter ? (
          customFooter
        ) : (
          <div className="flex gap-3">
            <button className="text-gray-500 hover:text-black">
              <IconThumbup color={`${showThumbup ? "#1e1e1e" : 'none'}`} onClick={handleThumbupClick}></IconThumbup>
            </button>
            {/* <button className="text-gray-500 hover:text-black">
              <img src={ImgInfo} alt="Star" className="w-5 h-5" />
            </button> */}
            <button className="text-gray-500 relative" onMouseEnter={handleMenuButtonClick} onMouseLeave={() => setShowMenuButton(false)}>
              <img src={ImgMenu} alt="Share" className="w-[26px] h-[26px]" />
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