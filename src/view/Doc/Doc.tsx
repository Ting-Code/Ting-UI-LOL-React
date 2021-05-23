import React, {useContext, useEffect} from "react";
import {AsideContext} from "../../App";
import {HashRouter, NavLink} from "react-router-dom";
import {Main} from "../components/Main/Main";
import './style.scss'

const Doc = () => {
  const {asideVisible, setAsideVisibleFn, setAsideFn} = useContext(AsideContext);
  const asideDisplay = asideVisible ? "flex" : "none";
  useEffect(() => {
    setAsideFn(true)
    const width = document.documentElement.clientWidth
    if(width > 500){
      setAsideVisibleFn(true)
    }
  })
  const onChangeAside = (e: React.MouseEvent) => {
    if(e.target instanceof HTMLAnchorElement){
      setAsideVisibleFn(false)
    }
  }
  return (
    <HashRouter>
      <div className="content" onClick={onChangeAside}>
        <aside style={{display: asideDisplay}} className="aside-menu">
        <h2>文档</h2>
        <ul>
          <li>
            <NavLink to="/doc/intro" activeClassName="link-active">介绍</NavLink>
          </li>
          <li>
            <NavLink to="/doc/install" activeClassName="link-active">安装</NavLink>
          </li>
          <li>
            <NavLink to="/doc/get-started" activeClassName="link-active">快速使用</NavLink>
          </li>
        </ul>
        <h2>组件列表</h2>
        <ul>
          <li>
            <NavLink to="/doc/button" activeClassName="link-active">Button 按钮</NavLink>
          </li>
          <li>
            <NavLink to="/doc/Menu" activeClassName="link-active">Menu 菜单</NavLink>
          </li>
        </ul>
      </aside>
        <Main/>
      </div>
    </HashRouter>
  )
}

export { Doc }