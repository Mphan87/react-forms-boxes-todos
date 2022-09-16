import React, { useState } from "react";
import Todo from "./todo"
import NewToDoForm from "./NewToDoForm"

const TodoList = () => {
    const INITIAL_STATE = [{ id: 1, task: "Do dishes" }]
    const [todo, setTodo] = useState(INITIAL_STATE);
    
    
    const addTodo = (task) => {
        setTodo(todo => [...todo, {task}])
    };


  // update a todo with updatedTask
  const update = (id, updatedTask) => {
    setTodo(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };


  // delete a todo by id
  const remove = id => {
    setTodo(todos => todos.filter(todo => todo.id !== id));
  };


    return (
        <div>
            <h3>To Do List</h3>
            <NewToDoForm addTodo={addTodo} />
            <div>
                {todo.map(i => <Todo 
                id={i.id} 
                task={i.task} 
                key={i.id} 
                remove={remove}
                update={update}   
                />)}
            </div>
        </div>
    )
}
export default TodoList;



