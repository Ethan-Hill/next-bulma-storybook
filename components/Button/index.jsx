import React from "react"

export const Button = ({ children, className, click }) => {
  return (
    <button type="button" className={className} onClick={click}>
      {children}
    </button>
  )
}
