import React from "react";
import './style.scss'
import {Button} from "../../../lib";
import {Link} from "react-router-dom";


const NotFound: React.FC = () => {


  return (
    <div className="not-found">
      <h1>404 页面不存在</h1>
      <Link to="/doc/intro"><Button types="glory">返回主页</Button></Link>
    </div>
  )
}

export {NotFound}