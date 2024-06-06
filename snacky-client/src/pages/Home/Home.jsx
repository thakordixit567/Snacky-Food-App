import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Tesitimonials from './Tesitimonials'

const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <SpecialDishes/>
    <Tesitimonials/>
    </div>
  )
}

export default Home