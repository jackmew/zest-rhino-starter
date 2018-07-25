import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import { Logger } from 'zest-rhino-lib/utils';
import CounterScreen from '../screens/CounterScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store: {}, Provider: {}) {
  return new Promise(resolve => {
    
      Navigation.registerComponent('zest.rhino.CounterScreen', () => CounterScreen, store, Provider);

    resolve(true);
  });
}
export function registerScreenVisibilityListener() {
  return new Promise(resolve => {
      const logger = new Logger('RegisterScreens');
      new ScreenVisibilityListener({
        willAppear: ({screen}) => logger.trace(`Displaying screen ${screen}`),
        didAppear: ({screen, startTime, endTime, commandType}) => logger.trace('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
        willDisappear: ({screen}) => logger.trace(`Screen will disappear ${screen}`),
        didDisappear: ({screen}) => logger.trace(`Screen disappeared ${screen}`)
      }).register();
    resolve(true);
  });
}
