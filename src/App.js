import React from "react";
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import Intro from "./Intro";
import Communion from "./Communion";
import Adoration from "./Adoration";
import Hymns from "./Hymns";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/intro" component={<Intro />} />
            <Route path="/communion" component={<Communion />} />
            <Route path="/adoration" component={<Adoration />} />
            <Route path="/hymns" component={<Hymns />} />
          </Routes>
        </Router>
      </>


    </div>
  );
}

export default App;
