import React, {useContext} from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";


interface MenuItemProps extends React.LiHTMLAttributes<HTMLElement>{
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {className, style, index, children, disabled, ...restProps} = props
  const context = useContext(MenuContext)
  const classes = classNames('ting-menu-item', className, {
    'is-disabled' : disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(typeof index === "string" ? index :'0')
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick} {...restProps}>
      {children}
    </li>
  )
}
MenuItem.displayName = "MenuItem"

export {MenuItem};
export type { MenuItemProps };
