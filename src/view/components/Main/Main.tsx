import React from "react";
import {Route, Switch } from "react-router-dom";
import {ButtonDoc} from "../LibDoc/BurronDoc/ButtonDoc";

import {MenuDoc} from "../LibDoc/MenuDoc/MenuDoc";

import './style.scss'

const Main = () => {
  return (
    <div className="main-doc">
      <Switch>
        <Route path="/doc/button" component={ButtonDoc} />
        <Route path="/doc/menu" component={MenuDoc} />
      </Switch>
    </div>
  )
}

export {Main}