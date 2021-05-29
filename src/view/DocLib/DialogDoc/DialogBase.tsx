import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Dialog} from "../../../lib";

const DialogBase:React.FC = () => {
  const code = `<Button>普通按钮</Button>
<Button types="glory">边框按钮</Button>
<Button types="primary">蓝色主题</Button>
<Button types="link" href={"https://tingcygf.gitee.io/ting-ui-vue3/#/"}>连接按钮</Button>`

  const [visible, setVisible] = useState(false)
  return (
    <CodeBox
      className="DialogBase"
      title="基础使用"
      description={<p><code>types</code>属性定义按键样式</p>}
      defaultVisible={true}
      code={code}>
      <Button types='primary' onClick={() => {
        setVisible(true)
      }}>弹出内容</Button>
      <Dialog visible={visible} onClose={() => {setVisible(false)}}
      title="提示标题"

      >
        提示内容
      </Dialog>
    </CodeBox>
  )
}

export { DialogBase };