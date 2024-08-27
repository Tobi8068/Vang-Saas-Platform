import { useState } from 'react';
import { IconCMS, IconCRM, IconERP } from './Icons';

interface SideBarButtonProps {
    isSelected: boolean;
    onClick: () => void;
    type: 'stack' | 'command' | 'cube';
    altText: string;
}

function SideBarButton({ isSelected, onClick, type, altText }: SideBarButtonProps) {
    const [showText, setShowText] = useState(false);

    const getIcon = () => {
        switch (type) {
            case 'stack':
                return <IconCRM color={isSelected ? 'white' : 'black'} />;
            case 'command':
                return <IconERP color={isSelected ? 'white' : 'black'} />;
            case 'cube':
                return <IconCMS color={isSelected ? 'white' : 'black'} />;
        }
    };

    const getLabel = () => {
        switch (type) {
            case 'stack':
                return 'CRM';
            case 'command':
                return 'ERP';
            case 'cube':
                return 'CMS';
        }
    };

    const getClassName = () => {
        const baseClassName = 'p-1 sm:p-3 rounded-full hover:cursor-pointer';
        const hoverClassName = isSelected ? 'bg-black hover:bg-gray-800' : 'hover:bg-gray-100';
        const expandClassName = isSelected ? 'hover:w-[152px] hover:self-start' : '';
        return `${baseClassName} ${hoverClassName} ${expandClassName} duration-300`;
    };

    return (
        <div
            className={getClassName()}
            onClick={onClick}
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            <div className='flex items-center justify-between relative text-white text-[24px] font-bold w-full h-full'>
                {getIcon()}
                <div className={`flex items-center justify-center w-[60%] ${isSelected && showText ? "block" : 'hidden'}`}>
                    <span>{getLabel()}</span>
                </div>
            </div>
        </div>
    );
};

export default SideBarButton;