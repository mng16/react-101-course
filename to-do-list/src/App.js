import React, { Component } from 'react';

import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import SortedTodos from './SortedTodos';

class App extends Component {
  constructor() {
    super()
    this.state = {
        list: []
    }
    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem(item) {
    let newList = [...this.state.list, item];
    this.setState({list: newList})
  }

  onDeleteItem(itemToDelete) {
    let newList = this.state.list.filter(item => item !== itemToDelete);
    this.setState({list : newList});
  }

  render() {
    return (
      <div className="App">
        <SortedTodos list = {this.state.list}/>
        <TodoForm onAddItem={this.onAddItem}/>
      </div>
    );
  }
}

export default App;
