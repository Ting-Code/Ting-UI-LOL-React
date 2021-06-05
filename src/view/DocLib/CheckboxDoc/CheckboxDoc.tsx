import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {CheckboxBase} from "./CheckboxBase";
import {CheckboxList} from "./CheckboxList";
import {CheckboxOption} from "./checkboxOption";


const CheckboxDoc: React.FC = () => {
  const date = [
    {
      params: 'checked',
      desc: '选中状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'disabled',
      desc: '禁用状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'indeterminate',
      desc: '半选中状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'value',
      desc: '选项唯一标志值',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'onChange',
      desc: '点击触发事件',
      type: '(e)=>void',
      select: '(e)=>void',
      default: '',
    },
  ]
  const date2 = [
    {
      params: 'selectOptions',
      desc: '选中选项value值',
      type: 'string[]',
      select: 'string[]',
      default: '[]',
    },
    {
      params: 'options',
      desc: '可自动生成选项',
      type: 'string',
      select: 'string[]',
      default: 'null',
    },
    {
      params: 'onChange',
      desc: '返回选中value选项',
      type: '(value[])=>void',
      select: '(value[])=>void',
      default: '',
    },
  ]

  return (
    <div>
      <h2 className="doc-checkbox">Checkbox 多选框组件</h2>
      <CheckboxBase/>
      <CheckboxList/>
      <CheckboxOption/>
      <Attr data={date} title="Checkbox"/>
      <Attr data={date2} title="CheckboxGroup"/>
    </div>
  )
}

export {CheckboxDoc}