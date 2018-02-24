import { observable, computed, action, useStrict } from 'mobx';

useStrict(true);

export class TemperatureState {
    id = Math.random();
    @observable unit = 'C';
    @observable temperatureCelsius = 25;
    @observable location = 'Amsterdam, NL';

    constructor(location) {
        this.location = location;
    }

    @computed get temperatureKelvin() {
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed get temperatureFahrenheit() {
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
        switch (this.unit) {
            case 'K': return this.temperatureKelvin + ' K';
            case 'F': return this.temperatureFahrenheit + ' F';
            case 'C': return this.temperatureCelsius + ' C';
        }
    }

    @action inc() {
        this.temperatureCelsius++;
    }

    @action setUnit(newUnit) {
        this.unit = newUnit;
    }

    @action setCelsius(degrees) {
        this.temperatureCelsius = degrees;
    }

    @action setTemperatureAndUnit(degrees, newUnit) {
        this.unit = newUnit;
        this.degrees = this.temperatureCelsius;
    }
}

const temps = observable([])
temps.push(new TemperatureState('LA'))

export default temps;
