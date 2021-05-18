import React, {useState} from 'react';
import './lib/style/index.scss';
import { Home } from "./view/Home/Home";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Doc} from "./view/Doc/Doc";
import {Topnav} from "./view/components/Topnav/Topnav";
const AsideContext = React.createContext<{asideVisible: boolean, setAsideVisible:any, aside: boolean, setAside:any}>({asideVisible: false, setAsideVisible: {}, aside: false, setAside:{}});

function App() {
  const width = document.documentElement.clientWidth
  const [asideVisible, setAsideVisible] = useState(width > 500)
  const [aside, setAside] = useState(width > 500)
  return (
    <div className="App">
      <AsideContext.Provider value={{asideVisible, setAsideVisible, aside, setAside}}>
        <Topnav/>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact={false} path="/doc" component={Doc} />
          </Switch>
        </HashRouter>
      </AsideContext.Provider>
    </div>
  );
}

export default App;
export {AsideContext}
