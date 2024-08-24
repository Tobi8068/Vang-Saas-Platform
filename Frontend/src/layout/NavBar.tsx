import NavBarButton from "../components/NavBarButton";
import SearchBar from "../components/SearchBar";
import HomeButton from "../components/HomeButton";
import { useState } from "react";

function NavBar () {
    const [selectedButton, setSelectedButton] = useState<string>('');

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="fixed flex justify-between mt-4 w-full">
            <NavBarButton text="Discover" isSelected={ selectedButton === 'Discover' } onClick={() => handleButtonClick('Discover')} ></NavBarButton>
            <NavBarButton text="All Stacks" isSelected={ selectedButton === 'All Stacks' } onClick={() => handleButtonClick('All Stacks')}></NavBarButton>
            <NavBarButton text="My Stack" isSelected={ selectedButton === 'My Stack' } onClick={() => handleButtonClick('My Stack')}></NavBarButton>
            <SearchBar></SearchBar>
            <HomeButton></HomeButton>
        </div>
    )
}

export default NavBar;