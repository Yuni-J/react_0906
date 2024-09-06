import React from 'react';

const CreateToDo = ({ todotext, onChange, onCreate }) => {

    return (
        <div className='createtodo'>
            <input 
            type="text" 
            name='todotext'
            onChange={onChange}
            value={todotext}
            />
            <button onClick={onCreate}>추가</button>
        </div>
    );
};

export default CreateToDo;