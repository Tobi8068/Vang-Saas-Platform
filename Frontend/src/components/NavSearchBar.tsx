import SearchIcon from "assets/img/search.png";
import { useState } from "react";

function NavSearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={`rounded-[15px] flex items-center justify-between  shadow-md w-7/12 ${isFocused ? 'border-2 border-blue-500' : 'border-transparent'}`}>
            <input className="focus:outline-none placeholder:italic placeholder:font-medium px-8 rounded-[15px] w-11/12 h-full" 
                placeholder="I'm looking for..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}>
            </input>
            <img src={SearchIcon} alt="Search Icon" className="mr-7 w-[25px] h-[25px]"></img>
        </div>
    )
}

export default NavSearchBar;