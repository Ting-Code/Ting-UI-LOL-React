import React from "react";
import {Button} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";

const ButtonSize:React.FC = () => {
const code = `<Button size='sm'>小按钮</Button>
<Button>默认按钮</Button>
<Button size='lg'>大按钮</Button>`

  return (
    <CodeBox
      className="ButtonSize"
      title="不同大小"
      description={<p><code>size</code>属性定义按钮大小</p>}
      code={code}>
      <Button size='sm'>小按钮</Button>
      <Button>默认按钮</Button>
      <Button size='lg'>大按钮</Button>
    </CodeBox>
  )
}


export {ButtonSize};