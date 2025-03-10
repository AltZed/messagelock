import React, { useState } from 'react'
import { buttonStyle } from '../style'
import '../style/style.scss'

/**
 * Описание компонента кнопки. 
 * 
*/

function Button({
  bgColor,
  text,
  textColor,
  icon,
}) {
  const [isHover, setHover] = useState(false)
  return (
    <div className={`button`} 
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      style={buttonStyle({bgColor, textColor, isHover})}>
      {icon} {text}
    </div>
  )
}

export default Button