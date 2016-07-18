import { getAsyncInjectors } from './lib/asyncInjectors';
import Structure from './modules/core/components/Structure';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRootRoute(store) {
  const {
    injectReducer,
  } = getAsyncInjectors(store);

  return [{
    component: Structure,
    childRoutes: [{
      path: '/',
      getComponents(location, cb) {
        const renderRoute = loadModule(cb);

        Promise.all([
          System.import('./modules/core/components/LaunchPage'),
          System.import('./modules/core/reducers/launch'),
        ]).then(([component, reducer]) => {
          injectReducer('launch', reducer.default);
          renderRoute(component);
        }).catch(errorLoading);
      },
    }, {
      path: '/app',
      getComponents(location, cb) {
        const renderRoute = loadModule(cb);

        Promise.all([
          System.import('./modules/core/components/AppPage'),
          System.import('./modules/core/reducers/app'),
        ]).then(([component, reducer]) => {
          injectReducer('app', reducer.default);
          renderRoute(component);
        }).catch(errorLoading);
      },
    }],
  }];
}
