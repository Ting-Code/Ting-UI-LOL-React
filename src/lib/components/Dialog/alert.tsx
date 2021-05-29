import ReactDOM from "react-dom";
import React from "react";
import {Dialog} from "./Dialog";

interface content {
  children: string
  title: string
}

const alert = (content: content) => {
  const component = <Dialog visible={true}
                            title={content.title}
                            onClose={() => {
    ReactDOM.render(React.cloneElement(component, {
      visible: false
    }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>
    {content.children}
  </Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}


export {alert}