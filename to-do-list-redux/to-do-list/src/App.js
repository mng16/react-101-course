import React, { Component } from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";

//import logo from './logo.svg';
import "./App.css";

const mapStateToProps = state => {
  return {
    list: state.todoList
  };
};

var ListContainer = connect(mapStateToProps)(ToDoList);

var App = props => (
  <div>
    <h1>To Do List</h1>
    <ListContainer />
  </div>
);

// const SortList = props => {
//   var sortedList = [...props.list].sort((a, b) => (a > b ? 1 : -1));
//   return <ToDoList list={sortedList} />;
// };

export default App;
