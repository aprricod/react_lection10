import React, {useState} from 'react'

export const CounterFunc = (props) => {
    const [counter, setCounter] = React.useState(props.start || 0)
    const s = props.step || 1
    return (
        <>
         {counter}   
         <br/>
         <button onClick={()=> setCounter(counter + s)}>Increment</button>
        </>
    )
}
