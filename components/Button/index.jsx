import React from "react"

export const Button = ({ children, className }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}
