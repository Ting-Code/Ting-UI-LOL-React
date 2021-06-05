import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Checkbox} from "../../../lib";
import {CheckboxGroup} from "../../../lib/components/Checkbox/CheckboxGroup";



const CheckboxList:React.FC = () => {
  const code = `const [option, setOption] = useState(['剑圣'])
return (
  <CheckboxGroup
    selectOptions={option}
    onChange={(value) => {
    setOption(value)
  }}>
    <Checkbox value="剑圣">无极剑圣</Checkbox>
    <Checkbox value="女枪">厄运小姐</Checkbox>
    <Checkbox value="石头人">熔岩巨兽</Checkbox>
  </CheckboxGroup>
)`

  const [option, setOption] = useState(['剑圣'])
  return (
    <CodeBox
      title="多个选项"
      description={<p>多个选项被<code>CheckboxGroup</code>包裹，<code>onChange</code>返回选中数组，<code>selectOptions</code>定义选中项</p>}
      defaultVisible={false}
      code={code}>
      <CheckboxGroup
        selectOptions={option}
        onChange={(value) => {
        setOption(value)
      }}>
        <Checkbox value="剑圣">无极剑圣</Checkbox>
        <Checkbox value="女枪">厄运小姐</Checkbox>
        <Checkbox value="石头人">熔岩巨兽</Checkbox>
      </CheckboxGroup>

    </CodeBox>
  )
}



export {CheckboxList};