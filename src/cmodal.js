import React from 'react';

const MyModal = ({ onClose, message }) => {
    console.log(message)
  return (
    <div className="Cmodal_chang">
        <div className="modal">
            <div className="modal_bar"> 
                <div className="modal_buttons" onClick={onClose}>
                    <div className="button red"> </div>
                    <div className="button yellow"></div>
                    <div className="button green"></div>
                </div>
            </div>
            <div className="contents">
                <br/>{message}
            </div>
        </div>
    </div>
  );
};

export default MyModal;
