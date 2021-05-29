import React from "react";
import ReactDOM from "react-dom";
import {Dialog} from "./Dialog";
import {Button} from "../Button/Button";

interface content {
  children: string
  title: string
}

const confirm = (content: content, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    yes && yes()
  }
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    no && no()
  }
  const component = (
    <Dialog
      title={content.title}
      visible={true} onClose={() => { onNo()}}
      buttons={[
        <Button size='sm' onClick={onYes}>确定</Button>,
        <Button size='sm' onClick={onNo}> 取消</Button>
      ]}
    >
      {content.children}
    </Dialog>)
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

export {confirm}