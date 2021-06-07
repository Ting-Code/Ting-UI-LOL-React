import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Button, Popover} from "../../../lib";


const PopoverHover:React.FC = () => {
  const code = `<Popover position="bottom" trigger="hover" content="这里添加一段话">
  <Button>向下提示</Button>
</Popover>
<Popover position="top" trigger="hover" content="这里添加一段话">
  <Button>向上提示</Button>
</Popover>
<Popover position="right" trigger="hover" content="这里添加一段话">
  <Button>向右提示</Button>
</Popover>
<Popover position="left" trigger="hover" content="这里添加一段话">
  <Button>向左提示</Button>
</Popover>`

  return (
    <CodeBox
      className="PopoverBase"
      title="鼠标悬浮弹出"
      description={<p><code>trigger</code>属性定义<code>hover</code>可以鼠标悬浮弹出</p>}
      defaultVisible={false}
      code={code}>
      <Popover position="bottom" trigger="hover" content="这里添加一段话">
        <Button>向下提示</Button>
      </Popover>
      <Popover position="top" trigger="hover" content="这里添加一段话">
        <Button>向上提示</Button>
      </Popover>
      <Popover position="right" trigger="hover" content="这里添加一段话">
        <Button>向右提示</Button>
      </Popover>
      <Popover position="left" trigger="hover" content="这里添加一段话">
        <Button>向左提示</Button>
      </Popover>
    </CodeBox>
  )
}

export {PopoverHover};