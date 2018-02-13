import constants from '../constants'


export const addTodo = (id, todo) => {
  return {
    type: constants.ADD_TODO,
    id: id,
    text: todo
  }
}

export const toogleTodo = (todoId) => {
  return {
    type: constants.TOOGLE_TODO,
    payload: todoId
  }
}

export const removeTodo = (todoId) => {
  return {
    type: constants.REMOVE_TODO,
    payload: todoId
  }
}

export const selectTodo = (todoId) => {
  return {
    type: constants.SELECT_TODO,
    payload: todoId
  }
}

export const editTodo = (todoId) => {
  return {
    type: constants.EDIT_TODO,
    payload: todoId
  }
}

export const filterTodos = (filterString) => {
  return {
    type: constants.FILTER_TODO,
    payload: filterString
  }
} 