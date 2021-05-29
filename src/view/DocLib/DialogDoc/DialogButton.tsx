import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Dialog} from "../../../lib";

const DialogButton:React.FC = () => {
const code = `<Button types='primary' onClick={() => {setVisible(true)}}>
  弹出对话框
</Button>
<Dialog visible={visible}
        onClose={() => {setVisible(false)}}
        title="提示标题"
        buttons={[
          <Button size="sm" onClick={() => {
            setVisible(false)
            console.log('确定')
          }}>确定</Button>,
          <Button size="sm" onClick={() => {
            setVisible(false)
            console.log('取消')
          }}>取消</Button>
        ]}
>
  <p>弹出内容</p>
</Dialog>`

  const [visible, setVisible] = useState(false)
  return (
    <CodeBox
      className="DialogBase"
      title="自定义按键"
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
              onClose={() => {setVisible(false)}}
              title="提示标题"
              buttons={[
                <Button size="sm" onClick={() => {
                  setVisible(false)
                  console.log('确定')
                }}>确定</Button>,
                <Button size="sm" onClick={() => {
                  setVisible(false)
                  console.log('取消')
                }}>取消</Button>
              ]}
      >
        <p>弹出内容</p>
      </Dialog>

    </CodeBox>
  )
}

export { DialogButton };