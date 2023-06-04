import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        ZAG
      </div>
      <div className='sidebar-buttons'>
        <div className='sidebar-button'>Reports</div>
        <div className='sidebar-button'>Workspaces</div>
        <div className='sidebar-button'>Settings</div>
      </div>
    </div>
  )
}

export default Sidebar