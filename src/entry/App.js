import React from 'react';
import { Provider } from 'react-redux';
import Routers from '@/router';
import store from '@/redux/store';


const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);
export default App;
