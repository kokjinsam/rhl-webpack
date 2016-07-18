import createReducer from '../reducer';

export function injectAsyncReducer(store) {
  return (name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

export function injectAsyncSagas(store) {
  return (sagas) => sagas.map(store.runSaga);
}

export function getAsyncInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
  };
}
