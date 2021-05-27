import React from "react";
import {Button} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";

const ButtonIcon:React.FC = () => {
const code = `<Button size='sm' types="icon" name="edit" />
<Button types="icon" name="edit"/>
<Button disabled types="icon" name="edit" />
<Button size='lg' types="icon" name="edit" />`

  return (
    <CodeBox
      className="ButtonSize"
      title="icon按钮"
      description={<p><code>types</code>属性设定<code>icon</code>定义icon按钮<code>name</code>属性定义icon种类</p>}
      code={code}>
      <Button size='sm' types="icon" name="edit" />
      <Button types="icon" name="edit"/>
      <Button disabled types="icon" name="edit" />
      <Button size='lg' types="icon" name="edit" />
    </CodeBox>
  )
}


export {ButtonIcon};