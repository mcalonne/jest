import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import GuessWordApp from './app/App';
import store from './config-store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GuessWordApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);