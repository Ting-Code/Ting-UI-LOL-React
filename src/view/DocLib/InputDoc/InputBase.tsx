import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import Input from "../../../lib/components/Input/Input";

const InputBase:React.FC = () => {
  const code = `const [value, setValue] = useState('可修改内容')
  return (
    <div>
      <Input placeholder="请输入"/>
      <Input value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
      <Input value="禁用状态" disabled/>
    </div>
  )
}`;

  const [value, setValue] = useState('修改内容')
  return (
    <CodeBox
      title="基础使用"
      description={<p><code>value</code>属性为输入内容，<code>onChange</code>回调返回事件信息</p>}
      defaultVisible={true}
      code={code}
    >
      <div className={"InputBase"}>
        <Input placeholder="请输入"/>
        <Input value={value} onChange={(e) => {
          setValue(e.target.value)
        }}/>
        <Input value="禁用状态" disabled/>
      </div>
    </CodeBox>
  )
};


export {InputBase};