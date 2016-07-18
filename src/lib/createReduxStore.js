import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import createReducer from '../reducer';

export default function ({
  initialState,
  history,
}) {
  const logger = createLogger();
  const middleware = [
    logger,
    routerMiddleware(history),
  ];

  const enhancers = [];

  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      System.import('../reducer')
        .then((reducerModule) => {
          const createReducers = reducerModule.default;
          const nextReducers = createReducers(store.asyncReducers);

          store.replaceReducer(nextReducers);
        });
    });
  }

  return store;
}
