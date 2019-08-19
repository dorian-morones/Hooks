import React from 'react'
import ClassCounter from '../Components/ClassCounter.js'
import HookCounter from '../Components/HookCounter.js'
import './pages.css'

export default function CounterPage(){
    return (

        <div className="Container">
            <div className="row">
                <h1>W/ Class</h1>
                <ClassCounter />
            </div>
            <div className="row">
                <h1>W/ Hooks</h1>
                <HookCounter />
            </div>
        </div>
      );
}