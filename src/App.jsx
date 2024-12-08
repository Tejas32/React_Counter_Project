import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 5;

  const addValue = ()=>{
    counter = counter + 1
    setCounter(counter)
    console.log("Value added", counter)// changed Math.random() to counter value
  }

 
  
  const decValue = ()=>{
    setCounter(counter-1)
    console.log("Value Decreased", counter)
  }

  return ( 
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button
     onClick = {addValue}>Add Value</button>
     <br />
     <button onClick = {decValue}>Decrease Value </button>
    </>
  )
}

export default App
