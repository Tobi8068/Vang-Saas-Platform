import HomeIcon from "assets/img/Home.png";

function HomeButton() {
    return (
        <div className="bg-[#E1FF67] flex items-center px-4 rounded-[15px] shadow-md">
            <img src={HomeIcon} alt="Home Icon" className="h-[30px] w-[30px]"></img>
        </div>
    )
}

export default HomeButton;