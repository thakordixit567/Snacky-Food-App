import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"

const Mainlayout = () => {
  return (
    <div >
      <Navbar/>
     <Outlet/>
    </div>
  )
}

export default Mainlayout