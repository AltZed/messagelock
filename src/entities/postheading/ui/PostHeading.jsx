import React from 'react'
import './PostHeading.scss'

function PostHeading({
    text, color,
    isCreate, onChange
}) {
  return (
    <div className="post-heading" >
        <div className="post-set-color" style={{backgroundColor: color}} />
        {
          isCreate ?
            <div className="input-heading">
              <input onChange={onChange} type="text" placeholder='Заголовок' maxLength={80} />
            </div>  :
            text
        }
    </div>
  )
}

export default PostHeading