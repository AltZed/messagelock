import React from 'react'
import '../style/style.scss'

function Input({
    placeholder,
    type,
}) {
  return (
    <div className='input'>
        <input placeholder={placeholder} type={type} />
    </div>
  )
}

export default Input