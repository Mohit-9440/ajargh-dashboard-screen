import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-div'>
          <div className='header-heading'><h1>Orders</h1></div>
          <div className='header-button-wrap'><button>+ Add Order</button></div>
      </div>
    </div>
  )
}

export default Header