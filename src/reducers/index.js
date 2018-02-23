import constants from '../constants'
import initialState from '../initialState.json'

export default appReducer = (state = initialState.app, action) => {
  switch (action.type) {
    case constants.REPLACE_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: action.id,
            text: action.text,
            done: false
          }
        ]
      }
    case constants.TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            done: !todo.done
          }
        })
      }
    case constants.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload
        })
      }
    case constants.SELECT_TODO:
      const selectedTodos = state.todos.filter(todo => {
        return todo.id === action.payload
      })
      if (selectedTodos.length > 0) {
        const selectedTodo = selectedTodos[0]
        return {
          ...state,
          selectedTodo: selectedTodo
        }
      }
      return state
    case constants.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.todoId) {
            return todo
          }

          return {
            ...todo,
            text: action.todoText
          }
        })
      }
    case constants.FILTER_TODO:
      const filteredTodos = state.todos.filter(todo => {
        return todo.text.includes(action.payload)
      })
      return {
        ...state,
        filteredTodos: filteredTodos
      }
    case constants.TOOGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state
  }
}
