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
        <div className="fixed right-1 flex justify-between mt-4 w-[94%]">
            <Link to='/design'><NavBarButton text="Design" isSelected={selectedButton === 'Discover'} onClick={() => handleButtonClick('Discover')} ></NavBarButton></Link>
            <Link to='/discover'><NavBarButton text="Discover" isSelected={selectedButton === 'All Stacks'} onClick={() => handleButtonClick('All Stacks')} ></NavBarButton></Link>
            <Link to='/analytics'><NavBarButton text="Analytics" isSelected={selectedButton === 'My Stack'} onClick={() => handleButtonClick('My Stack')} ></NavBarButton></Link>
            <NavSearchBar></NavSearchBar>
            <HomeButton></HomeButton>
        </div>
    )
}

export default NavBar;