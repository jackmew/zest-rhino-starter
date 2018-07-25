import { Logger, PromiseTestUtil } from 'zest-rhino-lib/utils';
import CounterStore from '../stores/CounterStore';

class StoreManager {
    logger = null;
    promiseTestUtil = null;
    quotationStoreProductResolve = null;
  
    constructor() {
      this.logger = new Logger(StoreManager);
      this.promiseTestUtil = new PromiseTestUtil();
      // this.promiseTestUtil.printSecond();
    }
    configureStore() {
      return new Promise((resolve, reject) => {
        let stores = null;
        Promise.all([
            this.createStores(),
            // this.quotationStoreProductAdded(),
        ]).then(values => {
            stores = values[0];
            resolve(stores);
        }).catch(error => {
            console.log(error);
            reject(error);
        });
      });
    }
    createStores() {
      return new Promise(resolve => {
          const counterStore = new CounterStore();
  
          resolve({
            CounterStore: counterStore,
          });
      });
    }
  }
  export default new StoreManager();
