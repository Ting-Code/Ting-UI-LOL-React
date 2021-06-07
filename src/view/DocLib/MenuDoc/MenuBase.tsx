import React from "react";
import {Menu, MenuItem} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";


const MenuBase:React.FC = () => {
  const code = `<Menu defaultIndex={'2'} mode="horizontal"
      onSelect={(value:string | any) => console.log(value)}>
  <MenuItem>主页</MenuItem>
  <MenuItem>云顶之弈</MenuItem>
  <MenuItem>冠军赛杯</MenuItem>
</Menu>`

  return (
    <CodeBox
      title="基础使用"
      description={<p><code>defaultIndex</code>属性设置默认选中菜单，<code>onSelect</code>触发的回掉函数</p>}
      defaultVisible={true}
      code={code}>
      <Menu defaultIndex={'2'} mode="horizontal"
            onSelect={(value:string | any) => console.log(value)}>
        <MenuItem>主页</MenuItem>
        <MenuItem>云顶之弈</MenuItem>
        <MenuItem>冠军赛杯</MenuItem>
      </Menu>
    </CodeBox>
  )
}


export {MenuBase};