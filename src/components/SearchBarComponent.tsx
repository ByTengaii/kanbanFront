import React from 'react';
import {searchIcon } from './../assets/index';


const SearchBarComponent: React.FC<any> = () => {

    return (
        <div 
        className='
         flex 
         align-middle
         justify-center
         w-[26.06rem]
         h-[2.75rem]
         bg-[#F5F5F5]
         rounded-lg
         p-2
        '>
            <div
                className='
            flex
            align-middle
            mr-2
            '>
                {searchIcon()}
            </div>
            <input type="text" placeholder='Search for anything...'
                className='
             w-full
             border-none
             outline-none
             bg-transparent
             text-[#787486]
             font-sans
             font-normal
             text-sm
             px-1
            '/>
        </div>
    );
}

export default SearchBarComponent;