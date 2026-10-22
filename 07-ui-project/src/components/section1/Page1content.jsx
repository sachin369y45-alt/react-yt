import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className=' h-[90.7vh] flex
    gap-4 px-9 py-15'>
       <Leftcontent />
       <Rightcontent  user2 = {props.users}/>
    </div>
  )
}

export default Page1content
