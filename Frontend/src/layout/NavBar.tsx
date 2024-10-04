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
        <div className="p-6 flex flex-row justify-between">
            <div className=' flex flex-row gap-6'>
                <Link to='/discover' className=''><NavBarButton text="Discover" isSelected={selectedButton === 'Discover'} onClick={() => handleButtonClick('Discover')} ></NavBarButton></Link>
                <Link to='/mystack' className=''><NavBarButton text="My Stack" isSelected={selectedButton === 'My Stack'} onClick={() => handleButtonClick('My Stack')} ></NavBarButton></Link>
                <Link to='/analytics' className=''><NavBarButton text="Analytics" isSelected={selectedButton === 'Analytics'} onClick={() => handleButtonClick('Analytics')} ></NavBarButton></Link>
            </div>
            <div className=''>
                <NavSearchBar></NavSearchBar>
            </div>
        </div>
    )
}

export default NavBar;