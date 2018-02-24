import { observable, computed, action } from 'mobx';

const APPID = 'd8620cb808512dd142e53dfb74df4916';
export class TemperatureState {
    id = Math.random();
    @observable unit = 'C';
    @observable temperatureCelsius = 25;
    @observable location = 'Amsterdam, NL';
    @observable loading = true;

    constructor(location) {
        this.location = location
        this.fetch()
    }

    @action fetch() {
        window.fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${this.location}`)
            .then(res => res.json())
            .then(action(json => {
                this.temperatureCelsius = json.main.temp - 273.15
                this.loading = false
            }))
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
temps.push(new TemperatureState('San Jose, US'))

export default temps;
