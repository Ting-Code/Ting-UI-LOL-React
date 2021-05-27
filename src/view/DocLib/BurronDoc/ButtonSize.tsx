import React from "react";
import {Button} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";

const ButtonSize:React.FC = () => {
  const code = `<Button disabled>普通按钮</Button>
<Button disabled types={"link"} href={"http://localhost:3000/#/doc/button"}>a连接</Button>
<Button disabled types={"glory"}>辉煌</Button>
<Button disabled types={"primary"}>主要蓝色</Button>
`

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