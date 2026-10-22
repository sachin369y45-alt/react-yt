


const App = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log('submit');
  }
  
  return (
    <div>
      <form onSubmit={(e) => {
        formHandler(e)
      }} >
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
