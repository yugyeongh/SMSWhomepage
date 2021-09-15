import { createPortal } from "react-dom";

function Modal(props) {
  const { message } = props;
  return createPortal(
    <div className="Cmodal_chang">
        <div className="modal">
            <div className="modal_bar"> 
                <div className="modal_buttons">
                    <div className="button red"> </div>
                    <div className="button yellow"></div>
                    <div className="button green"></div>
                </div>
            </div>
            <div className="contents">
                <br/> 뀨
            </div>
        </div>
    </div>
    ,
    document.getElementById("modal")
  );
}

export default Modal;


