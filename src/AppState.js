import { observable } from 'mobx';
class AppState {
  @observable counter = 0;

  Increment() {
    this.counter++;
  }

  Decrement() {
    this.counter--;
  }
}

export default AppState;
