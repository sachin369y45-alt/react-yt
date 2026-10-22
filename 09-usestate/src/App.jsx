import { useState } from "react"

const App = () => {
  const [num,setnum] = useState(0);
  
  function increment(){
    setnum(num+1)
  }
  function decrement(){
    setnum(num-1)
  }
  function plusFive(){
    setnum(num+5)
  }
  return (
    <div className="count">
      <h3>{num}</h3>

      <div className="btn">
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={plusFive}>+5</button>
      </div>

    </div>
  )
}

export default App
