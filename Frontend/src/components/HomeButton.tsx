import { Link } from "react-router-dom";
import HomeIcon from "assets/img/Home.png";
import HomeGif from 'assets/icon-home.gif';
import { useState } from 'react';

function HomeButton() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link to='/' 
            className="bg-[#E1FF67] flex items-center px-2 xl:px-4 rounded-[15px] shadow-md"
            title="Home"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={isHovered ? HomeGif : HomeIcon}  alt="Home Icon" className="h-[30px] w-[30px]"></img>
        </Link>
    )
}

export default HomeButton;