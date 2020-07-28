import { observable, action, computed } from 'mobx';

export default class CounterStore {
  @observable
  count = 0;

  @action
  increment() {
    this.count += 1;
  }

  @action
  decrement() {
    this.count -= 1;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}
