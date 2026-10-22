
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white'>
       <Navbar />
       <Page1content users = {props.user}/>
       
    </div>
  )
}

export default Section1
