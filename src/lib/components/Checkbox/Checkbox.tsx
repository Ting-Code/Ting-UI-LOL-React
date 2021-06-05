import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Icon} from "../Icon/Icon";

interface CheckboxProps{
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean;
  value: string;
  selectOptions?: string[];
  optionChange?: (selectOptions: string[]) => void
}

const Checkbox:React.FC<CheckboxProps> = (props) => {
  const {checked, onChange, indeterminate, children, disabled, selectOptions, optionChange, value} = props
  const [_checked, _setChecked] = useState(checked || false)
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    checked !== undefined && _setChecked(checked)
  }, [checked])
  useEffect(() => {
    if(selectOptions){
      selectOptions?.includes(value) ? _setChecked(true): _setChecked(false)
    }
  }, [selectOptions, value])
  const spanClass = classNames("ting-checkbox-click", {
    'ting-checked-active': _checked,
    'ting-indeterminate-active': indeterminate
  })
  const labelClass = classNames('ting-checkbox-label', {
    'disabled': disabled
  })
  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    if(e.target.checked && selectOptions){
      optionChange?.([...selectOptions, value])
    }else {
      optionChange?.(selectOptions!.filter(item => item !== value))
    }
  }
  return (
    <label className={labelClass}>
      <span>
        <span className={spanClass}>
          {indeterminate? <span className="change-span"/> : <Icon name="select"/> }
        </span>
        <input
          ref={checkboxRef}
          type="checkbox"
          className="ting-checkbox-input"
          checked={_checked}
          onChange={handleChange}
          disabled={disabled}
        />
      </span>
      <span className="ting-checkbox-children">
        {children}
      </span>
    </label>
  )
}
Checkbox.displayName = "Checkbox"
export {Checkbox};
export type { CheckboxProps };
