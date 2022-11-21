import React from 'react'


export default function Editor({message,handleMessageChange}) {

  return (
    <div className='editor-container'>
     <div className='title'>Editor</div>
      <div className='form-floating'>
       <textarea
        className="form-control" 
        placeholder="Leave a comment here" 
        id="floatingTextarea2" 
        style={{height: "200px",width:"50%",margin:"auto"}}
        name="message"
        value={message}
        onChange={handleMessageChange}
        
        >
      </textarea>
      </div>
    </div>
  )
}
