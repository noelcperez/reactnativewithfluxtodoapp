import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'
import AppWithNavigationState from './src/navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>  
    );
  }
}