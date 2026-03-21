// 1. We import 'useState'. This is a "Hook" that lets React remember values.
import { useState } from 'react'
import './App.css'

function App() {
  // 2. This line creates our 'state'.
  // count: The current value (starts at 0).
  // setCount: A special function we MUST use to change the value of count.
  let [count, setCount] = useState(0)

  // 3. These are our "Handler" functions. They run when a user clicks a button.
  function increment() {
    // We tell React: "Take the old count, add 1, and refresh the screen!"
    setCount(count + 1)
  }

  function decrement() {
    // We tell React: "Take the old count, subtract 1, and refresh the screen!"
    setCount(count - 1)
  }

  function reset() {
    // We tell React: "Set the count back to exactly 0."
    setCount(0)
  }

  // 4. The 'return' block is what actually shows up on your website (JSX).
  return (
    <>
      <h1>COUNTER APP</h1>
      
      {/* {count} inside curly braces tells React to display the actual number */}
      <p>COUNT : {count}</p>

      {/* 'onClick' connects the button to our functions above */}
      <button onClick={increment}>➕ INCREMENT</button>
      <button onClick={decrement}>➖ DECREMENT</button>
      <button onClick={reset}>🔄️ RESET</button>
    </>
  )
}

// 5. This makes the component available for your main.jsx to use.
export default App
