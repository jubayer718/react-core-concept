import { useState } from "react";

export default function Counter() {
  const counterStyle = {
   border: '2px solid purple',
   padding: '10px',
   margin: '10px',
   borderRadius:'8px'
 }
  const [count, setCount] = useState(0)
   function handleAdd() {
     const newCount = count + 1;
     setCount(newCount)
  }
  function handleDecrease() {
    const newCount = count - 1;
    setCount(newCount)
}
  return (
    <div style={counterStyle}>
    
      <h3 >Counter: {count} </h3>
      <button style={{ margin:'5px' }} onClick={handleAdd}>add</button>
      <button onClick={handleDecrease}>decrease</button><br />
    </div>
  )
}