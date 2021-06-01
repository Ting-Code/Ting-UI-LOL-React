import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import Input from "../../../lib/components/Input/Input";

const InputPart:React.FC = () => {
  const code = `<Input icon="search"/>
<Input append=".com"/>
<Input prepend="www."/>`

  return (
    <CodeBox
      title="前缀和后缀"
      description={<p><code>icon</code>属性定义前置图标，<code>prepend</code>属性定义前缀，<code>append</code>属性定义后缀</p>}
      defaultVisible={false}
      code={code}
    >
      <div className={"InputBase"}>
        <Input icon="search"/>
        <Input append=".com"/>
        <Input prepend="www."/>
      </div>

    </CodeBox>
  )
}


export {InputPart};