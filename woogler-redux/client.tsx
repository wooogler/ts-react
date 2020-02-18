import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

const Hot = hot(App); //HOC

ReactDOM.render(
  <Provider store={store}>
    <Hot/>
  </Provider>
, document.querySelector('#root'));