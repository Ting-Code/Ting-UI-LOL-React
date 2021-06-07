import React from "react";
import {Menu, MenuItem} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {SubMenu} from "../../../lib/components/Menu/SubMenu";


const MenuSub:React.FC = () => {
  const code = `<Menu defaultIndex={'2'} mode="horizontal"
      onSelect={(value:string | any) => console.log(value)}>
  <MenuItem>主页</MenuItem>
  <SubMenu title="游戏模式">
    <MenuItem>云顶之弈</MenuItem>
    <MenuItem>普通匹配</MenuItem>
    <MenuItem>冠军赛杯</MenuItem>
  </SubMenu>
</Menu>`

  return (
    <CodeBox
      title="下拉菜单"
      description={<p><code>SubMenu</code>组件可实现下拉菜单</p>}
      defaultVisible={false}
      code={code}>
      <Menu defaultIndex={'2'} mode="horizontal"
            onSelect={(value:string | any) => console.log(value)}>
        <MenuItem>主页</MenuItem>
        <SubMenu title="游戏模式">
          <MenuItem>云顶之弈</MenuItem>
          <MenuItem>普通匹配</MenuItem>
          <MenuItem>冠军赛杯</MenuItem>
        </SubMenu>
      </Menu>
    </CodeBox>
  )
}


export {MenuSub};