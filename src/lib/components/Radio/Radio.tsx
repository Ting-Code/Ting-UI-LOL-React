import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {Transition} from "../Transition/Transition";

interface RadioProps {
  value: string | number;
  select?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
}
const Radio: React.FC<RadioProps> = (props) => {
  const { value, select, onChange, disabled } = props
  const [ checked, setChecked ] = useState(false)
  const spanClass = classNames("ting-radio-click", {
    'ting-radio-active': checked
  })
  const labelClass = classNames('ting-radio-label', {
    'disabled': disabled
  })
  useEffect(() => {
    if(select === value){
      setChecked(true)
    }else {
      setChecked(false)
    }
  }, [select, value])
  const labelOnChange: React.ChangeEventHandler = (e) => {
    onChange?.(value)
  }
  return (
    <label className={labelClass}>
      <span>
        <span className={spanClass}>
          <Transition in={checked} timeout={300} animation={"zoom-in-open"}>
            <span className="change-span"/>
          </Transition>
        </span>
        <input
          type="radio"
          className="ting-radio-input"
          checked={checked}
          onChange={labelOnChange}
          disabled={disabled}
        />
      </span>
      <span className="ting-radio-children">
        {props.children}
      </span>
    </label>
  )
}

Radio.displayName = "Radio"
export {Radio};
export type { RadioProps };
