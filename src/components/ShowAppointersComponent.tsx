import React from 'react';
import {
    avatar1,
    avatar2,
} from '../assets/avatars/index';

const ShowAppointersComponent: React.FC<any> = ({
}) => {
    return (
        <div className='flex'>
            <img src={avatar1} alt="" className='w-6 h-6 rounded-3xl border border-white z-30' />
            <img src={avatar2} alt="" className='w-6 h-6 rounded-3xl border border-white -ml-2 z-20' />
            <div className=' w-6 h-6 rounded-3xl flex items-center justify-center bg-[#F4D7DA]  border border-white -ml-2 '>
                <span className='text-[#D25B68] text-xs '>+2</span>
            </div>
        </div>
    );
}

export default ShowAppointersComponent;

