import React from "react";
import {Route, Switch } from "react-router-dom";
import {ButtonDoc} from "../LibDoc/ButtonDoc";
import './style.scss'

const Main = () => {
  return (
    <div className="main-doc">
      <Switch>
        <Route path="/doc/button" component={ButtonDoc} />
      </Switch>
    </div>
  )
}

export {Main}