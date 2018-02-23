import * as firebase from '../firebase'

const todoTable = firebase.database.ref('TODOS')
const todoField = 'todo'
const doneField = 'done'

export const addTodo = (todoText) => {
  const todo = {
    todoField: 'todoText',
    doneField: false
  }
  todoTable.push(todo)
}

export const listenForAllTodosChanges = (callback) => {
  todoTable.on('value', (snapshot) => {
    const todos = []
    snapshot.forEach(function (todo) {
      todos.push(todo.val())
    })
    callback(todos)
  })
}
