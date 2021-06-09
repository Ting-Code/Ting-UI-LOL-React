import React, {useContext} from "react";
import {HashRouter, Link} from "react-router-dom";
import './style.scss'
import {AsideContext} from "../../../App";

const Topnav = () => {
  const {asideVisible, setAsideVisibleFn, aside} = useContext(AsideContext);
  return (
    <div className="top-back">
      <div className="topnav">
        {
          aside && <div onClick={() => {setAsideVisibleFn(!asideVisible)}} className="toggleAside">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-LOL_logo"></use>
            </svg>
          </div>
        }
        <HashRouter>
          {
            aside &&  <Link to="/" className="logo">
              <div>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-Ting_990"></use>
                </svg>
              </div>
            </Link>
          }
          {
            aside && <ul className="menu">
              <li><Link to="/doc/button">文档</Link></li>
              <li><a href="https://www.yuque.com/u2368282/nvuyr1">博客</a></li>
              <li><a href="https://github.com/TINGCYGF">GitHub</a></li>
            </ul>
          }
        </HashRouter>
      </div>
    </div>
  )
}

export { Topnav }