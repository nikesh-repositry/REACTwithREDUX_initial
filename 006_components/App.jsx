
import './App.css'
import Card from './components/Card'



//component in react example as below
function Shape(){
  return(
    <div className='shape'></div>
  )
}










//component approach
function Square(props){
  return(
    <div className= 'square'>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}
//function approach
function square(x,y){
  return(
    <div className='square'>
      <h1>{x}</h1>
      <h1>{y}</h1>
    </div>
  )
}
/* NOW VERY IMPORTANT HERE BOTH APPROACH SEEMS TO BE VERY SAME AS THE OUTPUT OF BOTH ARE ALOS SO SIMILAR
BUT HERE IS THE CORE IDEA BEHIND BOTH
APPROACH 1 
=react registers this. react knows it exists, tracks its life, and manage its memory. it is first-class citizen in the react tree
MERITS
=independent state: you can give it its own useState each square can remember its own data
=lifecycle hooks: you can use useEffect to fetch data specifically for that square
=performance: react can skip re-rendering this square it its props have not changed(using react.memo)

APPROACH 2
=this is just a javascript calculation. react has no idea this is a separate thing. to react it is just some JSX code that appeared inside the App component
merits
=pure js so it is fast and simple there is no react magic involved
=you can pass parameter like x,y instead of object
*/

function App() {

  return (
    <>
      <Square name="nikesh" age={21}/> {/* funtion example*/}
      {square("nikesh",21)}            {/* componen example*/}


      <Shape/> 
      {/*here is a single component is being use many times */}
      <Shape/>
      <Shape/>
      <Shape/>
      <Shape/>
      <Shape/>
      <Shape/>
      <Shape/>
      <Shape/>




      {/* this is the example of real magic of react component */}
       <div className='grid'>
        <Card title="Pehla" description="Pehla description"/>
        <Card title="Dusra" description="Pehla description"/>
        <Card title="Tesra" description="Pehla description"/>
        <Card title="Chotha" description="Pehla description"/>
        <Card title="Phachwa" description="Pehla description"/>
      </div>
    </>
  )
}

export default App
