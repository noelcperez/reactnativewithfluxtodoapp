import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Container, Content, Input, Button, Text } from 'native-base'

class AddTodo extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: "Add Todo"
  })

	constructor() {
		super()
		this.state = {
			text: null
		}
  }
  
  _onTextChanged = (text) => {
    this.setState({ text })
  }

  _addTodo = () => {
    this.props.saveTodo(this.state.text)
  }

  render() {
    const { todos } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Content>
          <Input
            value={this.state.text}
            onChangeText={this._onTextChanged}
            style={styles.todoInput}
            placeholder='Todo text'
          />
          <Button onPress={this._addTodo} style={styles.addButton}>
            <Text>Add</Text>
          </Button>  
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
  todoInput: {
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center'
  },
  addButton: {
    marginVertical: 40,
    alignSelf: 'center',
    width: '60%',
    justifyContent: 'center'
  }
})

export default AddTodo
