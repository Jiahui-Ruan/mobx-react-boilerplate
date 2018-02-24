import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Counter extends Component {
    render() {
        return (
            <div>
                <div>Counter: {this.props.counterState.counter}</div>
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        )
    }

    handleInc = () => {
        this.props.counterState.Increment()
    }

    handleDec = () => {
        this.props.counterState.Decrement()
    }
}
