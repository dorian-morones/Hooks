import React from 'react'
import './pages.css'

export default function HomePage(){
    return (

        <div className="Container">
            <div className="row generalText">
                <h1>Introducing Hooks</h1>
                <p>Only work for functional components, since it gives them the ability to have a state.</p>
                
                <h2>The main Hooks are</h2>
                <ul>
                    <li>useState = allows us to have a status in a functional component</li>
                    <li>useEffect = allows us to access life cycle methods</li>
                    <li>useRef</li>
                </ul>

                <p>Advantage:</p>
                <ul>
                    <li>Completely optional, and you don't have to rewrite the entire code, just add it in parts of your application without breaking it.</li>
                    <li>Are 100% compatible with previous versions of react.</li>
                    <li>Reduce the size of the components</li>
                    <li>Reduce the hell wrapper, that is, the number of elements that can be included in the virtual DOM as we encapsulate components</li>
                    <li>Compile time and size are lighter than a class component</li>
                    <li>Reusability of logic</li>
                </ul>

                <p>Rules:</p>
                <ul>
                    <li>We must declare our hooks in a higher order, that is, at the beginning of our function</li>
                    <li>You cannot use Hooks within a class type component, since it is not possible</li>
                    <li>Always need start with "use" and the name of the hook</li>
                </ul>
            </div>
        </div>
      );
}