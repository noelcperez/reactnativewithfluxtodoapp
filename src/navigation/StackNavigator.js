import React from 'react'
import { StackNavigator } from 'react-navigation'

import TodoListContainer from '../containers/TodoListContainer'
import AddTodoContainer from '../containers/AddTodoContainer'

const StackNavigation = StackNavigator({
  TodoList: {
    screen: TodoListContainer
  },
  AddTodo: {
    screen: AddTodoContainer
  }
})

export default StackNavigation
