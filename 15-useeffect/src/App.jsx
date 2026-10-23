import { useState } from "react"
import { useEffect } from "react"


const App = () => {
  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  
  function aChanging(){
    console.log('a is changing');
  }
  
  function bChanging(){
    console.log('b is changing');
  }
  useEffect(function(){
      aChanging();
      // console.log("useeffect is running")
  },[a])
  useEffect(function(){
      bChanging();
      // console.log("useeffect is running")
  },[b])
  return (
    <div>
      <h1>ON click A,{a}</h1>
      <h1>ON click B,{b}</h1>
      <button onClick={() => {
        setA(a+1);
      }}>A</button>
      <button onClick={() => {
        setB(b+1);
      }}>B</button>
    </div>
  )
}

export default App
