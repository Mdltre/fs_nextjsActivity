import React from 'react'

const Button = ({ onClick, text, color}) => {
  return (
    <Button onClick={onClick} className={`bg-${color}`}>
        {text}
    </Button>
  )
}

export default Button