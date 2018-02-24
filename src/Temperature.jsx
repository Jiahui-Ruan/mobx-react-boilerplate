import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TemperatureInput from './TemperatureInput';

@observer
export default class Temperature extends Component {
    render() {
        return (
            <div>
                <TemperatureInput temperatures={this.props.temperatures} />
                <ul>
                    {this.props.temperatures.map(t =>
                        <TView key={t.id} temperature={t} />
                    )}
                </ul>
            </div>
        )
    }
}

@observer
class TView extends Component {
    render() {
        const t = this.props.temperature
        return (
            <li onClick={() => t.inc()}>
                {t.location}:{t.temperature}
            </li>
        )
    }
}
