import React from 'react'
import { StackNavigator } from 'react-navigation'

import TodoListContainer from '../containers/TodoListContainer'

const StackNavigation = StackNavigator({
  TodoList: {
    screen: TodoListContainer
  }
})

export default StackNavigation
