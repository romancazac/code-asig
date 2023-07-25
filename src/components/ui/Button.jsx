import React from 'react'

export const Button = ({children, className = '', ...props }) => {
   return (
      <button {...props} className={`btn-block ${className}`}><span>{children}</span></button>
   )
}
