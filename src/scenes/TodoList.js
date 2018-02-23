import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Container, Content, List, ListItem, Body, Text } from 'native-base'

class TodoList extends Component {
  componentDidMount () {
    this.props.listenForTodoChanges()
  }

  _listItemRenderRow = (todo) => {
		return (
					<ListItem>
            <Body>
              <Text style={{ fontSize: 18 }}>{`${todo.text}`}</Text>
            </Body>
					</ListItem>
				)
	}
  render() {
    const { todos } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Content>
          <Text>Hi</Text>  
          <List style={{flex: 1}} dataArray={todos} renderRow={ this._listItemRenderRow } />
        </Content>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TodoList
