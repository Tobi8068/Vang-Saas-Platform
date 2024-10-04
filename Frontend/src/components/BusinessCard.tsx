import { useEffect, useRef, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";
import { LuPlusSquare } from "react-icons/lu";
import { GiHearts } from "react-icons/gi";
import { GoBookmarkFill } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import Tick from "assets/svg/tick.svg"

import ImgStarFilled from 'assets/svg/star_filled.svg';
import ImgCross from 'assets/svg/Crosshair.svg';
// import ImgInfo from 'assets/svg/Info.svg';
import ImgMenu from 'assets/svg/menu-icon.svg';
// import ImgStack from 'assets/svg/stack.svg'
// import ImgPlus from 'assets/svg/plus-icon.svg';
// import { IconThumbup } from "./Icons";

interface CardProps {
  title: string;
  category: string;
  detail: string;
  rating: number;
  reviews: string;
  logo: string;
  like: boolean;
  book: boolean;
}

function Card({ title, category, detail, rating, reviews, logo, like, book }: CardProps) {

  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  // const [showThumbup, setShowThumbup] = useState(false);
  const [isOpenButtonClicked, setIsOpenButtonClicked] = useState(false);

  // useEffect(() => {
  //   if (descriptionRef.current) {
  //     const descriptionHeight = descriptionRef.current.scrollHeight;
  //     const containerHeight = descriptionRef.current.clientHeight;

  //     setShowMoreButton(containerHeight < descriptionHeight);
  //   }
  // }, [description]);

  const handleSeeMoreClick = () => {
    setShowMore(true);
  };

  const handleMenuButtonClick = () => {
    setShowMenuButton(true);
  }

  // const handleThumbupClick = () => {
  //   setShowThumbup(!showThumbup);
  // }

  const handleOpenClick = () => {
    setIsOpenButtonClicked(!isOpenButtonClicked);
    console.log("button is clicked");
  };

  return (
    <div className="bg-white min-w-[419px] h-[208px] rounded-[25px] p-6 flex">
      <div className="flex flex-col justify-between w-[30%] ">
        <div className="text-left">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-base font-normal">{category}</div>
          <div className="text-sm font-normal">{detail}</div>
        </div>
        <div className="flex flex-row gap-4">
          {like ? <GiHearts size={24} /> : <LuHeart size={24} />}
          {book ? <GoBookmarkFill size={24} /> : <LuBookmark size={24} />}
          <LuPlusSquare size={24} />
        </div>
      </div>
      <div className="flex flex-row justify-between w-[70%] items-start">
        <img src={Tick} alt="tick" width={24} height={24} />
        <div className="flex flex-row gap-[6px]">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="text-sm font-semibold">{rating}</div>
              <IoIosStarOutline size={16} color="#FFAE00" />
            </div>
            <div className="text-sm font-normal pt-2">
              {reviews}
            </div>
          </div>
          <img src={logo} alt="company logo" width={48} height={48} />
        </div>
      </div>
    </div>
  );
};

export default Card;

{/* <div className="flex justify-between items-start">
        <div className="flex items-start gap-[28px]">
          <div className="bg-[#d9d9d9] w-[77px] h-[77px] rounded-[5px]"></div>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-2'>
              <h3 className="text-[36px] font-bold leading-none">{title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[20px] font-semibold text-gradient">CRM Tool</p>
              <span className="text-gray-500 text-[16px]">{reviews}+ Reviews</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-[24px] font-bold leading">{rating}</span>
          <img src="path-to-star-icon" alt="Rating" className="w-[20px] h-[20px]" />
        </div>
      </div> */}

{/* <div className="flex items-start p-2 h-[135px] overflow-hidden" >
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

      </div> */}
{/* <div className="flex items-center justify-center mt-4">
        {/* <div className="flex items-center gap-1">
          <img src={ImgStack} alt="Stack" className="w-[26px] h-[26px]"></img>
          <img src={ImgPlus} alt="Plus" className="w-[12px] h-[12px]"></img>
        </div> */}
{/* <button
          className={`font-bold text-[20px] py-1 px-20 rounded-full shadow-xl
              ${isOpenButtonClicked ? 'bg-[#1e1e1e]' : 'bg-lime-300'}
              ${isOpenButtonClicked ? 'text-white' : 'text-[#1e1e1e]'}`}
          onClick={handleOpenClick}
        >
          OPEN
        </button> */}
