import React, { useState } from 'react'
import { buttonStyle } from '../style'
import '../style/style.scss'
import { Link } from 'react-router-dom'

function LinkButton({
  bgColor,
  text,
  textColor,
  icon,
  to
}) {

  const [isHover, setHover] = useState(false)
  return (
    <Link 
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      to={to} className={`button`} 
      style={buttonStyle({bgColor, textColor, isHover})}>
      {icon} {text}
    </Link>
  )
}

export default LinkButton