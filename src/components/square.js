import React from "react"

const Square = ({id , onClick , state }) =>{

    return(
        <>
        <div className="square" 
        id={id} 
        onClick={() => {onClick(id)}}>
            { state  }
        </div>
        </>
    )
}
export default Square


