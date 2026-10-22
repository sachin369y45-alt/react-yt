import { useState } from "react"

const App = () => {
 
  const [title,setTitle] =useState('');
  const [descp,setDescp] =useState('');
  const [task,setTask] = useState([]);

  const submitHandling = (e) => {
     e.preventDefault();

     const copyTask = [...task];

     copyTask.push({title,descp});
     setTitle('');
     setDescp('');

     setTask(copyTask);
     console.log(task)
    }

    const deleteNote = (idx) => {
          
           const copyTask = [...task];
           copyTask.splice(idx,1);

           setTask(copyTask);     
    }
 

  return (
    <div className="overflow-hidden h-screen lg:flex bg-black">

      <form className="p-10 flex flex-col min-w-1/2 gap-2" onSubmit={(e) => {
        submitHandling(e)
      }}>

          <h1 className="text-amber-50 font-bold text-2xl py-2">Add Notes</h1>

          <input className="border-2 border-white  px-2 py-3 rounded-xl text-xl text-white outline-none" type="text " placeholder="Enter notes heading" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }}/>

          <textarea className="border-2 border-white my-4 px-2 py-5 rounded-xl text-xl text-white outline-none" type="text " id="" placeholder="Write Details" value={descp} onChange={(e) => {
            setDescp(e.target.value)
          }}
          ></textarea>

          <button className="bg-white active:bg-gray-200 text-black w-fit py-2 px-3 rounded-xl">Add Notes</button>

      </form>
      <div className="  lg:w-1/2 p-10 ">
         <h1 className="text-white font-bold text-2xl">Recent Notes</h1>
         <div className=" flex flex-wrap overflow-y-auto h-150 gap-6 py-6">
          {task.map(function(elem,idx){
             return <div key={idx} className="bg-white flex flex-col h-60 w-[180px]  rounded-3xl justify-between shrink-0 py-4 px-5  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQste3Mr6zJjVkvINEJ3bz2GT93P0kTVywLvG2woKM_Pw&s=10')] bg-cover ">
              <h3 className="font-medium text-xl">{elem.title}</h3>
              <p className="text-gray-600 text-sm ">{elem.descp}</p>
              <button onClick={() => {
                deleteNote(idx);
              }} className="bg-red-500 text-amber-50 font-bold rounded-xl cursor-pointer active:scale-90">Delete</button>
             </div>
          })}
     </div>
      </div>
    </div>
  )
}

export default App
