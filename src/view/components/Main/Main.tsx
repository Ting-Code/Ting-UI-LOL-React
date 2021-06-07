import React from "react";
import './style.scss'
import {Route, Switch } from "react-router-dom";
import {ButtonDoc} from "../../DocLib/BurronDoc/ButtonDoc";
import {MenuDoc} from "../../DocLib/MenuDoc/MenuDoc";
import {InputDoc} from "../../DocLib/InputDoc/InputDoc";
import {UploadDoc} from "../../DocLib/UploadDoc/UploadDoc";
import {ProgressDoc} from "../../DocLib/Progress/ProgressDoc";
import {DialogDoc} from "../../DocLib/DialogDoc/DialogDoc";
import {PopoverDoc} from "../../DocLib/PopoverDoc/PopoverDoc";
import {RadioDoc} from "../../DocLib/RadioDoc/RadioDoc";
import {CheckboxDoc} from "../../DocLib/CheckboxDoc/CheckboxDoc";

const Main = () => {
  return (
    <div className="main-doc">
      <Switch>
        <Route path="/doc/button" component={ButtonDoc}/>
        <Route path="/doc/menu" component={MenuDoc}/>
        <Route path="/doc/input" component={InputDoc}/>
        <Route path="/doc/upload" component={UploadDoc}/>
        <Route path="/doc/progress" component={ProgressDoc}/>
        <Route path="/doc/dialog" component={DialogDoc}/>
        <Route path="/doc/popover" component={PopoverDoc}/>
        <Route path="/doc/radio" component={RadioDoc}/>
        <Route path="/doc/checkbox" component={CheckboxDoc}/>
      </Switch>
    </div>
  )
}

export {Main}