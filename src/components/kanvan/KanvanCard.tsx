import React from 'react';
import { ShowAppointersComponent } from '../';
import { fileFolderIcon, messageIcon } from '../../assets';
import { KanvanBoard, MockupData } from '../../models/KanvanBoardModels';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
interface TaskCardProps {
    data: MockupData;
    KanvanBoard: KanvanBoard;
}


const PriorityBrand = (priority: string) => {
    switch (priority) {
        case 'Low':
            return (
                <p
                    className='
                bg-opacity-20
                bg-[#DFA874]
                text-[#D58D49]
                text-[Inter]
                text-xs
                font-medium
                px-2
                py-1
                rounded-md
                '>
                    Low
                </p>
            );
        case 'Medium':
            return (
                <p
                    className='
                bg-opacity-20
                bg-yellow-300
                text-yellow-600
                text-[Inter]
                text-xs
                font-medium
                px-2
                py-1
                rounded-md
                '>
                    Medium
                </p>
            );
        case 'High':
            return (
                <p
                    className='
                bg-opacity-20
                bg-red-300
                text-red-600
                text-[Inter]
                text-xs
                font-medium
                px-2
                py-1
                rounded-md
                '>
                    High
                </p>
            );

    }

}

const InfoItem = ({ icon, text }: { icon: any, text: string }) => {
    return (
        <div className='flex items-center gap-x-1'>
            {icon(16)}
            <p className='text-text-passive text-xs font-medium '>{text}</p>
        </div>
    );
}
const KanvanCard: React.FC<TaskCardProps> = observer(({
    data,
    KanvanBoard
}) => {
    const { id, title, description, priority } = data;
    const handleRemoveItem = () => {
        console.log('Remove Item:', id);
        KanvanBoard.removeItem(id);
    };
    return (
        <div id='container'
            className='
        w-full
        bg-white
        p-5
        mt-5
        rounded-2xl
        flex
        flex-col
        gap-y-4
        shadow-md'>
            <div id='top'
                className='flex  items-center justify-between'>
                {PriorityBrand(priority)}
                <div className=' w-5 h-5 cursor-pointer flex justify-center items-center'
                onClick={(e) => {
                    e.preventDefault();
                    handleRemoveItem();
                }}>
                   <span className='text-text-active font-extrabold'>...</span> 
                </div>
            </div>
            <div id='Content'
                className='flex flex-col gap-y-2 text-left'>
                <h3 className='text-text-active font-semibold font-sans text-lg leading-5'>{title}</h3>
                <p className='text-text-passive  text-xs leading-normal font-normal'>{description}</p>
            </div>
            <div id='footer'
                className='
            flex
            items-center
            gap-x-4
            '>
                <ShowAppointersComponent />
                <InfoItem icon={messageIcon} text='12 comments' />
                <InfoItem icon={fileFolderIcon} text='0 files' />
            </div>
        </div>
    )
});

export default KanvanCard;