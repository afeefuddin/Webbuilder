import React from 'react'

function Button({children,color,text, style}) {
  return (
    <div className={`${color} text-center ${text} rounded cursor-pointer ${style}` }>{children}</div>
  )
}

export default Button