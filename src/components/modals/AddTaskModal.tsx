import React, { useState } from 'react';
import Modal from 'react-modal';
import { KanvanBoard } from '../../models/KanvanBoardModels';
import { observer } from 'mobx-react-lite';


interface AddEquipmentModalProps {
    KanvanBoard: KanvanBoard;
}

const AddTaskModal: React.FC<AddEquipmentModalProps> = observer(({
    KanvanBoard
}) => {
    return (
        <Modal
            isOpen={KanvanBoard.modalStatus}
            contentLabel="Add Equipment"
            className={' rounded-lg shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white  w-1/2 h-[50vh] justify-center p-6 box-border  overflow-y-auto'}
            overlayClassName={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'}
        >
            <h1 className='mb-8'>Add Task Card</h1>
            <label htmlFor="priority"></label>
            <select name="" id="">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <label htmlFor="task-title" className='text-text-active text-lg '>Task Title</label>
            <input type="text" name="task-title" id="task-title" className='border border-gray-300 rounded-xl px-3 py-2 outline-company-purple mb-4' />
            <label htmlFor="task-description" className='text-text-active text-lg '>Task Description</label>
            <input type="text" name="task-description" id="task-description" className='border border-gray-300 rounded-xl px-3 py-2 outline-company-purple mb-4' />
            <div className='flex justify-center '>
                <button type="submit"className='bg-company-purple text-white w-1/3' 
                onClick={()=>{
                    KanvanBoard.addTodo({
                        id: Math.floor(Math.random() * 1000),
                        title: 'Task Title',
                        description: 'Task Description',
                        priority: 'Low'
                    });
                    KanvanBoard.modalStatus = false;
                }}> Add Task</button>
            </div>
        </Modal>
    );
});
Modal.setAppElement('#root');

export default AddTaskModal;


