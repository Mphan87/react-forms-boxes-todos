import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


const NewToDoForm = ({ addTodo }) => {

    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
   
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }))

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        addTodo(formData.task, { id: uuid() })
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Todo</label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.task}
                onChange={handleChange}
            />

            <button>Add Todo</button>

        </form>
    )
}
export default NewToDoForm;



