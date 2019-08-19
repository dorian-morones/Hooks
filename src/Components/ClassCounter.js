import React, {Component} from 'react';
import './components.css'

export default class ClassCounter extends Component{
    state = {
        counter: 0
    };

    render() {
        return (
            <div>
                <button className="btn" onClick={() => this.setState({ counter: this.state.counter + 1})}>
                    Increase 1
                </button>
                <h4>Counter is: {this.state.counter}</h4>
            </div>
        )
    }
}