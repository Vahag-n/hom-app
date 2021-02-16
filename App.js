import React from 'react';
import store from './Redux/Store'
import { Provider } from 'react-redux';
import Navigator from './Navigation/Navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
};


export default App;
