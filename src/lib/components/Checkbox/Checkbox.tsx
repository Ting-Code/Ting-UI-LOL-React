import React, { useEffect, useRef} from "react";
import classNames from "classnames";
import {Icon} from "../Icon/Icon";

interface CheckboxProps{
  checked: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean;
}

const Checkbox:React.FC<CheckboxProps> = (props) => {
  const {checked, onChange, indeterminate, children, disabled} = props
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    checkboxRef.current!.checked = checked;
  }, [checked])
  const spanClass = classNames("ting-checkbox-click", {
    'ting-checked-active': checked,
    'ting-indeterminate-active': indeterminate
  })
  const labelClass = classNames('ting-checkbox-label', {
    'disabled': disabled
  })
  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }
  return (
    <label className={labelClass}>
      <span>
        <span className={spanClass}>
          {indeterminate ? <Icon name="edit" /> :
            <span className="change-span"/>}
        </span>
        <input
          ref={checkboxRef}
          type="checkbox"
          className="ting-checkbox-input"
          checked={checked}
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

export {Checkbox}