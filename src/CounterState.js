import { observable, action } from 'mobx';

class CounterState {
    @observable counter = 0;

    @action Increment() {
        this.counter++;
    }

    @action Decrement() {
        this.counter--;
    }
}

const counterState = new CounterState();
export default counterState;
