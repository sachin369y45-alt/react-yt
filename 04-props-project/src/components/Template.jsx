import React from 'react'
import {Bookmark} from 'lucide-react'

const Template = (props) => {

  return (
    <div className="card">
           <div>
         <div className="top">
           <img src={props.logo} alt="" />
           <button>Save <Bookmark size={16} /> </button>
         </div>
         <div className="center">
           <h3>{props.name} <span>{props.datePosted}</span></h3>
           <p>{props.post}</p>
           <div className='centerlower'>
             <h4>{props.tag1}</h4>
             <h4>{props.tag2}</h4>
           </div>
         </div>
           </div>
         <div className="bottom">
           <div>
             <h3>{props.pay}</h3>
             <p>{props.location}</p>
           </div>
           <button>Apply now</button>
         </div>
       </div>
  )
}

export default Template
