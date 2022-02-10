import React, {useState} from 'react'
import './style.css'
import {useSelector, useDispatch} from "react-redux";
import TodoTask from "./TodoTask";
import {addTask} from "./redux/reducers/todo";



function App() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const todo = useSelector((store)=> store.todo.arr);
    const users = useSelector((store)=> store.employees.users);
    const company = useSelector((store)=> store.employees.company);

  return (
    <div className="App">
        <div>
            <input value={task} type="text" onChange={(e) => setTask(e.target.value)}/>
            <button type='button' onClick={()=> {
                dispatch(addTask(task));
                setTask('')
            }}>добавить</button>
        </div>
        <ul>
            {todo.map((item) =>(
                <TodoTask key={item.id} item={item}/>
            ))}
        </ul>
    </div>
  );
}

export default App;
