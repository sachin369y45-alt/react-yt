

const App = () => {
  const object = {
    name : 'sachin',
    age : 21
  }
  localStorage.setItem('object',JSON.stringify(object))
  const copy =JSON.parse(localStorage.getItem('object'))
  console.log(copy)
  return (
    <div>
      
    </div>
  )
}

export default App
