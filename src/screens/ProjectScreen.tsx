import React, { useState } from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from 'react-beautiful-dnd';
import {
    DropdownButton,
    SearchBarComponent,
    ShowContributersComponent,
    KanvanColumn,
    KanvanCard
} from '../components';
import {
    addSquareIcon,
    arrowDownIcon,
    bellIcon,
    calendarIcon,
    calendarNumberIcon,
    editIcon,
    filterIcon,
    homeIcon,
    linkIcon,
    membersIcon,
    messageIcon,
    pauseLinearIcon
} from '../assets';

import { MockupData, KanvanBoard } from '../models/KanvanBoardModels';



const mockupData = [
    {
        id: 1,
        title: 'Brainstorming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Low'
    },
    {
        id: 2,
        title: 'Cheating',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Medium'
    },
    {
        id: 3,
        title: 'Laugh-Storming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'High'
    }
] as MockupData[];

const mockupData2 = [
    {
        id: 4,
        title: 'Brainstorming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Low'
    },
    {
        id: 5,
        title: 'Cheating',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Medium'
    },
    {
        id: 6,
        title: 'Laugh-Storming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'High'
    }
] as MockupData[];

const mockupData3 = [
    {
        id: 7,
        title: 'Brainstorming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Low'
    },
    {
        id: 8,
        title: 'Cheating',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'Medium'
    },
    {
        id: 9,
        title: 'Laugh-Storming',
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: 'High'
    }
] as MockupData[];

const Kanvan = new KanvanBoard(mockupData, mockupData2, mockupData3);

