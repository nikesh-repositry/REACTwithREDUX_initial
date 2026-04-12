import React,{useState} from "react";

const Card = (props)=>{
    const[count,setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }

    return(
        <div className='card'>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Card


/*
React makes each component instance completely independent: 
when you render multiple `<Card />` components, React executes the 
function separately for each one, giving each its own isolated 
state through `useState`. That state is stored in React’s internal 
Fiber tree, so even though the function looks like it “dies” after 
running, React remembers the values and reuses them on the next render.
 This means clicking “Increment” in one card only updates the count for 
 that specific instance, while the others remain untouched—like baking
  multiple cakes from the same recipe, each cake is separate even though
   the instructions are identical.
*/
