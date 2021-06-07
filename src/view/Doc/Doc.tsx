import React, {useContext, useEffect} from "react";
import {AsideContext} from "../../App";
import {HashRouter, NavLink} from "react-router-dom";
import {Main} from "../components/Main/Main";
import './style.scss'
import {Transition} from "../../lib";

const Doc = () => {
  const {asideVisible, setAsideVisibleFn, setAsideFn} = useContext(AsideContext);
  useEffect(() => {
    setAsideFn(true)
    const width = document.documentElement.clientWidth
    if(width > 500){
      setAsideVisibleFn(true)
    }
  })
  const onChangeAside = (e: React.MouseEvent) => {
    const main = document.querySelector('.main-doc')
    main!.scrollTop = 0
    if(e.target instanceof HTMLAnchorElement){
      const width = document.documentElement.clientWidth
      if(width < 500){
        setAsideVisibleFn(false)
      }
    }
  }
  return (
    <HashRouter>
      <div className="ting-content" onClick={onChangeAside}>
        <Transition in={asideVisible} timeout={300} animation={"zoom-in-left"}>
          <aside className="aside-menu">
            <h2>文档</h2>
            <ul>
              <li>
                <NavLink to="/doc/intro" activeClassName="link-active">介绍</NavLink>
              </li>
            </ul>
            <h2>组件列表</h2>
            <ul>
              <li>
                <NavLink to="/doc/button" activeClassName="link-active">Button 按钮</NavLink>
              </li>
              <li>
                <NavLink to="/doc/radio" activeClassName="link-active">Radio 单选框</NavLink>
              </li>
              <li>
                <NavLink to="/doc/checkbox" activeClassName="link-active">Checkbox 多选框</NavLink>
              </li>
              <li>
                <NavLink to="/doc/input" activeClassName="link-active">Input 输入框</NavLink>
              </li>
              <li>
                <NavLink to="/doc/popover" activeClassName="link-active">Popover 提示框</NavLink>
              </li>
              <li>
                <NavLink to="/doc/dialog" activeClassName="link-active">Dialog 对话框</NavLink>
              </li>
              <li>
                <NavLink to="/doc/progress" activeClassName="link-active">Progress 进度条</NavLink>
              </li>
              <li>
                <NavLink to="/doc/menu" activeClassName="link-active">Menu 菜单</NavLink>
              </li>
            </ul>
          </aside>
        </Transition>
        <Main/>
      </div>
    </HashRouter>
  )
}

export { Doc }