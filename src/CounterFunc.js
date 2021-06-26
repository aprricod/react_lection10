import React, { useState } from 'react'

export const CounterFunc = ({start = 0, step = 1}) => {
    const [counter, setCounter] = useState(start)
    
    return (
        <>
         {counter}   
         <br/>
         <button onClick={()=> setCounter(counter + step)}>Increment</button>
        </>
    )
}
