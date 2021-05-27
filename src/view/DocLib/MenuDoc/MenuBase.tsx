import React from "react";
import {Menu, MenuItem} from "../../../lib";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {SubMenu} from "../../../lib/components/Menu/SubMenu";


const MenuBase:React.FC = () => {
  const code = `
`

  return (
    <CodeBox
      title="基础使用"
      description={<p> </p>}
      defaultVisible={true}
      code={code}>
      <Menu defaultIndex={'2'} mode="horizontal">
        <MenuItem>
          第一项
        </MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem>
            下拉一
          </MenuItem>
          <MenuItem>
            下拉一
          </MenuItem>
          <MenuItem>
            下拉一
          </MenuItem>
          <MenuItem>
            下拉一
          </MenuItem>
        </SubMenu>
        <MenuItem>
          第三项
        </MenuItem>
      </Menu>
    </CodeBox>
  )
}


export {MenuBase};