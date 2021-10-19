import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store/configureStore';
import './styles/index.scss';
import App from './App';


const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));