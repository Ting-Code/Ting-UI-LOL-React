import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Checkbox} from "../../../lib";



const CheckboxBase:React.FC = () => {
  const code = `const [check, setCheck] = useState(true)
return (
    <>
      <Checkbox value="无极剑圣" checked={check} onChange={(e) => {
        setCheck(e.target.checked)
      }}>无极剑圣</Checkbox>
      <Checkbox value="厄运小姐" checked={false} disabled>厄运小姐</Checkbox>
    </>
  )`

  const [check, setCheck] = useState(true)
  return (
    <CodeBox
      title="基础使用"
      description={<p><code>checked</code>属性确定是否选择，<code>disabled</code>属性禁用选框，点击触发<code>onChange</code>事件</p>}
      defaultVisible={true}
      code={code}>

      <Checkbox value="无极剑圣" checked={check} indeterminate={false} onChange={(e) => {
        setCheck(e.target.checked)
      }}>无极剑圣</Checkbox>
      <Checkbox value="厄运小姐" checked={false} disabled
      >厄运小姐</Checkbox>

    </CodeBox>
  )
}



export {CheckboxBase};