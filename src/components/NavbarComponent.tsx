import React from 'react';
import {
    arrowLeftIcon,
    homeIcon,
    logoIcon,
    messageIcon,
    tasksIcon,
    settingsIcon,
    membersIcon,
    addSquareIcon,
} from './../assets/index';

const menuItems = [
    { name: 'Home', icon: homeIcon() },
    { name: 'Messages', icon: messageIcon() },
    { name: 'Tasks', icon: tasksIcon() },
    { name: 'Members', icon: membersIcon() },
    { name: 'Settings', icon: settingsIcon() },
]


const projectColorScheme = [
    '#7AC555',
    '#FFA500',
    '#E4CCFD',
    '#76A5EA'
];

const projectItems = [
    { name: 'Mobile App', color: projectColorScheme[0], isSelected: true },
    { name: 'Website Redesign', color: projectColorScheme[1], isSelected: false },
    { name: 'Design System', color: projectColorScheme[2], isSelected: false },
    { name: 'Wireframes', color: projectColorScheme[3], isSelected: false },
];


const NavbarComponent: React.FC<any> = () => {

    return (
        <div
            id='container'
            className='
        flex
        flex-col
        w-[15.66rem]
        h-[100vh]
        border-r-2
        '>
            <div id='header'
                className='
            flex
            justify-between
            items-center
            w-full
            px-6
            py-8
            border-b-2
             '>
                <div
                    id='header-left'
                    className='
                flex
                items-center
                '>
                    <div
                        className='
                    mr-2 
                    flex 
                    justify-center 
                    items-center'>
                        {logoIcon()}
                    </div>
                    <p
                        className='
                    text-xl
                    font-semibold
                    '>
                        gagir
                    </p>
                </div>
                <div
                    id='header-right'
                    className='
                flex
                items-center
                align-center
                '>
                    <div className='-mr-3'>
                        {arrowLeftIcon()}
                    </div>
                    <div>
                        {arrowLeftIcon()}
                    </div>
                </div>
            </div>
            <div id='menu'
                className='
            flex
            flex-col
            py-8
            gap-y-5
            mx-6
            border-b-2
            '>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className='
                    flex
                    items-center
                    gap-x-3
                    py-2
                    '>
                        <div
                            className='
                        '>
                            {item.icon}
                        </div>
                        <p
                            className='
                        text-base
                        font-medium
                        text-gray-[#787486]
                        '>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <div id='projects'
                className='
            flex
            flex-col
            py-8
            gap-y-5
            mx-3
            '>
                <div id='projects-header'
                    className='
                    flex
                    items-center
                    justify-between
                    px-4'
                >
                    <p
                        className='
                    text-xs
                    font-bold
                    text-color-[#787486]
                    '>
                        MY PROJECTS
                    </p>
                    {addSquareIcon()}
                </div>
                {projectItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
                        flex
                        items-center
                        gap-x-3
                        py-2
                        px-2
                        rounded-lg
                            ${item.isSelected ? "bg-[#5030E514] bg-opacity-10": ""}
                        `}
                        >
                        <div id='project-color'
                        className='
                        w-2
                        h-2
                        rounded-full
                        '
                            style={{ backgroundColor: item.color }}
                        >
                        </div>
                        <p id='project-text'
                            className={item.isSelected ? 
                                "text-base font-semibold text-color-[#0D062D]" 
                                :"text-base font-medium text-gray-[#787486]"}
                        >
                            {item.name}
                        </p>
                        {item.isSelected ? (<p className='ml-auto'>...</p>) : null}

                    </div>
                ))}
            </div>
            <div id='notification'
            className='
            px-6
            '>
                {
                    //TODO: Add notification component
                }
            </div>
        </div>
    );
}

export default NavbarComponent;

