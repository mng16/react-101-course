import React, { Component } from 'react';

const TodoForm = ({onAddItem}) => {
    let newItem = " ";
    return (
        <form
             onSubmit={(evt) => {
                 evt.preventDefault();
                 onAddItem(newItem.value);
             }}>
            
            <label>To do item</label>
            <input ref={(el)=>newItem=el} />
            <button >Submit</button>
        </form>

    )
}
export default TodoForm;