const ProjectScreen: React.FC<any> = () => {
    /*const [todoSection, setTodoSection] = useState(mockupData);
    const [inProgressSection, setInProgressSection] = useState(mockupData2 as MockupData[]);
    const [doneSection, setDoneSection] = useState(mockupData3 as MockupData[]);

    const handleOnDragEnd = (result: DropResult) => {
        console.log(result);
        if (!result.destination) return;
        // If the item is dropped in the same column
        if (result.destination.droppableId === result.source.droppableId) {
            switch (result.destination.droppableId) {
                case 'todo': {
                    const items = Array.from(todoSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    items.splice(result.destination.index, 0, reorderedItem);
                    setTodoSection(items);
                    break;
                } case 'inprogress': {
                    const items = Array.from(inProgressSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    items.splice(result.destination.index, 0, reorderedItem);
                    setInProgressSection(items);
                    break;
                }
                case 'done': {
                    const items = Array.from(doneSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    items.splice(result.destination.index, 0, reorderedItem);
                    setDoneSection(items);
                    break;
                }
            }
        } else {
            // If the item is dropped in a different column
            switch (result.source.droppableId) {
                case 'todo': {
                    const items = Array.from(todoSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    setTodoSection(items);
                    switch (result.destination.droppableId) {
                        case 'inprogress': {
                            const items = Array.from(inProgressSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setInProgressSection(items);
                            break;
                        }
                        case 'done': {
                            const items = Array.from(doneSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setDoneSection(items);
                            break;
                        }
                    }
                    break;
                }
                case 'inprogress': {
                    const items = Array.from(inProgressSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    setInProgressSection(items);
                    switch (result.destination.droppableId) {
                        case 'todo': {
                            const items = Array.from(todoSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setTodoSection(items);
                            break;
                        }
                        case 'done': {
                            const items = Array.from(doneSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setDoneSection(items);
                            break;
                        }
                    }
                    break;
                }
                case 'done': {
                    const items = Array.from(doneSection);
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    setDoneSection(items);
                    switch (result.destination.droppableId) {
                        case 'todo': {
                            const items = Array.from(todoSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setTodoSection(items);
                            break;
                        }
                        case 'inprogress': {
                            const items = Array.from(inProgressSection);
                            items.splice(result.destination.index, 0, reorderedItem);
                            setInProgressSection(items);
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }*/

    return (
        <div id='container'
            className='
        flex
        flex-col
        w-full
        h-[100vh]
        '>
            <div id='top'
                className='
            flex
            justify-between
            border-b-2
            py-6
            px-6
            max-h-[5.85rem]
            '>
                <SearchBarComponent />
                <div id='top-right'
                    className='
                flex
                items-center
                gap-x-5
                '>
                    <div id='icons'
                        className='
                    flex
                    items-center
                    gap-x-6
                    '>
                        {calendarIcon()}
                        {messageIcon()}
                        {bellIcon()}
                    </div>
                    <div id='userInfo'>
                        <p className='font-normal text-text-active text-right text-base'>Gürkan AĞIR</p>
                        <p className='font-normal text-sm text-text-passive'>P.O, Türkiye</p>
                    </div>
                    {arrowDownIcon()}
                </div>
            </div>
            <div id='content-wrapper' className='
            px-6
            flex
            flex-col
            gap-y-10
            max-w-full
            h-[calc(100vh-5.85rem)]'>
                <div id='header-section'
                    className='flex flex-col gap-y-10'>
                    <div id='header-content'
                        className='
                    flex
                    items-center
                    justify-between
                    pt-8'>
                        <div id='title-section'
                            className='
                            flex
                            items-center
                            gap-x-4'>
                            <h1 className='text-5xl font-bold text-text-active'>Mobile App</h1>
                            <div className=''>
                                {editIcon()}
                            </div>
                            <div className='bg-[#5030E5] bg-opacity-20  w-[1.7rem] h-[1.7rem] rounded-lg flex items-center justify-center'>
                                {linkIcon()}
                            </div>
                        </div>
                        <div id='users'
                            className='
                        flex
                        items-center
                        gap-x-2
                        '>
                            {addSquareIcon(16, '#5030E5')}
                            <p className='text-company-purple font-medium text-lg'>Invite</p>
                            <ShowContributersComponent />
                        </div>

                    </div>
                    <div id='buttons'
                        className='flex justify-between'>
                        <div id='left-buttons'
                            className='
                        flex
                        gap-x-3
                        '>
                            <DropdownButton title='Filter' icon={filterIcon} />
                            <DropdownButton title='Today' icon={calendarNumberIcon} />
                            <div id='buttons'
                                className='
                        flex
                        '>
                            </div>
                        </div>
                        <div id='right-buttons'
                            className='
                        flex
                        gap-x-5
                        items-center
                        '>
                            <DropdownButton title='Share' icon={membersIcon} />
                            <div id='line'
                                className='
                            h-7
                            w-[1px]
                            bg-text-passive
                            '/>
                            <div id='pauseButton'
                                className='
                            bg-company-purple
                            w-10
                            h-10
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            '>
                                {pauseLinearIcon()}
                            </div>
                            {homeIcon()}
                        </div>

                    </div>
                </div>
                <div id='kanvan-section'
                    className='
                flex
                w-full
                h-full
                justify-between          
                '>
                    <DragDropContext onDragEnd={Kanvan.moveItem}>
                        <Droppable droppableId='todo'>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='w-[calc(33.33%-0.7rem)] h-full overflow-y-auto'>
                                    <KanvanColumn title='To Do'>
                                        {Kanvan.getTodos().map((item, index) => {
                                            return (
                                                <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <KanvanCard title={item.title} description={item.description} priority={item.priority} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                    </KanvanColumn>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId='inprogress'>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='w-[calc(33.33%-0.7rem)] h-full overflow-y-auto'>
                                    <KanvanColumn title='In Progress'>
                                        {Kanvan.getInProgress().map((item, index) => {
                                            return (
                                                <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <KanvanCard title={item.title} description={item.description} priority={item.priority} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                    </KanvanColumn>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId='done'>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='w-[calc(33.33%-0.7rem)] h-full'>
                                    <KanvanColumn title='Done'>
                                        {Kanvan.getDones().map((item, index) => {
                                            return (
                                                <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <KanvanCard title={item.title} description={item.description} priority={item.priority} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                    </KanvanColumn>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>

        </div>
    );
}

export default ProjectScreen;