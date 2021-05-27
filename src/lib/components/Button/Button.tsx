import React from "react";
import classNames from "classnames";
import {Icon} from "../Icon/Icon";

interface BaseButtonProps{
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm';
  href?: string;
  types?: 'icon' | 'default' | 'primary' | 'link' | 'glory';
  name: string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const {name, disabled, size, types, href, children, className, ...restProps} = props

  const btnClass = classNames('ting-button', className, {
    [`ting-button-${types}`]: types,
    [`ting-button-${size}`]: size,
    'disabled': disabled
  })

  if (types === 'link' && href ) {
    return (
      <a className={btnClass} href={href}{...restProps}>
        {children}
      </a>
    )
  } else if(types === "icon" && name){
    return (
      <button className={btnClass} disabled={disabled} {...restProps}>
        <Icon name={name}/>
      </button>
    )
  }else {
    return (
      <button className={btnClass} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  types: 'default',
}

export {Button};
export type { BaseButtonProps };
