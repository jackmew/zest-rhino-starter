import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import Provider from 'zest-rhino-lib/utils/MobxRnnProvider';
import { registerScreens, registerScreenVisibilityListener } from './screens';
import StoreManager from './stores';
import { Layout } from 'zest-rhino-lib/global';
import { NavigatorStyle } from 'zest-rhino-lib/styles';
import { Logger } from 'zest-rhino-lib/utils';

export default class App {
  logger = null;
  constructor() {
    this.logger = new Logger(App);

    this.bootup().then(() => {
        // SplashScreen的處理 ios & android不同
        // if (Platform.OS === 'ios') {
        //   SplashScreen.hide();
        // }
        this.startApp();
    });
  }
  bootup() {
    return new Promise(resolve => {
      Promise.all([

        this.configureStoreAndRegisterScreen(),
        
      ]).then(() => {
        resolve(true);
      });
    });  
  }
  async configureStoreAndRegisterScreen() {
    const stores = await StoreManager.configureStore();
    await registerScreens(stores, Provider);
    registerScreenVisibilityListener();
    return true;
  }  
  startApp() {
    Layout.tabBarHeight = 0;
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'zest.rhino.CounterScreen',
        title: 'Counter',
        navigatorStyle: NavigatorStyle.navigatorStyle // https://wix.github.io/react-native-navigation/#/styling-the-navigator
      },
      animationType: 'fade',
    });
  }
}
