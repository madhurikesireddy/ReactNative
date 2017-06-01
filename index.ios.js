import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import NavRootContainer from './components/Navigation/NavRootContainer';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
);

AppRegistry.registerComponent('commsapp', () => App);
