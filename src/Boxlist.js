import { tSExpressionWithTypeArguments } from "@babel/types"
import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const Boxlist = () => {
    const INITIAL_STATE = [
        { id: 1, height: 5, width: 5, backgroundColor: "blue" }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

// This function is in charge of adding form Data. It is passed down to the child (NewBoxForm) via prop

    const addBox = (height, width, backgroundColor) => {
  
    //   This copies the original array and adds in a new object [...boxes, {height, width, backgroundColor}]
      setBoxes(boxes => [...boxes, {height, width, backgroundColor}])
    }

    return (
        <div>
            <h3> Boxes </h3>
            <NewBoxForm addBox ={addBox}/>
            <div>
                {boxes.map(i => <Box 
                id={i.id} 
                height={i.height} 
                width={i.width} 
                backgroundColor={i.backgroundColor}
       
                />)}
            </div>
        </div>
    )
}

export default Boxlist