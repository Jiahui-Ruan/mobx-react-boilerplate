import React, { Component } from 'react';
import { observer } from 'mobx-react';


export default class Temperature extends Component {
    render() {
        return (
            <ul>
                {this.props.temperatures.map(t =>
                    <TView key={t.id} temperature={t}/> 
                )}
            </ul>
        )
    }
}

@observer
class TView extends Component {
    render() {
        const t = this.props.temperature
        return (
            <li onClick={() => t.inc()}>
                {t.temperature}
            </li>
        )
    }
}
