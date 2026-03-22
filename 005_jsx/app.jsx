import './App.css'  
// This line imports CSS file so you can style your app

function App() {  
// This is a React Functional Component (App component)
// Everything we show on screen is returned from here


  // =========================
  // A) EMBEDDING EXPRESSIONS
  // =========================

  const name = "Nikesh"  
  // Variable → used inside JSX using {}

  const age = 20  
  // Another variable for math example

  function greet(user) {  
    return "Hello " + user  
  }  
  // Function → can be called inside JSX

  const isLoggedIn = true  
  // Boolean value for conditional rendering



  // =========================
  // D) JSX WITH LOOPS (ARRAY)
  // =========================

  const users = ["Ram", "Shyam", "Sita"]  
  // Array → used with .map() to render list



  // =========================
  // E) JSX IS AN EXPRESSION
  // =========================

  const jsxVariable = <h2>I am stored inside a variable</h2>  
  // JSX stored inside variable

  function wrapper(component) {  
    return <div>{component}</div>  
  }  
  // JSX passed as argument and returned



  return (
    <>  
    {/* Fragment → allows multiple elements without extra div */}


      {/* ========================================= */}
      {/* A) EMBEDDING EXPRESSIONS */}
      {/* ========================================= */}

      <h1>{name}</h1>  
      {/* {} allows inserting JS value → output: Nikesh */}

      <h2>{greet(name)}</h2>  
      {/* Function call → executes greet("Nikesh") */}

      <h3>{isLoggedIn ? "Welcome Back" : "Please Login"}</h3>  
      {/* Ternary operator → if true show first, else second */}

      <h4>{age + 10}</h4>  
      {/* Mathematical operation → 20 + 10 = 30 */}



      {/* ========================================= */}
      {/* B) JSX INLINE STYLES */}
      {/* ========================================= */}

      <p style={{ color: "blue", fontSize: "18px" }}>
        Inline Styling Example
      </p>
      {/* IMPORTANT:
         - style = object (NOT string)
         - {{}} → outer {} = JS, inner {} = object
         - fontSize → camelCase
      */}



      {/* ========================================= */}
      {/* C) CONDITIONAL RENDERING */}
      {/* ========================================= */}

      {/* Using Ternary */}
      <p>{isLoggedIn ? "Dashboard Visible" : "Login Required"}</p>

      {/* Using Short Circuit */}
      {isLoggedIn && <p>User is Logged In</p>}
      {/* Explanation:
         - if true → renders JSX
         - if false → renders nothing
      */}



      {/* ========================================= */}
      {/* D) LOOPS USING .map() */}
      {/* ========================================= */}

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/* Explanation:
         - map() loops array
         - returns JSX for each item
         - key is required → helps React identify items
      */}



      {/* ========================================= */}
      {/* E) JSX IS AN EXPRESSION */}
      {/* ========================================= */}

      {jsxVariable}  
      {/* JSX stored in variable */}

      {wrapper(<p>This is passed as JSX</p>)}  
      {/* JSX passed into function */}



      {/* ========================================= */}
      {/* F) BEHIND THE SCENE */}
      {/* ========================================= */}

      <h1>Hello World</h1>

      {/* Behind the scene:
         This:
         <h1>Hello World</h1>

         Becomes:
         React.createElement("h1", null, "Hello World")

         React does NOT understand JSX directly
         Babel converts JSX → JS
      */}



      {/* ========================================= */}
      {/* G) JSX RULES */}
      {/* ========================================= */}

      {/* 1. SINGLE PARENT */}
      <div>
        <p>Child One</p>
        <p>Child Two</p>
      </div>

      {/* OR Fragment */}
      <>
        <p>Fragment One</p>
        <p>Fragment Two</p>
      </>


      {/* 2. className instead of class */}
      <div className="box">Styled Box</div>


      {/* 3. htmlFor instead of for */}
      <label htmlFor="input">Enter Name</label>
      <input id="input" />


      {/* 4. Self-closing tags */}
      <img src="https://via.placeholder.com/100" alt="img" />
      <br />


      {/* 5. No direct if-else */}
      {/* ❌ WRONG */}
      {/* if(isLoggedIn){ return <p>Yes</p> } */}

      {/* ✅ CORRECT */}
      <p>{isLoggedIn ? "Yes" : "No"}</p>


      {/* 6. Only expressions allowed */}
      {/* ❌ WRONG */}
      {/* {if(true){}} */}

      {/* ✅ CORRECT */}
      <p>{true && "Works fine"}</p>



      {/* ========================================= */}
      {/* EXTRA IMPORTANT CONCEPTS (ADDED BY ME) */}
      {/* ========================================= */}

      {/* 1. JSX must be properly closed */}
      <input />


      {/* 2. Nested JSX */}
      <div>
        <h2>Nested Example</h2>
        <p>Inside div</p>
      </div>


      {/* 3. Dynamic URL */}
      <a href={`https://google.com/search?q=${name}`}>
        Search {name}
      </a>


      {/* 4. Boolean attributes */}
      <button disabled={false}>Click Me</button>


      {/* 5. JSX ignores false/null/undefined */}
      <p>{false}</p>
      <p>{null}</p>
      <p>{undefined}</p>


      {/* 6. Multiple children rendering */}
      {[1,2,3].map(num => <p key={num}>Number {num}</p>)}


      {/* 7. Combining conditions */}
      {isLoggedIn && age > 18 && <p>Adult User Logged In</p>}


    </>
  )
}

export default App
