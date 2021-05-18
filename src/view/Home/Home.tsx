import React, {useContext} from "react";
import { Link } from "react-router-dom";
import './style.scss'
import {AsideContext} from "../../App";

const Home = () => {
  const {setAside} = useContext(AsideContext);
  setAside(false)
  return(
    <div className="home">
      <div className="main">
        <p className="title">TING UI</p>
        <p className="declare">基于React的UI框架</p>
        <ul>
          <li><a href="https://github.com/TINGCYGF">码 云</a></li>
          <li><a href="https://github.com/TINGCYGF">Github</a></li>
          <li><Link to="/doc">起 步</Link></li>
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
              <use xlinkHref="#icon-typescript"></use>
            </svg>
            <div>
              <p className="title">基于 TypeScript</p>
              <p>采用 TypeScript 书写</p>
            </div>
          </li>
          <li>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-UIzhongguo"></use>
            </svg>
            <div>
              <p className="title">简约 UI</p>
              <p>每个组件的UI设计简约大方</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}


export {Home}