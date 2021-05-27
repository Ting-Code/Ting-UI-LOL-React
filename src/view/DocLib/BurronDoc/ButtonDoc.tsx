import React from "react";
import './style.scss'
import {ButtonBase} from "./ButtonBase";
import {ButtonDisabled} from "./ButtonDisabled";
import {ButtonSize} from "./ButtonSize";
import {ButtonIcon} from "./ButtonIcon";
import {Attr} from "../../components/Attr/Attr";

const ButtonDoc: React.FC = () => {
  const date = [
    {
      params: 'position',
      desc: '弹出位置',
      type: 'string',
      select: 'top / middle / bottom',
      default: 'top',
    },
  ]

  return (
    <div>
      <h2 className="doc-button">Button 按钮组件</h2>
      <ButtonBase/>
      <ButtonDisabled/>
      <ButtonSize/>
      <ButtonIcon/>
      <Attr data={date} title="Attributes"/>
    </div>
  )
}

export {ButtonDoc}