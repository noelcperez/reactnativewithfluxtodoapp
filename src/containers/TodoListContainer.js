import { connect } from 'react-redux'
import TodoList from '../scenes/TodoList'
import { listenForTodoChanges } from '../actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  listenForTodoChanges () {
    listenForTodoChanges()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
