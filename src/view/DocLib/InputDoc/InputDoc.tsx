import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {InputBase} from "./InputBase";
import {AutoInputDoc} from "./AutoInputDoc";
import {InputPart} from "./InputPart";

const InputDoc: React.FC = () => {
  const date = [
    {
      params: 'disabled',
      desc: '禁用状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'size',
      desc: '输入框大小',
      type: 'string',
      select: 'lg/sm/null',
      default: 'null',
    },
    {
      params: 'icon',
      desc: 'icon类型',
      type: 'string',
      select: 'icon->name属性',
      default: '',
    },
    {
      params: 'prepend',
      desc: '前缀',
      type: 'ReactElement',
      select: 'ReactElement',
      default: '',
    },
    {
      params: 'append',
      desc: '后缀',
      type: 'ReactElement',
      select: 'ReactElement',
      default: '',
    },
    {
      params: 'onChange',
      desc: '修改内容触发事件',
      type: '() => void',
      select: '(e: ChangeEvent<HTMLInputElement>) => void',
      default: '',
    },
  ]
  const date2 = [
    {
      params: 'fetchSuggestions',
      desc: '回调输入内容返回自动补全数据',
      type: '()=>{}',
      select: '(str: string) => DataSourceType[] | Promise<DataSourceType[]>',
      default: '',
    },
    {
      params: 'onSelect',
      desc: '选中自动补全触发',
      type: '()=>void',
      select: '(item: DataSourceType) => void',
      default: '',
    },
    {
      params: 'renderOption',
      desc: '自定义选项样式',
      type: '() => {}',
      select: '(item: DataSourceType) => ReactElement',
      default: '',
    },
  ]

  return (
    <div>
      <h2 className="doc-input">Input 输入框组件</h2>
      <InputBase/>
      <InputPart/>
      <AutoInputDoc/>
      <Attr data={date} title="Input"/>
      <Attr data={date2} title="AutoInput"/>
    </div>
  )
}

export {InputDoc}