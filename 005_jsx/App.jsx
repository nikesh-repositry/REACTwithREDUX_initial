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
/*
The Fragment <> </> (Topic G1): React is like a strict parent. It refuses to accept more than one "child" at the top level. If you try to return two <div>s side-by-side, it crashes. The Fragment acts like an invisible box to hold them together.

The Curly Braces { } (Topic A & G5): Think of these as a portal. Outside the braces, you are in HTML-land. Inside the braces, you are back in JavaScript-land. You can do math, call functions, or use variables. But you cannot write a full sentence like if (x) { ... }. You can only use pieces of code that "result" in a value (Expressions).

The Double Braces {{ }} (Topic B1): People get confused here. The first { starts the JavaScript portal. The second { is just how you write an "Object" in JavaScript. It’s like saying: "Hey React, enter JS mode, and here is a Style Object for you."

Why .map() and not for? (Topic D1): JSX needs to result in something it can draw on the screen. A for loop just "does" something but doesn't "give back" a value. .map() takes your list of names and "gives back" a list of <li> tags.

className vs class (Topic G2): In regular JavaScript, the word class is used to create Blueprints for objects. Because JSX is technically JavaScript, if you used class="my-style", JavaScript would get confused and think you're trying to build a code class. So, React changed it to className.

Behind the Scenes (Topic F1): When you see <h1>Hello</h1>, React doesn't actually see that. A program called Babel turns it into React.createElement('h1', null, 'Hello').

(Pro Tips):

The Key Prop: In the .map() section, I added key={index}. React needs a "ID card" for every item in a list so it can keep track of them.

CamelCase for Styles: In CSS, you write background-color. In JSX styles, you must write backgroundColor. No dashes allowed!*/

export default App;
