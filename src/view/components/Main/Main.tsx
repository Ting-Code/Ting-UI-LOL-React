import React from "react";
import './style.scss'
import {Route, Switch } from "react-router-dom";
import {ButtonDoc} from "../LibDoc/BurronDoc/ButtonDoc";
import {MenuDoc} from "../LibDoc/MenuDoc/MenuDoc";
import {InputDoc} from "../LibDoc/InputDoc/InputDoc";
import {UploadDoc} from "../LibDoc/UploadDoc/UploadDoc";

const Main = () => {
  return (
    <div className="main-doc">
      <Switch>
        <Route path="/doc/button" component={ButtonDoc} />
        <Route path="/doc/menu" component={MenuDoc} />
        <Route path="/doc/input" component={InputDoc} />
        <Route path="/doc/upload" component={UploadDoc} />
      </Switch>
    </div>
  )
}

export {Main}