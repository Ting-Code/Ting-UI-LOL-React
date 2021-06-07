import React,{ useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
import {Icon} from '../Icon/Icon'
import {Spread} from "../Transition/Spread";
import {Transition} from "../Transition/Transition";
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}
const SubMenu: React.FC<SubMenuProps & React.LiHTMLAttributes<HTMLLIElement>> = (props) => {
  const { index, title, children, className, ...restProps} = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpen = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [ menuOpen, setOpen ] = useState(isOpen)
  const classes = classNames('ting-menu-item ting-submenu-item', className, {
    'is-active': context.index === index || context.index.split('-')[0] === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('ting-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    const Animation = () => {
      if(context.mode === 'vertical'){
        return (
          <Spread
          in={menuOpen}
          timeout={300}
          animation="vertical"
        >
          <ul className={subMenuClasses}>
            {childrenComponent}
          </ul>
        </Spread>)
      }else {
        return (
          <Transition
          in={menuOpen}
          timeout={300}
          animation="zoom-in-top"
        >
          <ul className={subMenuClasses}>
            {childrenComponent}
          </ul>
        </Transition>)
      }
    }
    return (
      Animation()
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents} {...restProps}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon name="down" className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export {SubMenu}

