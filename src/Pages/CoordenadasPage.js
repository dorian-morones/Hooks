import React from 'react';
import Coordenadas from '../Components/ClassCordenada.js';
import CoordenadasHooks from '../Components/HookCordenada.js'
import './pages.css'

export default function CoordenadasPage(){
    return (
        <div className="Container">
            <div className="row">
                <h1>W/ Class</h1>
                <Coordenadas />
            </div>
            <div className="row">
                <h1>W/ Hooks</h1>
                <CoordenadasHooks />
            </div>
        </div>
      );
}