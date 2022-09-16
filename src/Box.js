import React from "react"

const Box = ({ id, height, width, backgroundColor }) => {



    const remove = id => {
        Box(Box => Box.filter(box => box.id !== id));
      };
    

    return (
        <div style={{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor
        }}>
            <p>{id}</p>

            <button onClick={remove}></button>


        </div>
    )
}

export default Box