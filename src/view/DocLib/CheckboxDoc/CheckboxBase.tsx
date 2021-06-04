import React, {useState} from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Checkbox} from "../../../lib/components/Checkbox/Checkbox";



const CheckboxBase:React.FC = () => {
  const code = ``

  const [check, setCheck] = useState(false)
  return (
    <CodeBox
      title="基础使用"
      description={<p><code>types</code>属性定义按键样式</p>}
      defaultVisible={true}
      code={code}>

      <Checkbox checked={check} onChange={(e) => {
        setCheck(e.target.checked)
      }}>选择</Checkbox>

    </CodeBox>
  )
}


export {CheckboxBase};