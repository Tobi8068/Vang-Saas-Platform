
import SideBarButton from 'components/SideBarButton';
import ImgArrow from 'assets/svg/arrow-icon.svg';
import ImgAvatar from 'assets/img/Avatar.png';
import ImgPlus from 'assets/svg/Plus.svg';

import { useState } from 'react';

function LeftSideBar() {

  const [selectedButton, setSelectedButton] = useState<string>('stack');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className='flex flex-row md:flex-col justify-between h-full w-full md:w-fit sticky top-2'>
      <div className="flex flex-row md:flex-col gap-4 items-center justify-end bg-white shadow-gray-500 shadow-md md:mt-20 rounded-full w-fit md:h-[35%]">
        <SideBarButton
          isSelected={selectedButton === 'stack'}
          onClick={() => handleButtonClick('stack')}
          type='stack'
          altText="Marketplace"
        />
        <SideBarButton
          isSelected={selectedButton === 'command'}
          onClick={() => handleButtonClick('command')}
          type='command'
          altText="Command"
        />
        <SideBarButton
          isSelected={selectedButton === 'cube'}
          onClick={() => handleButtonClick('cube')}
          type='cube'
          altText="Cube"
        />
        <button className="p-1 md:p-3 rounded-full bg-[#E1FF67] hover:bg-lime-300">
          <img src={ImgPlus} alt="Plus" />
        </button>
      </div>
      <div className='flex flex-row items-center md:flex-col md:h-[20%] justify-between shadow-gray-500 shadow-md md:mb-4 rounded-full w-fit'>
        <button className='flex justify-center items-center p-3 md:p-6'>
          <img src={ImgArrow} alt='Arrow' className='w-[20px] h-[20px]'></img>
        </button>
        <img src={ImgAvatar} alt='Avatar' className='cursor-pointer w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] md:w-fit md:h-auto'></img>
      </div>
    </div>
  );
};

export default LeftSideBar;
