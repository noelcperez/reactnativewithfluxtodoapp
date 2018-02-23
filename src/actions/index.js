import * as creators from './creators'
import * as service from '../services'

export const listenForTodoChanges = () => dispatch => {
  service.listenForAllTodosChanges(todos => {
    dispatch(
      creators.replaceTodos(todos)
    )
  })
}

export const saveTodo = (todoText) => {
  service.saveTodo(todoText)
}
