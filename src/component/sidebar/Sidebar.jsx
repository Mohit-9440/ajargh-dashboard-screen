import React from 'react'
import './sidebar.css'
import {BiTrendingUp} from 'react-icons/bi'
import {BsFillGrid3X2GapFill} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <img src={require('../../assets/zag.png')} alt=""/>
      </div>
      <div className='sidebar-buttons'>
        <div className='sidebar-button'>
          <div className='sidebar-button-icon'><BiTrendingUp/></div>
          <div className='sidebar-button-name'>Reports</div>
        </div>
        <div className='sidebar-button selected'>
          <div className='sidebar-button-icon'><BsFillGrid3X2GapFill/></div>
          <div className='sidebar-button-name'>Workspaces</div>
        </div>
        <div className='sidebar-button'>
          <div className='sidebar-button-icon'><IoMdSettings/></div>
          <div className='sidebar-button-name'>Settings</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar