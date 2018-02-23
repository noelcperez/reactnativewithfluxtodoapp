import { connect } from 'react-redux'
import TodoList from '../scenes/TodoList'
import { listenForTodoChanges } from '../actions'

const mapStateToProps = state => ({
  todos: state.app.todos
})

const mapDispatchToProps = (dispatch) => ({
  listenForTodoChanges () {
    dispatch(
      listenForTodoChanges()
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
