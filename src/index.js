import React from 'react';
import ReactDOM from 'react-dom';
import { ExchangeRate } from './components/ExchangeRate';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById('root')
);
