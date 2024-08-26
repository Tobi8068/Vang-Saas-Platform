import NavBarButton from "../components/NavBarButton";
import NavSearchBar from "../components/NavSearchBar";
import HomeButton from "../components/HomeButton";
import { useState } from "react";

function NavBar () {
    const [selectedButton, setSelectedButton] = useState<string>('');

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="fixed flex justify-between mt-4 w-11/12">
            <NavBarButton text="Design" isSelected={ selectedButton === 'Discover' } onClick={() => handleButtonClick('Discover')} ></NavBarButton>
            <NavBarButton text="Discover" isSelected={ selectedButton === 'All Stacks' } onClick={() => handleButtonClick('All Stacks')}></NavBarButton>
            <NavBarButton text="Analytics" isSelected={ selectedButton === 'My Stack' } onClick={() => handleButtonClick('My Stack')}></NavBarButton>
            <NavSearchBar></NavSearchBar>
            <HomeButton></HomeButton>
        </div>
    )
}

export default NavBar;