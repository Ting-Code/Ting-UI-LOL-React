import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button} from "../../../lib";
import {alert} from "../../../lib";

const DialogAlert:React.FC = () => {
  const code = `import React from "react";
import {Button, alert} from "lib";

const DialogAlert:React.FC = () => {
  return (
      <Button types='primary' onClick={() => {
        alert({title: '对话框标题', children: '对话框内容'})
      }}>弹出对话框</Button>
  )
}`

  return (
    <CodeBox
      className="DialogBase"
      title="调用显示"
      description={<p>
        <code>alert</code>直接调用<code>Dialog</code>组件，
        传入<code>title</code>和<code>children</code>属性
      </p>}
      defaultVisible={false}
      code={code}>

      <Button types='primary' onClick={() => {
        alert({title: '对话框标题', children: '对话框内容'})
      }}>弹出对话框</Button>

    </CodeBox>
  )
}

export { DialogAlert };