import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <div>Counter: {this.props.appState.counter}</div>
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleInc = () => {
    this.props.appState.Increment()
  }

  handleDec = () => {
    this.props.appState.Decrement()
  }
}

export default App;
