/*
A) embedding expressions
1)variables
2)function calls
3)ternary expressions
4)mathematical operations

B)jsx with inline styles
1)jsx style is an object not a string

C)conditional rendering in jsx
1)using ternary operator
2)using short circuit rendering

D)jsx with loops(array)
1)jsx does not support for but we can use .map()

E)jsx is an expression
1)assign it to variables
2)pass as props 
3)return from functions

F)behind the scene
1)compiled to react.createElement() behind the scenes

G)jsx rules
1)Must return a single parent element (use <div> or fragments <> </>).

2)Use className instead of class, and htmlFor instead of for.

3)Self‑closing tags for elements without children (<img />).

4)No direct if-else — use ternary or logical &&.

5)Only expressions allowed inside {} — not statements.*/
import './App.css'

// PRO TIP: This is a helper function to show "Function Calls" in JSX (Topic A2)
function getUserStatus(score) {
  return score > 50 ? "Pro Developer" : "Noob Coder";
}

function App() {
  // --- TOPIC E: JSX IS AN EXPRESSION ---
  // E1: Assigning JSX to a variable. You can store UI in a variable!
  const greeting = <h1>Welcome to the Matrix</h1>;

  // Data for our examples
  const name = "Nikesh"; // A1: Variable
  const score = 99;      // For A4: Math
  const isLoggedIn = true; // For C1: Ternary
  const isAdmin = true;    // For C2: Short-circuit
  const skills = ["React", "JavaScript", "Python"]; // For D1: Loops

  return (
    // --- TOPIC G: JSX RULES ---
    // G1: Must return a single parent. We use a "Fragment" <> </> 
    // because it doesn't add extra junk (like a <div>) to the real HTML.
    <>
      {/* TOPIC E: Rendering a variable that holds JSX */}
      {greeting}

      {/* --- TOPIC A: EMBEDDING EXPRESSIONS --- 
          Everything inside { } is JavaScript logic. 
      */}
      <div>
        {/* A1: Using a Variable */}
        <p>Name: {name}</p>

        {/* A2: Function Call - We run a function and show the result */}
        <p>Status: {getUserStatus(score)}</p>

        {/* A4: Mathematical Operations - React does the math for you */}
        <p>Age in 10 years: {20 + 10}</p>
        
        {/* A3: Ternary Expressions - '?' is 'if', ':' is 'else' */}
        <p>Access: {score > 50 ? "Granted" : "Denied"}</p>
      </div>

      <hr />

      {/* --- TOPIC B: JSX WITH INLINE STYLES --- 
          B1: Style is an OBJECT. 
          The first { } is to tell JSX "JS is coming".
          The second { } is the actual JS Object.
          Note: 'font-size' becomes 'fontSize' (CamelCase).
      */}
      <div style={{ color: "cyan", backgroundColor: "#333", padding: "10px", borderRadius: "8px" }}>
        This box is styled using a JavaScript Object!
      </div>

      <hr />

      {/* --- TOPIC C: CONDITIONAL RENDERING --- */}
      <div>
        {/* C1: Ternary Operator (Classic If-Else) */}
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

        {/* C2: Short Circuit (The "If-Only" rule) 
            If isAdmin is true, it shows the <p>. If false, it shows NOTHING.
        */}
        {isAdmin && <p style={{ color: "red" }}>Warning: Admin Mode Active</p>}
      </div>

      <hr />

      {/* --- TOPIC D: JSX WITH LOOPS --- 
          D1: We use .map() because it returns a new array of JSX elements.
          'for' loops don't return anything, so they don't work here.
      */}
      <ul>
        {skills.map((skill, index) => (
          // G3: Self-closing tags like <br /> or <img /> must have the '/'
          <li key={index}>{skill}</li> 
        ))}
      </ul>

      {/* --- TOPIC G: SPECIAL RULES --- */}
      {/* G2: Use 'className' instead of 'class' because 'class' is a 
          reserved word in JavaScript. Same for 'htmlFor' instead of 'for'. */}
      <div className="main-container">
        <label htmlFor="user-input">Type something:</label>
        <input id="user-input" type="text" />
        
        {/* G3: Example of a self-closing tag */}
        <img src="https://via.placeholder.com/50" alt="placeholder" />
      </div>

      {/* PRO TIP: Nested JSX (Topic E2/E3) 
          You can pass JSX as a "prop" or child to other components.
      */}
    </>
  );
}

export default App;
