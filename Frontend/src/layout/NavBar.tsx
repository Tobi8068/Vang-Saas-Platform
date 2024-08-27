import { Link } from 'react-router-dom';
import NavBarButton from "components/NavBarButton";
import NavSearchBar from "components/NavSearchBar";
import HomeButton from "components/HomeButton";

import { useState } from "react";

function NavBar() {

    const [selectedButton, setSelectedButton] = useState<string>('');

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="flex justify-between flex-col lg:flex-row gap-2 lg:gap-1 mt-0 md:mt-6 w-full z-0 sticky top-[87px] md:top-0">
            <div className='flex justify-between w-full lg:w-[41%]'>
                <Link to='/design' className='flex justify-start w-full'><NavBarButton text="Design" isSelected={selectedButton === 'Design'} onClick={() => handleButtonClick('Design')} ></NavBarButton></Link>
                <Link to='/discover' className='flex justify-center w-full'><NavBarButton text="Discover" isSelected={selectedButton === 'Discover'} onClick={() => handleButtonClick('Discover')} ></NavBarButton></Link>
                <Link to='/analytics' className='flex justify-end w-full'><NavBarButton text="Analytics" isSelected={selectedButton === 'Analytics'} onClick={() => handleButtonClick('Analytics')} ></NavBarButton></Link>
            </div>
            <div className='flex justify-between w-full lg:w-[58%] 2xl:[57.5%]'>
                <NavSearchBar></NavSearchBar>
                <HomeButton></HomeButton>
            </div>
        </div>
    )
}

export default NavBar;