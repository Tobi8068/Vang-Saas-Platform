import SearchIcon from "assets/img/search.png";

function NavSearchBar(){
    return (
        <div className="rounded-[15px] flex items-center justify-between px-8 shadow-md w-7/12">
            <input className="focus:outline-none placeholder:italic placeholder:font-medium w-11/12" placeholder="I'm looking for..."></input>
            <img src={SearchIcon} alt="Search Icon" className="w-[25px] h-[25px]"></img>
        </div>
    )
}

export default NavSearchBar;