import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modal.css";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";

const ModalContainer = (props) => {
  return (
    <Modal
      center
      classNames={{
        modal: "customModal"
      }}
      showCloseIcon={false}
      {...props}
    >
      <div className={"close"} onClick={props.onClose}><CloseSvg /></div>
      <span className={"title"}>{props.title}</span>
      <div>
        {props.children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
