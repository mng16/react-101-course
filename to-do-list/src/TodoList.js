import React from 'react';

const TodoList = (props) => {
    console.log(props);
    
    return (
        <ul>
            {props.list.map((item) => {
                console.log(item);
                return (<li>{item}</li>)
                
            })}
        </ul>
    )
}

export default TodoList;