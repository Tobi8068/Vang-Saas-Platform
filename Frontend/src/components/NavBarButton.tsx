interface NavBarButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

function NavBarButton( { text, isSelected, onClick } : NavBarButtonProps) {
    return (
        <div className={`cursor-pointer font-bold ${isSelected ? 'bg-[#E1FF67]' : 'bg-white'} font-[helvetica] w-28 sm:w-44 md:w-52 lg:w-36 xl:w-44 2xl:w-52 py-3 rounded-[15px] shadow-md`} onClick={onClick}>
            {text}
        </div>
    )
}

export default NavBarButton;