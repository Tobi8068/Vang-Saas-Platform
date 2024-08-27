interface NavBarButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

function NavBarButton( { text, isSelected, onClick } : NavBarButtonProps) {
    return (
        <div className={`cursor-pointer text-lg font-bold 
            ${isSelected ? 'bg-[#1E1E1E]' : 'bg-white'}
            ${isSelected ? 'text-white' : 'text-[#1E1E1E]'} 
            ${isSelected ? 'hover:bg-[#1E1E1E]' : 'hover:bg-[#E1FF67]'}
            font-[helvetica] w-[90%] py-3
            rounded-[15px] shadow-gray-300 shadow-md`} onClick={onClick} title={text}>
            {text}
        </div>
    )
}

export default NavBarButton;