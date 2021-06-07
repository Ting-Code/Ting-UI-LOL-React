import React from "react";

import {MenuBase} from "./MenuBase";
import {MenuSub} from "./MenuSub";
import {MenuVer} from "./MenuVer";
import {Attr} from "../../components/Attr/Attr";

const MenuDoc: React.FC = () => {
  const date = [
    {
      params: 'defaultIndex',
      desc: '默认选中菜单',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'mode',
      desc: '水平或垂直模式',
      type: 'string',
      select: 'horizontal/vertical',
      default: 'horizontal',
    },
    {
      params: 'onSelect',
      desc: '点击菜单项触发',
      type: '()=>void',
      select: '(selectedIndex: string) => void',
      default: '',
    },
    {
      params: 'defaultOpenSubMenus',
      desc: '设置子菜单的默认打开,只在纵向模式下生效',
      type: 'string[]',
      select: 'string[]',
      default: '[]',
    }
  ]
  return (
    <div>
      <MenuBase/>
      <MenuSub/>
      <MenuVer/>
      <Attr data={date} title="Attribute"/>
    </div>
  )
}

export {MenuDoc}