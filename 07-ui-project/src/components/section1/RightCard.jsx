import Rightcardcontent from "./Rightcardcontent"

const RightCard = (props) => {
  return (
     <div className="overflow-hidden relative  h-full w-70 rounded-3xl shrink-0  ">
        <img  className ="h-full object-cover w-full "src={props.img} alt="" />
      
        <Rightcardcontent id = {props.id} tag = {props.tag} />
        </div>
  )
}

export default RightCard
