import SearchIcon from "assets/img/search.png";
import { useState } from "react";

function NavSearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={`rounded-[20px] bg-white flex py-6 lg:py-3 items-center h-[77px] justify-between shadow-md w-full ${isFocused ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}>
            <input className="text-2xl font-normal focus:outline-none placeholder:font-medium px-8 rounded-[15px] w-11/12 h-full"
                placeholder="Search here..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}>
            </input>
            <img src={SearchIcon} alt="Search Icon" className="mr-7 w-[25px] h-[25px]"></img>
        </div>
    )
}

export default NavSearchBar;