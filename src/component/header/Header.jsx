import React from 'react'
import './header.css'
import { IoMdAdd } from 'react-icons/io'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-div'>
          <div className='header-heading'><h1>Orders</h1></div>
          <div className='header-button-wrap'>
            <button>
              <IoMdAdd className='icon'/>
              <p>Add Order</p>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Header