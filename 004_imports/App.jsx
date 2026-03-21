import './App.css'
import Header,{Card,Card2} from './Header.jsx'
import pht from './assets/react.svg'
import {sum} from './utility.js'
import data from './data.json'

function App() {

  let result = sum(1,2)
  console.log(result)
  console.log(data)

  return (
    <>
    <h1>hello</h1>
    <Header/>
    <Card/>
    <Card2/>
    <img src="./favicon.svg" alt="" />
    <img src={pht} alt="" />
    <img src="./src/assets/react.svg" alt="" />
    </>
  )
}

export default App
