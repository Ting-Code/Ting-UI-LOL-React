import React from "react";
import { render } from "@testing-library/react";
import {Menu, MenuProps} from "./Menu";
import {MenuItem, MenuItemProps} from "./MenuItem";

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['4']
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>

    </Menu>
  )
}

describe("测试Menu组件", () => {
  it("测试Menu 和 MenuItem 属性的 传递属性是否正确", () => {

  })
  it('测试点击Menu点击是否正常和回调函数', function () {

  })
  it('测试传入vertical会垂直显示', function () {

  });


})