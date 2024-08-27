
import SideBarButton from 'components/SideBarButton';
import ImgArrow from 'assets/svg/arrow-icon.svg';
import ImgAvatar from 'assets/img/Avatar.png';
import { IconPlus } from 'components/Icons';

import { useState } from 'react';

function LeftSideBar() {

  const [selectedButton, setSelectedButton] = useState<string>('stack');
  const [plusButtonHover, setPlusButtonHover] = useState(false);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className='flex flex-row md:flex-col justify-between md:h-full z-10 w-full md:w-fit sticky top-2'>
      <div className="flex flex-row md:flex-col gap-6 sm:gap-12 md:gap-4 items-center justify-end bg-white shadow-gray-500 shadow-md md:mt-20 rounded-full w-fit md:w-[66px] h-fit">
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
        <button className="p-1 sm:p-3 rounded-full bg-[#E1FF67] hover:bg-black" 
          onMouseEnter={() => setPlusButtonHover(true)}
          onMouseLeave={() => setPlusButtonHover(false)}
          >
          <IconPlus color={plusButtonHover ? 'white' : '#1e1e1e'}></IconPlus>
        </button>
      </div>
      <div className='flex flex-row items-center gap-3 md:gap-0 md:flex-col h-fit justify-between shadow-gray-500 shadow-md md:mb-4 rounded-full w-fit'>
        <button className='flex justify-center items-center p-3 md:p-6'>
          <img src={ImgArrow} alt='Arrow' className='w-[20px] h-[20px]'></img>
        </button>
        <img src={ImgAvatar} alt='Avatar' className='cursor-pointer w-[50px] h-[50px] sm:w-[66px] sm:h-[66px]'></img>
      </div>
    </div>
  );
};

export default LeftSideBar;
