import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Dialog} from "../../../lib";

const DialogBase:React.FC = () => {
  const code = `  <Button types='primary' onClick={() => {setVisible(true)}}>弹出对话框</Button>
<Dialog visible={visible}
        onClose={() => {setVisible(false)}}
        title="提示标题">
  <p>弹出内容</p>
</Dialog>`

  const [visible, setVisible] = useState(false)
  return (
    <CodeBox
      className="DialogBase"
      title="基础使用"
      description={<p>
        <code>visible</code>属性决定<code>Dialog</code>显示或隐藏，
        点击遮罩或者X都能触发<code>onClose</code>
      </p>}
      defaultVisible={true}
      code={code}>

      <Button types='primary' onClick={() => {
        setVisible(true)
      }}>弹出对话框</Button>
      <Dialog visible={visible}
              onClose={() => {setVisible(false)}}
              title="提示标题">
        <p>弹出内容</p>
      </Dialog>

    </CodeBox>
  )
}

export { DialogBase };