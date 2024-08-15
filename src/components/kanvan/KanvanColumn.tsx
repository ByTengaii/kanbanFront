import React from 'react';
import { addSquareIcon } from '../../assets';
import { observer } from 'mobx-react-lite';
import { KanvanBoard } from '../../models/KanvanBoardModels';


interface KanvanColumnProps {
    title: 'To Do' | 'In Progress' | 'Done';
    cardNumber: number;
    Kanvan: KanvanBoard;
    children?: React.ReactNode;
}
const KanvanColumn: React.FC<KanvanColumnProps> = observer(({
    title,
    cardNumber,
    Kanvan,
    children
}) => {
    const theme = title === 'To Do' ? '#5030E5' : title === 'In Progress' ? '#FFA500' : '#8BC48A';
    return (
        <div id=' column'
            className='
        flex
        flex-col
        px-5
        pt-5
        bg-background-gray
        rounded-t-lg
        min-h-full
        h-fit
        w-full
        '>
            <div id='header'
            style={{borderColor: theme}}
            className={`
            flex
            items-center
            pb-5
            border-b-2
            `}>
                <div id='circle'
                style={{backgroundColor: theme}}
                className={`
                w-2
                h-2
                rounded-lg
                mr-2
              `} />
                <p id='title-text'
                    className='text-text-active font-normal text-lg'>
                    {title}
                </p>
                <p id='number-of-card'
                className='
                bg-[#E0E0E0]
                text-[#625F6D]
                text-sm
                font-medium
                w-5
                h-5
                rounded-lg
                ml-3'>
                    {cardNumber}
                </p>
                {/** Add Square Icon For To Do */}
                {title === 'To Do' && (
                    <div id='add-square'
                    onClick={(e) => {
                        e.preventDefault()
                        Kanvan.modalStatus= true;
                        console.log('Add Square Clicked:', Kanvan.modalStatus)
                    }}
                        className='
                        flex
                        items-center
                        justify-center
                        ml-auto
                        cursor-pointer
                        bg-red-600
                        z-10
                    '>
                        {addSquareIcon(24,theme)}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
});

export default KanvanColumn;