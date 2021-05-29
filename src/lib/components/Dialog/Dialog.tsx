import React, {ReactElement} from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import {Button} from "../Button/Button";
import {Transition} from "../Transition/Transition";

interface DialogProps {
  visible: boolean;
  closeOnClickMask?: boolean;
  buttons?: Array<ReactElement>;
  title?: string;
  onClose: React.MouseEventHandler;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {visible, buttons, title, closeOnClickMask, onClose} = props

  const backClasses = classNames('ting-dialog','ting-background-default', {
    'ting-background-button': buttons && buttons !== []
})

  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (closeOnClickMask) {
      onClose(e)
    }
  }

  const showButton = () => {
    if(buttons && buttons !== []){
      return (
        <footer className='ting-dialog-footer'>{
          buttons.map((button, index) => (
             React.cloneElement(button, {key: index})
          ))}
        </footer>
      )
    }
  }
  const dialog =
  <>
    {visible && <div className="ting-dialog-overlay" onClick={onClickMask}/>}
    <Transition className="ting-dialog-transition" in={visible} timeout={300} animation="zoom-in-y" mountOnEnter={true} wrapper>
      <div className={backClasses}>
        <div className='ting-dialog-close' onClick={onClickClose}>
          <Button types='icon' name='error' size='sm'/>
        </div>
        <header className='ting-dialog-header'>{title}</header>
        <main className='ting-dialog-main'>
          <p>{props.children}</p>
        </main>
        {showButton()}
      </div>
    </Transition>
  </>

  return (
    ReactDOM.createPortal(dialog, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: true,
  visible: false,
}

export {Dialog}