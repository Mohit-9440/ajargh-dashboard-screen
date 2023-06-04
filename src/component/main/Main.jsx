import React from 'react'
import './main.css'
import DataGrids from '../datagrid/Datagrid'

const Main = () => {
  return (
    <div className='main'>
      <div className='confirmed-wrap'>
        <div className='confirmed-head'>
          <div className='confirmed-head-left'>
            <h3>Confirmed</h3>
            <p>258</p>
          </div>
          <div className='confirmed-head-right'>
            <button>-</button>
          </div>
        </div>
        <div className='confirmed-content'>
          <DataGrids/>
        </div>
      </div>
      <div className='issues-wrap'>
        <div className='issues'>
          <div className='issues-left'>
            <h3>Issues</h3>
            <p>21</p>
          </div>
          <div className='issues-right'>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main