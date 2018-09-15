import React from 'react';
import TodoList from './TodoList';

const SortedTodos = (props) => {
    let list = [...props.list].sort((a,b) => a > b? 1: -1);
    return <TodoList list={list}/>
}

export default SortedTodos;