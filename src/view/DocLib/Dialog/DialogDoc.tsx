import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {DialogBase} from "./DialogBase";

const ButtonDoc: React.FC = () => {
  const date = [
    {
      params: 'types',
      desc: '按钮类型',
      type: 'string',
      select: 'icon/default/primary/link/glory',
      default: 'top',
    },
    {
      params: 'disabled',
      desc: '禁用状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'size',
      desc: '按钮大小',
      type: 'string',
      select: 'lg/sm/null',
      default: 'null',
    },
    {
      params: 'href',
      desc: 'types为link时跳转地址',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'name',
      desc: 'types为icon时的icon类型',
      type: 'string',
      select: 'string',
      default: '',
    },
  ]

  return (
    <div>
      <h2 className="doc-dialog">Dialog 对话框组件</h2>
      <DialogBase/>
      <Attr data={date} title="Attributes"/>
    </div>
  )
}

export {ButtonDoc}