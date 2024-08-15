import React, { useState } from 'react';
import Modal from 'react-modal';
import { KanvanBoard } from '../../models/KanvanBoardModels';


interface AddEquipmentModalProps {
    KanvanBoard: KanvanBoard;
}

const AddTaskModal: React.FC<AddEquipmentModalProps> = ({
    KanvanBoard
}) => {
    return (
        <Modal
            isOpen={KanvanBoard.getIsModalOpen}
            contentLabel="Add Equipment"
            className={' rounded-lg shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white  w-1/4 h-fit p-6 box-border  overflow-y-auto'}
            overlayClassName={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'}
        >   
            <div><h1>Selamke</h1></div>
        </Modal>
    );
}
Modal.setAppElement('#root');

const style = {
    button: ' p-2 rounded-lg text-semibold text-md ',
}
export default AddTaskModal;


