import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Dialog} from "../../../lib";

const DialogMark:React.FC = () => {
  const code = `  <Button types='primary' onClick={() => {setVisible(true)}}>弹出对话框</Button>
<Dialog visible={visible}
        closeOnClickMask={false}
        onClose={() => {setVisible(false)}}
        title="提示标题">
  <p>弹出内容</p>
</Dialog>`

  const [visible, setVisible] = useState(false)
  return (
    <CodeBox
      className="DialogBase"
      title="禁点遮罩背景"
      description={<p>
        <code>closeOnClickMask</code>属性决定<code>Dialog</code>组件显示后
        点击遮罩背景无法触发<code>onClose</code>
      </p>}
      defaultVisible={false}
      code={code}>

      <Button types='primary' onClick={() => {
        setVisible(true)
      }}>弹出对话框</Button>
      <Dialog visible={visible}
              closeOnClickMask={false}
              onClose={() => {setVisible(false)}}
              title="提示标题">
        <p>弹出内容</p>
      </Dialog>

    </CodeBox>
  )
}

export { DialogMark };