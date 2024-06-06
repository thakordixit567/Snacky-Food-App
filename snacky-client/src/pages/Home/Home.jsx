import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Tesitimonials from './Tesitimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <SpecialDishes/>
    <Tesitimonials/>
    <OurServices/>
    </div>
  )
}

export default Home