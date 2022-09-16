import React, { useState } from "react"
import { v4 as uuid } from 'uuid';



// addBox is from the parent passed down as a prop

const NewBoxForm = ({addBox}) => {

    // form data is going to be an object so we can have a single change handler

    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: "",
    }

    // We need a state for form.

    const [formData, setFormData] = useState(INITIAL_STATE);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        // spread operator copies the exisiting data and the [name] : value
        setFormData(formData => ({
            ...formData, [name]: value
        })
        )
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData.height, formData.width, formData.backgroundColor, {id:uuid()})
    setFormData(INITIAL_STATE)
    
  }




    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height </label>

            <input
                id="height"
                type="text"
                name="height"
                placeholder="height"
                // we definitly need value. This is how we tell react what is showing here
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="width"
                // we definitly need value. This is how we tell react what is showing here
                value={formData.width}
                onChange={handleChange}
            />


            <label htmlFor="backgroundColor">background color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="backgroundColor"
                // we definitly need value. This is how we tell react what is showing here
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            {/* <h1>{formData.height}</h1>
            <h1>{formData.width}</h1>
            <h1>{formData.backgroundColor}</h1> */}

            <button>Add Box</button>



        </form>



    )
}
export default NewBoxForm