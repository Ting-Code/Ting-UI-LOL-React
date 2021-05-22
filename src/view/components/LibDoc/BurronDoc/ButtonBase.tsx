import React from "react";
import {Button} from "../../../../lib";
import {CodeBox} from "../../CodeBox/CodeBox";

const ButtonBase:React.FC = () => {
  const code = `
`

  return (
    <CodeBox
      title="基础使用"
      description="描述"
      defaultVisible={true}
      code={code}>
      <Button>普通按钮</Button>
      <Button types={"icon"} name="edit" />
      <Button types={"link"} href={"http://localhost:3000/#/doc/button"}>a连接</Button>
      <Button types={"glory"}>辉煌</Button>
      <Button types={"primary"}>主要蓝色</Button>
      <Button disabled>普通按钮</Button>
      <Button disabled types={"icon"} name="edit" />
      <Button disabled types={"link"} href={"http://localhost:3000/#/doc/button"}>a连接</Button>
      <Button disabled types={"glory"}>辉煌</Button>
      <Button disabled types={"primary"}>主要蓝色</Button>
    </CodeBox>
  )
}


export {ButtonBase};