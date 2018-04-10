import { createStore } from 'redux';
import middleware from './middleware';
import reducer from './reducer';

export default createStore(reducer, middleware);