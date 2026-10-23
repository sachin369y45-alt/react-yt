import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data,setData] = useState([]);
  const getapi = async () => {
    console.log('running')
    const {data} =await axios.get('https://picsum.photos/v2/list')
   
    setData(data);
  }
  return (
    <div>
      <button onClick={getapi} >Get</button>
      <div>
      {data.map((elem,idx) => {
       return  <h2 key={idx}>hii {elem.author}</h2>
      })}

      </div>
      
    </div>
  )
}

export default App
