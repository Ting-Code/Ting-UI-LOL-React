import React from "react";
import {Menu, MenuItem} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {SubMenu} from "../../../lib/components/Menu/SubMenu";


const MenuVer:React.FC = () => {
  const code = `<Menu mode="vertical"
      defaultOpenSubMenus={['1']}
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
      title="垂直菜单"
      description={<p><code>mode</code>属性定义垂直菜单，<code>defaultOpenSubMenus</code>设置子菜单的默认打开，只在垂直模式下生效</p>}
      defaultVisible={false}
      code={code}>
      <Menu mode="vertical"
            defaultOpenSubMenus={['1']}
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

export {MenuVer};