import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Intro from "./pages/Intro";
import Communion from "./pages/Communion";
import Adoration from "./pages/Adoration";
import Hymns from "./pages/Hymns";
import Navbar from "./components/Navbar";
import churchPic from './img/church.jpg';


function App() {
  return (

    <>

      <Navbar />
      <div className="App">





        <Routes>

          <Route path="/pages/intro" element={<Intro />} />
          <Route path="/pages/communion" element={<Communion />} />
          <Route path="/pages/adoration" element={<Adoration />} />
          <Route path="/pages/hymns" element={<Hymns />} />

        </Routes>




        <img className="churchPic" src={churchPic} />
      </div>


    </>
  );
}

export default App;
