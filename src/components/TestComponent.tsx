import React from 'react';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
} from '../assets/avatars/index';



interface testProps {
}

const TestComponent: React.FC<testProps> = ({
}) => {
    return (
        <div className='flex flex-col'>
            <h1>Test Componenent</h1>
            <div className='flex '>
                <img src={avatar1} alt="" className='w-[35px] h-[35px] rounded-2xl border border-white' />
                <img src={avatar2} alt="" className='w-[35px] h-[35px] rounded-2xl border border-white -ml-2' />
                <img src={avatar3} alt="" className='w-[35px] h-[35px] rounded-2xl border border-white -ml-2' />
                <img src={avatar4} alt="" className='w-[35px] h-[35px] rounded-2xl border border-white -ml-2' />
                <div className='flex items-center justify-center bg-[#F4D7DA] w-[35px] h-[35px] rounded-2xl border border-white -ml-2'>
                    <span className='text-[#D25B68]'>+2</span>
                </div>
            </div>

        </div>
    );
}

export default TestComponent;

