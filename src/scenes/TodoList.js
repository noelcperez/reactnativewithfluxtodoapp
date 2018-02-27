import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Container, Content, List, ListItem, Body, Text, Button } from 'native-base'
import Swipeout from 'react-native-swipeout'

class TodoList extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "TODO",
      headerRight: (
        <Button
          style={{ backgroundColor: "transparent" }}
          onPress={params._buttonPressed}>
          <Text style={{ color: 'black' }}>Add</Text>
        </Button>
      )
    }
  }
  
  componentDidMount () {
    this.props.listenForTodoChanges()
    this.props.navigation.setParams({ _buttonPressed: this._buttonPressed });
  }

  _showList(todos) {
      return (
        <List style={{ flex: 1 }} dataArray={todos} renderRow={this._listItemRenderRow} />
      )
  }

  _listItemRenderRow = (todo) => {
    var swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => { this._deleteNote(todo) }
      }]

		return (
          <Swipeout right={swipeoutBtns}
                    autoClose={true}
                    backgroundColor= 'transparent'>
            <ListItem onPress={ () => this._todoPressed(todo) }>
                <View>
                  {todo.done ?
                    <Text style={{ textDecorationLine: 'line-through' }}>{todo.text}</Text> :
                    <Text>{todo.text}</Text> 
                  }
                </View>
            </ListItem>
          </Swipeout>
				)
  }

	_showEmptyState() {
		return (<Container style={[styles.container, styles.centerContent, styles.emptyStateTextContent]}>
              <Text style={styles.emptyStateText}>Nothing to do, press the "Add" button and start working on it</Text>
				    </Container>)
  }
  
  _todoPressed(todo) {
    this.props.toogleTodo(todo)
  }
  
  _buttonPressed = () => {
    this.props.navigateToAddTodoScreen()
  }

  _deleteNote = (todo) => {
    this.props.removeTodo(todo.id)
  }

  render() {
    const { todos } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Content>
          { todos.length == 0 ?
            this._showEmptyState() :
            this._showList(todos)
          }
        </Content>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
	centerContent: {
		justifyContent: 'center',
		alignSelf: 'center'
  },
  emptyStateTextContent: {
    width: '60%'
  },
  emptyStateText: {
    textAlign: 'center'
  }
})

export default TodoList
