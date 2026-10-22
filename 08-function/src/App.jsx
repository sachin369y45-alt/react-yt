const App = () => {
  function onclick(){
    console.log('clicking');
  }
  return (
    
    <div>
      <button onClick = {onclick} className="btn">Click</button>
      <button onMouseEnter = {() => {
          console.log('working')
      }} className="btn">Sachin</button>
      <button onMouseMove={(elem) => {
          console.log(elem.pageX)
      }} className="btn">bye</button>
    </div>
  )
}

export default App
