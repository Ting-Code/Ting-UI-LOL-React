import React from "react";
import {Button} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";

const ButtonDisabled:React.FC = () => {
const code = `<Button disabled>普通按钮</Button>
<Button disabled types="link" href={"http://localhost:3000/#/doc/button"}>a连接</Button>
<Button disabled types="glory">辉煌</Button>
<Button disabled types="primary">主要蓝色</Button>
`

  return (
    <CodeBox
      className="ButtonBase"
      title="支持禁用"
      description={<p><code>disabled</code>属性禁用按钮</p>}
      code={code}>
      <Button disabled>普通按钮</Button>
      <Button disabled types={"glory"}>边框按钮</Button>
      <Button disabled types={"primary"}>原色按钮</Button>
      <Button disabled types={"link"} href={"http://localhost:3000/#/doc/button"}>连接</Button>
    </CodeBox>
  )
}


export {ButtonDisabled};