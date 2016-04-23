import React from 'react'
import ReactDOM,{ render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import reducers from './reducers';

import Layout from './components/Layout'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Layout title={'Some Website'}/>
  </Provider>,
  document.getElementById('react-app')
);





