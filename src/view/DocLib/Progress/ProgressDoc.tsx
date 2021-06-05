import React from "react";
import {ProgressBase} from "./ProgressBase";
import './style.scss'
import {ProgressShow} from "./ProgressShow";
import {ProgressFarmer} from "./ProgressFarmer";
import {Attr} from "../../components/Attr/Attr";


const ProgressDoc: React.FC = () => {
  const date = [
    {
      params: 'percent',
      desc: '定义进度百分比',
      type: 'number',
      select: 'number',
      default: '',
    },
    {
      params: 'strokeHeight',
      desc: '定义进度条高度',
      type: 'number',
      select: 'number',
      default: '15',
    },
    {
      params: 'showText',
      desc: '是否显示进度内容',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
    {
      params: 'theme',
      desc: '自定义显示进度内容',
      type: 'string',
      select: 'string',
      default: '',
    },
    {
      params: 'frame',
      desc: '是否定义固定边框',
      type: 'boolean',
      select: 'true/false',
      default: 'false',
    },
  ]

  return (
    <div className="Progress">
      <ProgressBase/>
      <ProgressShow/>
      <ProgressFarmer/>
      <Attr data={date} title="Attributes"/>
    </div>
  )
}

export {ProgressDoc}