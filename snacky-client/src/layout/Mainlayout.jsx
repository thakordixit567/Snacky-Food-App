import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
import SpecialDishes from '../pages/Home/SpecialDishes'

const Mainlayout = () => {
  return (
    <div >
      <Navbar/>
     <Outlet/>
     <SpecialDishes/> 
    </div>
  )
}

export default Mainlayout