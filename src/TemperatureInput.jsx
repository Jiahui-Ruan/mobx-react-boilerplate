import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { TemperatureState } from './TemperatureState';

@observer
export default class TemperatureInput extends Component {
    @observable input = ''

    render() {
        return (
            <div>
                Destination:
                <input onChange={this.onChange} value={this.input} />
                <button onClick={this.onSubmit}>Add</button>
            </div>
        )
    }

    @action onChange = (e) => {
        this.input = e.target.value
    }

    @action onSubmit = (e) => {
        this.props.temperatures.push(
            new TemperatureState(this.input)
        )
        this.input = ''
        console.log(this.props.temperatures);
        
    }
}
