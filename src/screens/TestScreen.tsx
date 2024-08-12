import React from 'react';
import { NavbarComponent } from '../components';
import { Outlet } from 'react-router-dom';

const TestScreen: React.FC<any> = () => {

    return (
        <>
        <div className='
        flex
        w-full
        '>
            <NavbarComponent/>
            <div className='
            w-[calc(100vw-15.66rem)]
            h-[100vh]'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default TestScreen;