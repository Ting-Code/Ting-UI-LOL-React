import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Radio, RadioGroup} from "../../../lib";



const RadioDisabled:React.FC = () => {
  const code = `const [select, setSelect] = useState<number | string>(1)
  return (
      <RadioGroup select={select} onChange={(value) => {
        setSelect(value)
      }}>
        <Radio value={1}>第一项</Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3} disabled>第三项</Radio>
      </RadioGroup>
  )
}`
  const [select, setSelect] = useState<number | string>(1)
  return (
    <CodeBox
      title="禁用选项"
      description={<p><code>disabled</code>属性定义禁用选项</p>}
      defaultVisible={false}
      code={code}>
      <RadioGroup select={select} onChange={(value) => {
        setSelect(value)
      }}>
        <Radio value={1}>第一项</Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3} disabled>第三项</Radio>
      </RadioGroup>

    </CodeBox>
  )
}


export {RadioDisabled};