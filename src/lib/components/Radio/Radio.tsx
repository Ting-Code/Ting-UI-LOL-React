import React from "react";

interface RadioProps {
  value: string | number
}

const Radio: React.FC<RadioProps> = (props) => {
  return (
    <label className='ting-radio-label'>
      <span>
        <span className="ting-radio-click"/>
        <input
          type="radio"
          className="ting-radio-input"
        />
      </span>
      <span className="ting-radio-children">
        {props.children}
      </span>
    </label>
  )
}

export {Radio}