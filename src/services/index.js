import * as firebase from '../firebase'

const todoTable = firebase.database.ref("TODOS")
const todoField = "todo"
const doneField = "done"

export const addTodo = (todoText) => {
  const todo = {
    todoField: "todoText",
    doneField: false
  }
  todoTable.push(todo)
}

export const listenForAllTodosChange = callback => () => {
  todoTable.on("value", (snapshot) => {
    const todos = snapshot.val()
    console.log(todos)
    callback(todos)
  })
}
