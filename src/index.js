import React from 'react';
import {render} from 'react-dom';
import css from './styles/home.styl';
import App from'./App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import store from './configureStore';

render(
  <Provider store = {store}>
    <App/>
  </Provider>
  ,document.getElementById('root'));
