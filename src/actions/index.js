import * as creators from './creators'
import * as service from '../services'

export const listenForTodoChanges = () => {
  service.listenForAllTodosChange((todos) => {
    
  })
}

export const saveTodo = (todoText) => {
  service.saveTodo(todoText)
}
