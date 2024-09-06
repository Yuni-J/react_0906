import React from 'react';

const ToDo = ({todo}) => {
    // const todo = props.todo
    
    return (
        <div className='todo'>
            <h3><ol><li>{todo.todotext}</li></ol></h3>
        </div>
    );
};

export default ToDo;