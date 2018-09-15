import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addToDo: task => dispatch({ type: "ADD_TO_DO", value: task })
  };
};

const ToDoList = props => {
  let task = {};
  return (
    <div>
      <ul>
        {props.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          {
            /*sub();*/
          }
        }}
      >
        <label>Add task</label>
        <input ref={el => (task = el)} />
        <button
          onClick={event => {
            props.addToDo(task.value);
          }}
        >
          submit
        </button>
        }
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ToDoList);
