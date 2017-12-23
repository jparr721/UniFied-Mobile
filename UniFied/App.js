import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/components/Router';
import Feed from './src/components/pages/Feed';

const store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
