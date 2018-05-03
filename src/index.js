import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Scripts/jquery-3.3.1.js';
import './Scripts/jquery.signalr-2.2.0.min.js';
import './Scripts/server.js';
import store from './Redux/store';
import { Provider } from 'react-redux';
 
ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>),
document.getElementById('root')
);
registerServiceWorker();
