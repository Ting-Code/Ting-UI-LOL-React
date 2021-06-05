import React, {FunctionComponentElement} from "react";
import {Checkbox, CheckboxProps} from "./Checkbox";


interface RadioGroupProps {
  selectOptions?: string[];
  options?: string[];
  onChange?: (selectOptions: string[]) => void
}

const CheckboxGroup:React.FC<RadioGroupProps> = (props) => {
  const {selectOptions, onChange, options} = props

  const renderChildren = () => {
    return React.Children.map(props.children, (child, i) => {
      const childElement = child as FunctionComponentElement<CheckboxProps>
      if (childElement.type.displayName === 'Checkbox') {
        return React.cloneElement(childElement, {
          selectOptions: selectOptions, optionChange: onChange
        })
      } else {
        console.error("CheckboxGroup组件的子组件只能为Radio组件")
      }
    });
  }
  const renderChildrenOption = () => {
    return (
      <>
        {
          options?.map(value => <Checkbox
            key={value}
            value={value}
            selectOptions={selectOptions}
            optionChange={onChange}
          >{value}</Checkbox>)
        }
      </>
    )
  }

  return (
    <div className='ting-checkbox-group'>
      {options ? renderChildrenOption() : renderChildren()}
    </div>
  )
}
CheckboxGroup.defaultProps = {
  selectOptions: []
}

export {CheckboxGroup}