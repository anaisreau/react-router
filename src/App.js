import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Html from './components/Html'
import Home from './components/Home'
import Css from './components/Css'
import Javascript from './components/Javascript'

function App() {
  return (
    <>
    <Home />
      <Switch>
      <Route exact path = "/Html"component ={Html}/>
      <Route exact path = "/css"component ={Css}/>
      <Route exact path = "/Javascript"component ={Javascript}/>
      </Switch>
</>
  );
}

export default App;
