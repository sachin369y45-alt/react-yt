import { useState } from "react";


const App = () => {

  // const [num,setnum] = useState({name : 'sachin',age : 21});

  // const reaction = () => {
  //   // const newNum = {...num}
  //   // newNum.name = 'rohit';
  //   // newNum.age = 34;
  //   // setnum(newNum)
  //   setnum(prev => ({...prev,age : 30}))
  // }

  // const [num,setnum] = useState([3,4,5,6]);
  // const reaction = () => {
  //   const newNum = [...num];
  //   newNum.push(30);
  //   setnum(newNum)
  // }

  //batch update
  const [num,setnum] = useState(5);
  function reaction(){
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={reaction}>click</button>
    </div>
  )
}

export default App
