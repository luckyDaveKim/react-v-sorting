import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './redux';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

export default function configure() {
  const store = createStore(
    rootReducer,
    {}, // pre-loaded state
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
