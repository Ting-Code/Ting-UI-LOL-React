import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button} from "../../../lib";
import {confirm} from "../../../lib";

const DialogConfirm:React.FC = () => {
  const code = `import React from "react";
import {Button, confirm} from "lib";

const DialogConfirm:React.FC = () => {
  return (
      <Button types='primary' onClick={() => {
        confirm(
          {title: '对话框标题', children: '对话框内容'},
          () => {console.log('确定')},
          () => {console.log('取消')}
          )
      }}>弹出对话框</Button>
  )
}`

  return (
    <CodeBox
      className="DialogBase"
      title="调用自带按钮"
      description={<p>
        <code>confirm</code>直接调用<code>Dialog</code>组件自带按钮，
        第一个参数传入<code>title</code>和<code>children</code>属性，
        第二个可选参数为点击确定回调函数，第三个可选参数为点击取消回调函数
      </p>}
      defaultVisible={false}
      code={code}>

      <Button types='primary' onClick={() => {
        confirm(
          {title: '对话框标题', children: '对话框内容'},
          () => {console.log('确定')},
          () => {console.log('取消')}
          )
      }}>弹出对话框</Button>

    </CodeBox>
  )
}

export { DialogConfirm };