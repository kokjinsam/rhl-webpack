import 'babel-polyfill';
import 'whatwg-fetch';

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import configureJSS from './configs/jss';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createStore from './lib/createReduxStore';
import Root from './Root';

// ---- JSS Configuration
configureJSS();

// ---- Redux Configuration
const initialState = (window && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__ : {};

const store = createStore({
  initialState,
  history: browserHistory,
});

if ((window && window.__INITIAL_STATE__)) {
  delete window.__INITIAL_STATE__;
}

// ---- Router Configuration
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    System.import('./Root')
      .then((NextRootModule) => {
        const NextRoot = NextRootModule.default;

        ReactDOM.render(
          <AppContainer>
            <NextRoot
              store={store}
              history={history}
            />
          </AppContainer>,
          MOUNT_NODE
        );
      });
  });
}
