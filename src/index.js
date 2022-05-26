import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter} from 'react-router-dom';
import App from './App';
import rootReducers from './redux/reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import saga from './redux/saga'

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
