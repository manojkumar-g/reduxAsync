import React from 'react';
import {render} from 'react-dom';
import App from './pages/Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import store from './configureStore';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import Login from './components/Login';
import Resticted from './pages/App';
import Reg from './components/Reg';
render(
  <Provider store = {store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component = {Login}/>
        <Route path = '/reg' component = {Reg}/>
        <Route path = '/app' component = {Resticted}/>
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root'));
