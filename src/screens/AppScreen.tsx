import React from 'react';
import { NavBarComponent } from '../components';
import { Outlet } from 'react-router-dom';

const AppScreen: React.FC<any> = () => {

    return (
        <>
        <div className='
        flex
        w-full
        '>
            <NavBarComponent/>
            <div className='
            max-w-[calc(100vw-15.66rem)]
            w-[calc(100vw-15.66rem)]
            h-[100vh]'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default AppScreen;