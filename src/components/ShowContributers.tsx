import React from 'react';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
} from '../assets/avatars/index';

const ShowContributersComponent: React.FC<any> = ({
}) => {
    return (
        <div className='flex'>
            <img src={avatar1} alt="" className='w-[38px] h-[38px] rounded-2xl border border-white' />
            <img src={avatar2} alt="" className='w-[38px] h-[38px] rounded-2xl border border-white -ml-2' />
            <img src={avatar3} alt="" className='w-[38px] h-[38px] rounded-2xl border border-white -ml-2' />
            <img src={avatar4} alt="" className='w-[38px] h-[38px] rounded-2xl border border-white -ml-2' />
            <div className='flex items-center justify-center bg-[#F4D7DA] w-[38px] h-[38px] rounded-2xl border border-white -ml-2'>
                <span className='text-[#D25B68]'>+2</span>
            </div>
        </div>
    );
}

export default ShowContributersComponent;

