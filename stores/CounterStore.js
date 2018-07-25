import { observable, action, extendObservable } from 'mobx';

export default class TestCounterStore {
  @observable count = 0;

  @action onPlus() {
    this.count += 1;
  }

  @action onMinus() {
    this.count -= 1;
  }

}
// export default class TestCounterStore {
//   constructor() {
//     extendObservable(this, {
//       count: 0,
//       onPlus: action(() => {
//         this.count += 1;
//       }),
//       onMinus: action(() => {
//         this.count -= 1;
//       })
//     });
//   }
// }
