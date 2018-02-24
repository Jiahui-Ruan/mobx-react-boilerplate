import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';

import Counter from './Counter';
import counterState from './CounterState';
import Temperature from './Temperature';
import temps from './TemperatureState';
class App extends Component {
  render() {
    return (
      <div>
        <Counter counterState={counterState} />
        <Temperature temperatures={temps} />
        <Devtools />
      </div>
    )
  }
}

export default App;
