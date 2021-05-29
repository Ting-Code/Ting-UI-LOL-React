import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {DialogBase} from "./DialogBase";
import {DialogMark} from "./DialogMask";
import {DialogButton} from "./DialogButton";
import {DialogAlert} from "./DialogAlert";
import {DialogConfirm} from "./DialogConfirm";

const DialogDoc: React.FC = () => {
  const date = [
    {
      params: 'visible',
      desc: '是否显示对话框',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'closeOnClickMask',
      desc: '是否点击遮罩触发onClose',
      type: 'boolean',
      select: 'true/false',
      default: 'true',
    },
    {
      params: 'title',
      desc: '对话框标题',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'buttons',
      desc: '自定义按钮',
      type: 'Array<ReactElement>',
      select: 'Array<ReactElement>',
      default: '',
    },
  ]
  const alert = [
    {
      params: 'title',
      desc: '对话框标题',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'children',
      desc: '对话框内容',
      type: 'string',
      select: 'string',
      default: '',
    },
  ]

  const confirm = [
    {
      params: '第一个参数.title',
      desc: '对话框标题',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: '第一个参数.children',
      desc: '对话框内容',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: '第二个参数',
      desc: '点击确定回调函数(可选)',
      type: '()=>void',
      select: '()=>void',
      default: '',
    },
    {
      params: '第三个参数',
      desc: '点击取消回调函数(可选)',
      type: '()=>void',
      select: '()=>void',
      default: '',
    },
  ]

  return (
    <div>
      <h2 className="doc-dialog">Dialog 对话框组件</h2>
      <DialogBase/>
      <DialogMark/>
      <DialogButton/>
      <DialogAlert/>
      <DialogConfirm/>
      <Attr data={date} title="Attributes"/>
      <Attr data={alert} title="alert传入参数"/>
      <Attr data={confirm} title="confirm传入参数"/>
    </div>
  )
}

export {DialogDoc}