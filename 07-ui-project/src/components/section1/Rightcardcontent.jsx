

const Rightcardcontent = (props) => {
  return (
    <div>
       <div className=" h-full w-full absolute top-0 left-0 flex flex-col justify-between p-5">
        <h2 className="bg-amber-50 h-8 w-8 rounded-full flex justify-center items-center font-medium" >{props.id + 1}</h2>
        <div >
          <p className="leading-7 font-sans text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad blanditiis, quam inventore corrupti soluta deserunt error at deleniti ab.</p>
          <div className="flex justify-between my-1">
          <button className="bg-blue-500 text-white rounded-3xl px-3 py-1">{props.tag}</button>
          <button className="bg-blue-500 text-white rounded-3xl px-3 py-1"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Rightcardcontent
