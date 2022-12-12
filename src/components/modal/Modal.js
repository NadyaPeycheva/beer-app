import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <button onClick={props.onClick}>Connect Metamask!</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
