import * as creators from './creators'
import * as service from '../services'
import StackNavigation from '../navigation/StackNavigator'
import { NavigationActions } from 'react-navigation'

export const listenForTodoChanges = () => dispatch => {
  service.listenForAllTodosChanges(todos => {
    dispatch(
      creators.replaceTodos(todos)
    )
  })
}

export const saveTodo = (todoText) => dispatch => {
  service.addTodo(todoText, () => {
    dispatch(
      navigateBack()
    )
  })
}

export const removeTodo = (todoId) => {
  service.removeTodo(todoId)
}

export const toogleTodo = (todo) => {
  service.toogleTodo(todo)
}

export const navigateToAddTodoScreen = () => dispatch => {
  dispatch(
    navigateTo('AddTodo')
  )
}

const navigateTo = (screen) => {
  return StackNavigation.router.getActionForPathAndParams(screen)
}

const navigateBack = () => {
  return NavigationActions.back()
}