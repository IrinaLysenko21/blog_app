import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const initialStore = (): any => {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default initialStore;
