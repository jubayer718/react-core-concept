import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import PlayerCounter from './playerCounter'
import Users from './users'
import Friends from './friends'

function App() {
  // const [count, setCount] = useState(0)

  function handleClick() {
    alert('this button was click')
  }
  function handlekeyup() {
    alert('key up done')
  }
  function addToFive(num) {
   
    alert(num+15);
  }
 
  return (
    <>
      <Friends></Friends>
     <Users></Users>
      <h1 style={{ fontSize: '25px' }}>Rect Core Concept02</h1>
      <Counter  ></Counter>
      <PlayerCounter></PlayerCounter>
      <button onClick={handleClick}>Click me</button>
     <br />
      <br />
      
      <button onKeyUp={handlekeyup}>Keyup</button>
      <br />
      <br />
      <button onClick={()=>{addToFive(4)}}>Four</button>
      
    </>
  )
}

export default App
