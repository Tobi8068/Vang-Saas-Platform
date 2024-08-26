
import ImgPlus from '../assets/svg/Plus.svg';
import SideBarButton from '../components/SideBarButton';

import { useState } from 'react';

function LeftSideBar() {

  const [selectedButton, setSelectedButton] = useState<string>('stack');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-white shadow-lg mt-8 rounded-full">
      <SideBarButton
        isSelected={selectedButton === 'stack'}
        onClick={() => handleButtonClick('stack')}
        type='stack'
        altText="Stacks"
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
      <button className="p-3 rounded-full bg-[#E1FF67] hover:bg-lime-300">
        <img src={ImgPlus} alt="Plus" />
      </button>
    </div>
  );
};

export default LeftSideBar;
