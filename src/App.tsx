import React from 'react';
import { Provider } from 'react-redux';
import configure from './store/configure';
import SortVisualizer from './components/organisms/SortVisualizer/SortVisualizer';

const store = configure();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SortVisualizer />
    </Provider>
  );
};

export default App;
