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
      const width = document.documentElement.clientWidth
      if(width < 500){
        setAsideVisibleFn(false)
      }
    }
  }
  return (
    <HashRouter>
      <div className="ting-content" onClick={onChangeAside}>
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
            <NavLink to="/doc/menu" activeClassName="link-active">Menu 菜单</NavLink>
          </li>
          <li>
            <NavLink to="/doc/input" activeClassName="link-active">Input 表单</NavLink>
          </li>
          <li>
            <NavLink to="/doc/upload" activeClassName="link-active">Upload 上传</NavLink>
          </li>
          <li>
            <NavLink to="/doc/progress" activeClassName="link-active">Progress 进度条</NavLink>
          </li>
          <li>
            <NavLink to="/doc/dialog" activeClassName="link-active">Dialog 对话框</NavLink>
          </li>
          <li>
            <NavLink to="/doc/popover" activeClassName="link-active">Popover 提示框</NavLink>
          </li>
          <li>
            <NavLink to="/doc/radio" activeClassName="link-active">Radio 单选框</NavLink>
          </li>
          <li>
            <NavLink to="/doc/checkbox" activeClassName="link-active">Checkbox 多选框</NavLink>
          </li>
        </ul>
      </aside>
        <Main/>
      </div>
    </HashRouter>
  )
}

export { Doc }