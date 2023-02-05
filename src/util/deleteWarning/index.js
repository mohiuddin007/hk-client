import React, { useImperativeHandle, useState } from 'react'
import Modal from 'react-modal';
import DashCard from '../Card';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '155px',
        padding: '0px'
    },
};

function DeleteWarning({ action }, ref) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    useImperativeHandle(ref, () => ({
        makeAlert(id) {
            setDeleteId(id);
            setIsOpen(true);
        }

    }));

    const handelCancel = () => {
        setDeleteId('');
        setIsOpen(false)
    }
    const handleDelete = () => {
        action(deleteId)
        setTimeout(() => {
            setIsOpen(false)
        }, 1000)
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <DashCard title={'are you sure, want to delete this item?'}>
                    <button onClick={handelCancel} className='btn btn-info m-3'>cancel</button>
                    <button className='btn btn-danger m-3' onClick={handleDelete}>delete</button>
                </DashCard>
            </Modal>
        </div>
    )
}
export default React.forwardRef(DeleteWarning);

// export default DeleteWarning
