import React from "react";
import './App.css'
import {BrowserRouter as Route, Switch, Link, Router} from 'react-router-dom';
import Intro from "./Intro";
import Communion from "./Communion";
import Adoration from "./Adoration";
import Hymns from "./Hymns";



function App() {
  return (
    <div className="App">

<Router>
<Switch>
<Route  path = "/" component = {Intro}/>
        <Route  path = "/Intro" component = {Intro}/>
        <Route  path = "/Communion" component = {Communion}/>
        <Route  path = "/Adoration" component = {Adoration}/>
        <Route  path = "/Hymns" component = {Hymns}/>

</Switch>
        
  
      
</Router>


    </div>
  );
}

export default App;
