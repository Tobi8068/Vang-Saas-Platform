import { IconCommand, IconCube, IconStack } from './Icons';

interface SideBarButtonProps {
    isSelected: boolean;
    onClick: () => void;
    type: string;
    altText: string;
}

function SideBarButton({ isSelected, onClick, type, altText }: SideBarButtonProps) {
    return (
        <button
            className={`p-1 md:p-3 rounded-full ${isSelected ? 'bg-black hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            onClick={onClick}
        >
            {type === 'stack' && <IconStack color={isSelected ? 'white' : 'black'} />}
            {type === 'command' && <IconCommand color={isSelected ? 'white' : 'black'} />}
            {type === 'cube' && <IconCube color={isSelected ? 'white' : 'black'} />}
        </button>
    );
};

export default SideBarButton;