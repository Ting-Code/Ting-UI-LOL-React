import React from "react";
import './style.scss'
import {Attr} from "../../components/Attr/Attr";
import {RadioBase} from "./RadioBase";
import {RadioDisabled} from "./RadioDisabled";

const RadioDoc: React.FC = () => {
  const date = [
    {
      params: 'value',
      desc: '选项标志符',
      type: 'string/number',
      select: 'string/number',
      default: '必填',
    },
    {
      params: 'select',
      desc: '选中选项的value值',
      type: 'string/number',
      select: 'string/number',
      default: '',
    },
    {
      params: 'onChange',
      desc: '选择选项返回value值',
      type: '(value) => void',
      select: '(value) => void',
      default: '',
    },
    {
      params: 'disabled',
      desc: '禁用状态',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
  ]

  return (
    <div>
      <h2 className="doc-button">Radio 单项选择组件</h2>
      <RadioBase/>
      <RadioDisabled/>
      <Attr data={date} title="Attributes"/>
    </div>
  )
}

export {RadioDoc}