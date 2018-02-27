import { connect } from 'react-redux'
import AddTodo from '../scenes/AddTodo'
import { saveTodo } from '../actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  saveTodo(todoText) {
    dispatch(
      saveTodo(todoText)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
