import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
