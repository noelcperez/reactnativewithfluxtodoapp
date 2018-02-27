import { connect } from 'react-redux'
import TodoList from '../scenes/TodoList'
import { listenForTodoChanges, navigateToAddTodoScreen, removeTodo, toogleTodo } from '../actions'

const mapStateToProps = state => ({
  todos: state.app.todos
})

const mapDispatchToProps = (dispatch) => ({
  listenForTodoChanges () {
    dispatch(
      listenForTodoChanges()
    )
  },
  navigateToAddTodoScreen () {
    dispatch(
      navigateToAddTodoScreen()
    )
  },
  removeTodo (todoId) {
    removeTodo(todoId)
  },
  toogleTodo(todo) {
    toogleTodo(todo)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
