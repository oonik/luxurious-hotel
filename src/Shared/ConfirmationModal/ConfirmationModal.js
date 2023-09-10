import React from 'react';

const ConfirmationModal = ({title, description, handleDelete}) => {
    return (
        <div className='w-auto sm:modal-middle'>
            <input type="checkbox" id="confirmation_modal" className="modal-toggle" />
            <div className="modal sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                        <label onClick={handleDelete} htmlFor="confirmation_modal" className="btn btn-warning">Yes</label>
                        <label htmlFor="confirmation_modal" className="btn bg-black text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;