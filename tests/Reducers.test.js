import React from 'react'
import configureMockStore from 'redux-mock-store'

import appReducer from '../src/reducers'
import * as actions from '../src/actions/creators'
import constants from '../src/constants'
import initialState from '../src/initialState.json'

const mockStore = configureMockStore()

describe('App Reducer', () => {
  it('Undefined initial state should return an empty object', () => {
    const todoToAdd = "Todo 1"
    const todoId = 1

    expect(
      appReducer(undefined, {
        type: constants.NO_ACTION
      })
    ).toEqual(initialState.app)
  });

  it('Add Todo', () => {
    const todoId = 1
    const todoText = "Todo"
    const stateAfter = {
        ...initialState.app,
        todos: [
          ...initialState.app, {
          id: todoId,
          text: todoText,
          done: false
        }]
    }

    const action = actions.addTodo(todoId, todoText)

    expect(
      appReducer(initialState.app, action)
    ).toEqual(stateAfter)

  });

  it('Toogle todo', () => {
    const todoId = 1
    const todoText = 'Todo 1'
    const stateBefore = {
        ...initialState.app,
        todos: [
          ...initialState.app, {
          id: todoId,
          text: todoText,
          done: false
        }]
    }

    const stateAfter = {
      ...initialState.app,
      todos: [
        ...initialState.app, {
        id: todoId,
        text: todoText,
        done: true
      }]
    }

    const action = actions.toogleTodo(todoId)

    expect(
      appReducer(stateBefore, action)
    ).toEqual(stateAfter)

  });

  it('Delete Todo', () => {
    const todoId = 1
    const todoText = "Todo 1"

    const stateBefore = {
      ...initialState.app,
      todos: [
        ...initialState.app, {
        id: todoId,
        text: todoText,
        done: false
      },{
        id: 2,
        text: "Todo 2",
        done: false
      }]
    }

    const stateAfter = {
      ...initialState.app,
      todos: [{
        id: 2,
        text: "Todo 2",
        done: false
      }]
    }

    const action = actions.removeTodo(todoId)

    expect(
      appReducer(stateBefore, action)
    ).toEqual(stateAfter)
  });

});