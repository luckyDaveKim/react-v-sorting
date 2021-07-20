import React from 'react';
import { Provider } from 'react-redux';
import SortVisualizer from './components/organisms/SortVisualizer/SortVisualizer';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SortVisualizer />
    </Provider>
  );
};

export default App;
