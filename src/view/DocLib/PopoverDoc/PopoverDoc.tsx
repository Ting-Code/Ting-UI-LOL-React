import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {PopoverBase} from "./PopoverBase";
import {PopoverHover} from "./PopoverHover";

const PopoverDoc: React.FC = () => {
  const date = [
    {
      params: 'position',
      desc: '弹出方向',
      type: 'string',
      select: 'bottom/top/right/left',
      default: 'top',
    },
    {
      params: 'trigger',
      desc: '触发方式:点击或悬浮',
      type: 'string',
      select: 'click/hover',
      default: 'click',
    },
    {
      params: 'content',
      desc: '弹出内容',
      type: 'ReactElement',
      select: '',
      default: '',
    },
  ]

  return (
    <div>
      <h2 className="doc-popover">Popover 提示框组件</h2>
      <PopoverBase/>
      <PopoverHover/>
      <Attr data={date} title="Attributes"/>
    </div>
  )
}

export {PopoverDoc}