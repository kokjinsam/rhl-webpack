/**
 * DO NOT NEED TO MODIFY
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from './routes';

/* eslint-disable react/prefer-stateless-function */
class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const {
      store,
      history,
    } = this.props;

    return (
      <Provider store={store}>
        <Router
          routes={createRoutes(store)}
          history={history}
        />
      </Provider>
    );
  }
}

export default Root;
