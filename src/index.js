import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  applyMiddleware(sagaMiddleware),
];
if(process.env.NODE_ENV !== 'production') middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, compose(...middleware));
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
