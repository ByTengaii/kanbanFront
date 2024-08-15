import React from 'react';
import { arrowDownIcon } from '../../assets';

interface dropDownProps {
    title: string;
    icon:  (size?:number, color?:string) => JSX.Element;
    onClick?: any;
}
const DropdownButton: React.FC<dropDownProps> = ({
    title,
    icon,
    onClick
}) => {
    return (
        <div id='container'
            className='
            flex
            items-center
            justify-between
            w-[7.63rem]
            border
            border-text-passive
            rounded-lg
            px-4
            py-3
            '
            onClick={onClick}>
            <div id='content'
                className='
                flex
                gap-x-1
                items-center
                '>
                {icon(16)}
                <p className='text-text-passive font-medium text-base'>{title}</p>
            </div>
            {arrowDownIcon()}
        </div>
    );
}

export default DropdownButton;

