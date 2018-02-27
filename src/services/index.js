import * as firebase from '../firebase'

const todoTable = firebase.database.ref('TODOS')

export const addTodo = (todoText, callback) => {
  const todo = {
    text: todoText,
    done: false
  }
  todoTable.push(todo)
  callback()
}

export const listenForAllTodosChanges = (callback) => {
  todoTable.on('value', (snapshot) => {
    const todos = []
    snapshot.forEach(function (todo) {
      var theTodo = todo.val()
      theTodo.id = todo.key
      todos.push(theTodo)
    })
    callback(todos)
  })
}

export const removeTodo = (todoId) => {
  todoTable.child(todoId).remove()
}

export const toogleTodo = (todo) => {
  todoTable.child(todo.id).child('done').set(!todo.done)
}