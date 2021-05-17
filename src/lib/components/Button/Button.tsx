import React from "react";
import classNames from "classnames";

interface BaseButtonProps{
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm';
  href?: string;
  types?: 'primary' | 'default' | 'danger' | 'link';
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const {disabled, size, types, href, children, className, ...restProps} = props

  const btnClass = classNames('ting-button', className, {
    [`ting-button-${types}`]: types,
    [`ting-button-${size}`]: size,
    'disabled': (types === 'link') && disabled
  })

  if (types === 'link' && href ) {
    return (
      <a className={btnClass} href={href}{...restProps}>
        {children}
      </a>
    )
  } else {
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

export default Button