import React, {createContext, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./MenuItem";


interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string) => void;
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: 'horizontal' | 'vertical';
  defaultOpenSubMenus?: string[];
}
const MenuContext = createContext<IMenuContext>({index: '0'})


const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  //统一处理选中变化后
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const classes = classNames('ting-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  //判断子组件是否MenuItem
  const renderChildren = () => {
    //遍历子组件由React提供的Map
    return React.Children.map(children, (child, index) => {
      const {displayName} = (child as React.FunctionComponentElement<MenuItemProps>).type
      if(displayName === 'MenuItem' || displayName === 'SubMenu'){
        return React.cloneElement(child as React.FunctionComponentElement<MenuItemProps>, {index:index.toString()})
      }else {
        console.error("Menu组件必须添加MenuItem为子组件")
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export {Menu, MenuContext};
export type {MenuProps}