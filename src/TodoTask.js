import React from "react";
import {deleteTask} from "./redux/reducers/todo";
import {useDispatch} from "react-redux";


const TodoTask = ({item}) =>{
   const dispatch = useDispatch();



   return(
     <li>{item.title} <button onClick={() => dispatch(deleteTask(item.id))}>Удалить</button></li>
   );

};

export default TodoTask;