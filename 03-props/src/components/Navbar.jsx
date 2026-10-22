

const Navbar = (props) => {
  return (
         <div className="navbar">
          <img src="https://images.unsplash.com/photo-1790068853401-d5cdbc6755e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, rem?</p>
      <button>View Profile</button>
    </div>
  )
}

export default Navbar
