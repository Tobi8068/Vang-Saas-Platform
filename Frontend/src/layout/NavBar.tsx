import NavBarButton from "../component/NavBarButton";
import NavSearchBar from "../component/NavSearchBar";
import HomeButton from "../component/HomeButton";
import { useState } from "react";

function NavBar () {
    const [selectedButton, setSelectedButton] = useState<string>('');

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="fixed flex justify-between mt-4 w-11/12">
            <NavBarButton text="Discover" isSelected={ selectedButton === 'Discover' } onClick={() => handleButtonClick('Discover')} ></NavBarButton>
            <NavBarButton text="All Stacks" isSelected={ selectedButton === 'All Stacks' } onClick={() => handleButtonClick('All Stacks')}></NavBarButton>
            <NavBarButton text="My Stack" isSelected={ selectedButton === 'My Stack' } onClick={() => handleButtonClick('My Stack')}></NavBarButton>
            <NavSearchBar></NavSearchBar>
            <HomeButton></HomeButton>
        </div>
    )
}

export default NavBar;