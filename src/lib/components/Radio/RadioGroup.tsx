import React, {FunctionComponentElement, useRef} from "react";
import {RadioProps} from "./Radio";

interface RadioGroupProps {
  select?: string | number;
  onChange?: (value:string | number) => void
}

const RadioGroup:React.FC<RadioGroupProps> = (props) => {
  const {select, onChange} = props
  const RadioGroup = useRef(null)
  const renderChildren = () => {
    return React.Children.map(props.children, (child, i) => {
      const childElement = child as FunctionComponentElement<RadioProps>
      if (childElement.type.displayName === 'Radio') {
        return React.cloneElement(childElement, {onChange: onChange, select: select})
      } else {
        console.error("RadioGroup组件的子子组件只能为Radio组件")
      }
    });
  }

  return (
    <div ref={RadioGroup} className='ting-radio-group'>
      {renderChildren()}
    </div>
  )
}

export {RadioGroup}