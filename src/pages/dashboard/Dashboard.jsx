import React from 'react'
import './dashboard.css';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Main from '../../component/main/Main';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='sidebar-wrap'>
        <Sidebar/>
      </div>
      <div className='header-main-wrap'>
          <Header/>
          <Main/>
      </div>
    </div>
  )
}

export default Dashboard