import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Popover} from "../../../lib";


const PopoverBase:React.FC = () => {
  const code = `<Button>普通按钮</Button>
<Button types="glory">边框按钮</Button>
<Button types="primary">蓝色主题</Button>
<Button types="link" href={"https://tingcygf.gitee.io/ting-ui-vue3/#/"}>连接按钮</Button>`

  return (
    <CodeBox
      className="ButtonBase"
      title="基础使用"
      description={<p><code>types</code>属性定义按键样式</p>}
      defaultVisible={true}
      code={code}>
      <Popover position="top" trigger="hover" content="这里添加一段话">
        <Button>向上提示</Button>
      </Popover>
    </CodeBox>
  )
}

export {PopoverBase};