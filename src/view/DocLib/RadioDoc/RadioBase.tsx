import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Radio, RadioGroup} from "../../../lib";



const RadioBase:React.FC = () => {
  const code = `const [select, setSelect] = useState<number | string>(1)
  return (
      <RadioGroup select={select} onChange={(value) => {
        setSelect(value)
      }}>
        <Radio value={1}>符文页</Radio>
        <Radio value={2}>道具包</Radio>
        <Radio value={3}>表情</Radio>
      </RadioGroup>
  )
}`
  const [select, setSelect] = useState<number | string>(1)
  return (
    <CodeBox
      title="基础使用"
      description={<p><code>value</code>属性定义标识，<code>select</code>选中的<code>value</code>，<code>onChange</code>函数可获取选中的<code>value</code></p>}
      defaultVisible={true}
      code={code}>
      <RadioGroup select={select} onChange={(value) => {
        setSelect(value)
      }}>
        <Radio value={1}>第一项</Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3}>第三项</Radio>
      </RadioGroup>

    </CodeBox>
  )
}


export {RadioBase};