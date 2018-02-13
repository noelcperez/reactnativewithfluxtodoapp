import constants from '../constants'
import initialState from '../initialState.json'

export default appReducer = (state = initialState.app, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}