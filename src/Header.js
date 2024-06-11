import React from 'react'

export const Header = ({title}) => {
    
  return (
    <header>
        <h1>{title} </h1>
    </header>
    
  )
  
}
Header.defaultProps ={
  title: "To Do List"
}
export default Header;
