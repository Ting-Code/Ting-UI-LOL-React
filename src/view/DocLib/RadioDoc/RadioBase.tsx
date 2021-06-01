import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Radio, RadioGroup} from "../../../lib";



const RadioBase:React.FC = () => {
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

      <RadioGroup>
        <Radio value={1}>Radio</Radio>
        <Radio value={2}>Radio</Radio>
        <Radio value={3}>Radio</Radio>
      </RadioGroup>

    </CodeBox>
  )
}


export {RadioBase};