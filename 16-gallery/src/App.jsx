import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
  
  const [data,setData] = useState([]);
  const[page,setPage] = useState(1)
  // console.log(page)
  const getData = async() =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=16`)
    setData(response.data);
  }
  
  useEffect(function(){
    getData()
  },[page])

  let printUserData = <div className="h-[85%]">
    <h3 className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
    </div> ;
    

  if(data.length > 0){
     printUserData = data.map((elem,idx) => {
       return <div key={idx} className="h-60 w-70  rounded-xl overflow-hidden">
       <a href={elem.url}>  <img className="h-[90%] w-full object-cover rounded-b-xl" src={elem.download_url} alt='' />
        <h3 className="font-bold" >{elem.author}</h3>
        </a>
       </div>
     })
  }
  return (
    <div className="bg-black h-screen text-white p-6 ">
      <div className="h-165 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] mt-4 ml-19 font-medium flex flex-wrap gap-14">
          
          {printUserData}
        
        <div className="flex ml-[40%]  gap-6  w-screen">
               <button 
              style={{opacity : page == 1 ? 0.6 : 1}} className="bg-amber-400 text-black px-5 py-2 font-bold rounded-xl cursor-pointer active:scale-90" onClick={() => {
                if(page > 1){
                  setPage(page - 1)
                  setData([])
                }
              }} >Prev</button>
              <h1 className="bg-gray-300 pt-1 text-xl rounded-full px-4 text-black ">{page}</h1>
        <button className="bg-amber-400 text-black px-5 py-2 font-bold rounded-xl cursor-pointer active:scale-90" onClick={() => {
          setPage(page + 1)
          setData([])
        }} >Next</button>
         </div>
      </div>
    </div>
  )
}

export default App
