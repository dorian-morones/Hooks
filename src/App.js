import React from 'react';
import './App.css';
import CoordenadasPage from './Pages/CoordenadasPage.js';
import CounterPage from './Pages/CounterPage.js'
import HomePage from './Pages/HomePage.js'
import { Router, Link } from "@reach/router";
import './Home.css';

function App() {
  return (
    <div className="App">
      <div className="SelectContainer">
        <div className="Container">
        <Link className="ButtonSelect row" to="/">Home</Link> <Link className="ButtonSelect row" to="/coordenadas">Coordenadas</Link> <Link className="ButtonSelect row" to="/counter">Counter</Link>
        </div>
      </div>
      <Router>
        <HomePage path='/'/>
        <CoordenadasPage path='/coordenadas' />
        <CounterPage path='/counter'/>
      </Router>
    </div>
  );
}

export default App;
