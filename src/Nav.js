import React from 'react'
import menuImage from "./menu1.png"
import contactImage from "./email 1.png"

function Nav() {
  return (
    <div className='nav'>
        <img src={menuImage} className='menu'/>
        <h1 className='name'>Blogging Website</h1>
        <img src={contactImage} className='contact'/>
    </div>
  )
}

export default Nav
