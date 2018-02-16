import React from 'react';

import constants from '../src/constants'
import * as actions from '../src/actions/creators'

describe('Action Creators', () => {

  it('Add Todo', () => {
    const todoId = 1
    const todoText = "Todo 1"
    const expectedAction = {
      type: constants.ADD_TODO,
      id: todoId,
      text: todoText
    }

    expect(
      actions.addTodo(todoId, todoText)
    ).toEqual(expectedAction)
  });

  it('Toogle Todo', () => {
    const actionId = 1
    const expectedAction = {
      type: constants.TOOGLE_TODO,
      payload: actionId
    }

    expect(
      actions.toogleTodo(actionId)
    ).toEqual(expectedAction)

  });

  it('Remove Todo', () => {
    const todoId = 1
    const expectedTodo = {
      type: constants.REMOVE_TODO,
      payload: todoId
    }

    expect(
      actions.removeTodo(todoId)
    ).toEqual(expectedTodo)

  });

  it('Select Todo', () => {
    const todoId = 1
    const expectedTodo = {
      type: constants.SELECT_TODO,
      payload: todoId
    }

    expect(
      actions.selectTodo(todoId)
    ).toEqual(expectedTodo)
  });

  it('Edit Todo', () => {
    const todoId = 1
    const todoText = 1
    const expectedAction = {
      type: constants.EDIT_TODO,
      todoId: todoId,
      todoText: todoText
    }


    expect(
      actions.editTodo(todoId, todoText)
    ).toEqual(expectedAction)
  });

  it('Filter Todos', () => {
    const searchString = "todo"
    const expectedAction = {
      type: constants.FILTER_TODO,
      payload: searchString
    }

    expect(
      actions.filterTodos(searchString)
    ).toEqual(expectedAction)
  });

  it('Toogle Loading', () => {
    const expectedAction = {
      type: constants.TOOGLE_LOADING
    }

    expect(
      actions.toogleLoading()
    ).toEqual(expectedAction)
  });
});