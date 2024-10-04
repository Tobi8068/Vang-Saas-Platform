interface NavBarButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

function NavBarButton({ text, isSelected, onClick }: NavBarButtonProps) {
    return (
        <div className={`cursor-pointer text-[24px] font-normal w-[166px] h-[77px]
            ${isSelected ? 'bg-white' : 'bg-[#F7C454]'}
            ${isSelected ? 'text-black' : 'text-[#1E1E1E]'} 
            ${isSelected ? 'hover:bg-[#F7C454]' : 'hover:bg-white'}
            font-[helvetica] w-[90%] p-6
            rounded-[20px] shadow-gray-300 shadow-md`} onClick={onClick} title={text}>
            {text}
        </div>
    )
}

export default NavBarButton;