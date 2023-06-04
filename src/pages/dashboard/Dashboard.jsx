import React from 'react'
import './dashboard.css';
import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import Main from '../../component/main/Main';

const Dashboard = () => {
  return (
    <div>
        <Sidebar/>
        <Header/>
        <Main/>
    </div>
  )
}

export default Dashboard