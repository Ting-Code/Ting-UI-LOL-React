import React, {useState} from 'react';
import './lib/style/index.scss';
import { Home } from "./view/Home/Home";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Doc} from "./view/Doc/Doc";
import {Topnav} from "./view/components/Topnav/Topnav";
const AsideContext = React.createContext<{asideVisible: boolean, setAsideVisibleFn:any, aside: boolean, setAsideFn:any}>({asideVisible: false, setAsideVisibleFn: {}, aside: false, setAsideFn:{}});

function App() {
  const width = document.documentElement.clientWidth
  const [asideVisible, setAsideVisible] = useState(width > 500)
  const [aside, setAside] = useState(width > 500)
  const setAsideVisibleFn = (value: boolean) => {
    setAsideVisible(value)
  }
  const setAsideFn = (value: boolean) => {
    setAside(value)
  }

  return (
    <div className="App">
      <AsideContext.Provider value={{asideVisible, setAsideVisibleFn, aside, setAsideFn}}>
        <Topnav/>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact={false} path="/doc" component={Doc} />
            <Redirect from="/*" to="/doc/*" />
          </Switch>
        </HashRouter>
      </AsideContext.Provider>
    </div>
  );
}

export default App;
export {AsideContext}
