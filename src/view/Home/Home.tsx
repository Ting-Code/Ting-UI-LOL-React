import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import './style.scss'
import {AsideContext} from "../../App";
import {Button} from "../../lib";

const Home = () => {
  const {setAsideFn} = useContext(AsideContext);
  useEffect(() => {
    setAsideFn(false)
  })
  return(
    <div className="ting-home">
      <div className="main">
        <p className="title">TING UI</p>
        <p className="declare">基于React的UI框架</p>
        <ul>
          <li><a href="https://github.com/TINGCYGF"><Button types="glory">码 云</Button></a></li>
          <li><a href="https://github.com/TINGCYGF"><Button types="glory">Github</Button></a></li>
          <li><Link to="/doc/intro"><Button types="glory">起 步</Button></Link></li>
        </ul>
      </div>
      <div className='foot'>
        <ul>
          <li>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-React"></use>
            </svg>
            <div>
              <p className="title">基于 React</p>
              <p>使用了React Hooks API</p>
            </div>
          </li>
          <li>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-LOL_logo"></use>
            </svg>
            <div>
              <p className="title">LOL UI</p>
              <p>组件模仿英雄联盟样式编写</p>
            </div>
          </li>
          <li>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-typescript"></use>
            </svg>
            <div>
              <p className="title">基于 TypeScript</p>
              <p>采用 TypeScript 书写</p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  )
}


export {Home}