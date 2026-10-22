import RightCard from "./RightCard"


const Rightcontent = (props) => {
  return (
    <div className=' shrink-0 h-full w-2/3 py-7 px-6 flex gap-7 overflow-x-auto '>
      {props.user2.map((elem, idx) => {
      return <RightCard key = {idx} id = {idx} img = {elem.image} tag = {elem.tag} />
      })}

    </div>
  )
}

export default Rightcontent
