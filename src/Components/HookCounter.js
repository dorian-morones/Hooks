import React, {useState} from 'react';
import './components.css'

export default function HookCounter(){
   const [counter, setCounter] = useState(0); 

    return (
        <div>
            <button className="btn" onClick={() => setCounter(counter + 1)}>
                Increase 1
            </button>
            <h4>Counter is: {counter}</h4>
        </div>
    )
    
}