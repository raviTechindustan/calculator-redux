import React from 'react';
import ReactDOM from 'react-dom';
import Applogic from './applogic';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './redux/reducers';
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(<Provider store={store}>
  <Applogic />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
