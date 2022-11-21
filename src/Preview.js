import React from 'react'
import {marked} from 'marked'

export default function Preview({message}) {
  return (
    <div className='preview-container'>
     <div className='title2'>Preview</div>
      <div className='form-floating'>
       <div
        className="form-control"
         placeholder="Leave a comment here" 
         id="floatingTextarea2" 
         style={{height: "200px",width:"80%",margin:"auto"}}
        dangerouslySetInnerHTML={{ __html: marked(message) }}
         >
           
        </div>
      </div>
    </div>
  )
}
