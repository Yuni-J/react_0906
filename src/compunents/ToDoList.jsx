import React, { useRef, useState } from 'react';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {

    const nextId = useRef(0);


    const [ todos, setTodos ] = useState([{
        id:'',
        todotext: ''
    }])

    const [ inputs, setInputs ] = useState({todotext: ''});

    const {todotext} = inputs;

    const onChange =(e)=>{
        const { name, value } = e.target;
        setInputs({
            [name]: value
        });
        console.log(inputs)
    };

    const onCreate = () => {
        const todo = {
            id: nextId.current,
            todotext
        }
        
        setTodos(todos.concat(todo));

        setInputs({
            todotext: ''
        })

        console.log(todos);
        
        nextId.current += 1;
    
    };

    return (
        <div className='todotextst'>
            <CreateToDo todotext={todotext} onChange={onChange} onCreate={onCreate}/>
            {
                todos.map(t =>(
                    <ToDo todo={t} key={t.id}/>
                ))
            }
        </div>
    );
};

export default ToDoList;

// import React, { useRef, useState } from 'react';
// import CreateToDo from './CreateToDo';
// import ToDo from './ToDo';

// const ToDoList = () => {
//     const nextId = useRef(1);

//     const [todos, setTodos] = useState([]);
//     const [inputs, setInputs] = useState({ todotext: '' });

//     const { todotext } = inputs;

//     const onChange = (e) => {
//         const { name, value } = e.target;
//         setInputs(prevInputs => ({
//             ...prevInputs,
//             [name]: value
//         }));
//         console.log(e.target.value);
//     };

//     const onCreate = () => {
//         const todo = {
//             id: nextId.current,
//             todotext
//         };

//         setTodos(prevTodos => prevTodos.concat(todo));
       
//         setInputs({ todotext: '' });

//         nextId.current += 1;
//     };

//     return (
            
//         <div className='todotextst'>
//             <CreateToDo todotext={todotext} onChange={onChange} onCreate={onCreate} />
//             {
//                 todos.map(t => (
//                     <ToDo todotext={t} key={t.id} />
//                 ))
//             }
//         </div>
//     );
// };
// export default ToDoList;